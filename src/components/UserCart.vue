<template>
    <div class="mt-4" id="itemgroup">
        <!-- header -->
        <div class="row bg-light" id="protr">
        <div class="col-2 m-auto p-2"><input type="checkbox" id="SelAll" class="p-2" onselect="null" v-model="isSel" @click="togAll(!isSel)"/><span class="ml-3">全选</span></div>
        <div class="col-4 m-auto">商品信息</div>
        <div class="col-2 m-auto">单价</div>
         <div class="col-2 m-auto text-center">数量</div>
        <div class="col-1 m-auto text-center">金额</div>
        <div class="col-1 m-auto text-center">操作</div>
        </div>
        <!-- Lister -->
        <cartlist ></cartlist>
        <!-- Footer -->
        <cartfooter></cartfooter>
    </div>
</template>

<script>
import cartfooter from './CartFooter.vue'
import cartlist from './CartList.vue'
export default {
    name:'usercart',
    components:{ cartfooter,cartlist },
    
    data(){
        return {
            isSel:false
        }
    },
    methods:{
        togAll(isSel){
            this.isSel = isSel
            this.$bus.$emit('selallCheck',this.isSel)
        },   
    },
    computed:{
    },
    mounted(){
        this.$bus.$on('cartIsAll',(data)=>{
            this.isSel=data
        })
    },
    beforeDestroy(){
        this.$bus.$off('cartIsAll')
    }
}
</script>

<style>

</style>