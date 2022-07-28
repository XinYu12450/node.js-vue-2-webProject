<template>
  <div id="itemgroupli">
            <!-- Item -->
            <cartitem v-for="item in cartlist" :key="item.id" :iteminfo="item" :delItem="delItem" :togItem="togItem"></cartitem>
            <!-- Tip -->
            <div v-if="!cartlist.length" class='text-center m-auto'>
                <img class='mt-5 w-25 h-25' src='../assets/img/no-order.png'>
                <div class='mt-3'>暂无商品记录！</div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
import cartitem from './CartItem.vue'
export default {
    data(){
        return {
             cartlist:[]
        }
    },
    mounted(){
        
        axios.get('/api/get/usercart').then(
            response =>{
                //初始化 商品 是否选中 [isSel]
                response.data.forEach(e => {
                    e.isSel=false
                });
                this.cartlist=response.data
            },
            error =>{
                console.error(error);
            }
        )

        this.$bus.$on('selallCheck',(data)=>{
            this.cartlist.forEach(e => e.isSel=data)
            this.tingtypeReport()
        })

    },
    methods:{
        delItem(item){
            // async await可优化异步实现伪同步效果
            //nodejs服务器接口 逻辑在服务器上 
            axios.get('/api/get/delcart?cart_id='+item.id+'&comm_id='+item.comm_id).then(
                response =>{
                    if(response.data=="OK"){
                        this.cartlist = this.cartlist.filter( e => e.id != item.id)
                    }
                }
            )
        },
        togItem(id){
            this.cartlist.forEach((e) =>{ if(e.id==id){e.isSel = !e.isSel} })
            this.$bus.$emit('cartIsAll',this.cartlist.filter(e=> e.isSel == true).length == this.cartlist.length)
            this.tingtypeReport()
        },
        tingtypeReport(){
            let tingItem=[]
            this.cartlist.forEach(e => {if(e.isSel)tingItem.push({id:e.id,comm_id:e.comm_id,price:e.price,fakeprice:e.fakeprice,isSel:true})})
            this.$bus.$emit('cartFooterInfo',tingItem.length !== 0 ? tingItem : [{isSel:false,fakeprice:0,price:0}])
        }
    },
    beforeDestroy(){
        this.$bus.$off('selallCheck')
    },
    components:{cartitem}
}
</script>

<style>

</style>