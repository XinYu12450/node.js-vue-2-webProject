<template>
      <div class="mt-4 bg-light row" id="gobuybtngroup">
        <div class="col-7 m-auto p-2" id="itemsum">合计  已选{{totalnum}}件</div>
        <div class="col-3 m-auto p-2">
            <div class="mdfont">合计:￥<span class="mdfont timeround" id="itemtotal">{{totalsum}}</span></div>
            <div class="smfont fontgary">总额:￥<span class="smfont" id="itemtotal2">{{totalsum}}</span><span id="itemfakezk">,立减￥{{totalfsum}}</span></div>
        </div>
        <div class="col-2 p-0">
            <input type="button" class="timerred w-100 h-100 border-0 m-0 p-0" value="立即购买" id="buyitem" @click="buyItem">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'cartfooter',
    data(){
        return {
            iteminfo:[{isSel:false,fakeprice:0,price:0}]
        }
    },
    computed:{
        totalnum(){
            return this.iteminfo.length ? this.iteminfo.filter(e=> e.isSel == true).length : 0
        },
        totalsum(){ 
            if(!this.iteminfo.filter(e=> e.isSel == true).length) return 0
            let sellist=[]
            this.iteminfo.filter(e=> e.isSel == true).forEach(e => {sellist.push(e.price)}) 
            return sellist.reduce((pre,cur)=>{return pre + cur})
        },
        totalfsum(){
            if(!this.iteminfo.filter(e=> e.isSel == true).length) return 0
            let sellist=[],selflist=[]
            this.iteminfo.filter(e=> e.isSel == true).forEach(e => {sellist.push(e.price);selflist.push(e.fakeprice)}) 
            return selflist.reduce((pre,cur)=>{return pre + cur}) - sellist.reduce((pre,cur)=>{return pre + cur});
        }
    },
    methods:{
        buyItem(){
            if(this.iteminfo.length == this.iteminfo.filter( e => e.isSel == false).length){
                alert('请先选中商品')
            }else{
            this.iteminfo.forEach((e) =>{
                //很逊 同时多次请求后端效率拉胯 优化:JSON.stringify购买商品队列后端处理
                if(e.isSel){
                    axios.get('/api/get/irtlogs?comm_id='+e.comm_id).then(
                        response =>{
                            if(response.data="OK"){
                                axios.get('/api/get/delcart?cart_id='+e.id+'&comm_id='+e.comm_id).then(
                                    response =>{if(response.data=="OK"){}})
                            }
                        })
                }
            })
            alert('购买完成')
            this.$router.push('/userinfo')
            }//有空后端改json.parse 直接解析
            
        }
    },
    mounted(){
        //初始化信息
        this.$bus.$on('cartFooterInfo',(data)=>{
            this.iteminfo=data
        })
    },
    beforeDestroy(){
        this.$bus.$off('cartFooterInfo')
    }
}
</script>

<style>

</style>