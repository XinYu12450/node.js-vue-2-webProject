<template>
  <div class="col mb-2 p-0 ">
    <div class="card m-2 border-0">
        <a class='text-decoration-none' href="javascript:;" @click="goItemInfo(iteminfo.id)">
	    <img :src="'http://localhost:1888/public/img/'+iteminfo.id+'/'+priHead" class="card-img-top align-self-center p-3" alt="...">
	    <div class="card-body p-2">
	    	<h5 class="text-center mt-1">{{iteminfo.name}}</h5>
	    	<div class="text-center pricetitle">￥<span class="price">499</span>起<span class="timerred smfont p-1 ml-1">特价</span></div>
	    </div></a>
    </div>
</div>
</template>

<script>
export default {
    name:'searchitem',
    props:['iteminfo'],
    computed:{
        priHead(){
            return this.iteminfo.pri.split(';')[0]
        }
    },
    methods:{
        goItemInfo(itemid){
            this.$router.push({
                name:'ItemInfoPage',
                query:{
                    itemid
                }
            })
        }
    },
}
</script>

<style scoped>
h5{
    height: 48px;
    overflow: hidden;
}
</style>