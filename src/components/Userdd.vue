<template>
<div class="float-right col-9 bg-white" id="myddmain">
	<div id="cartHead" class="border-bottom m-3 row">
		<div class="col-8 row float-left text-center" id="probtnlist">
			<div class="col-3" :class="{cartCheck:model=='dsh'}" id="pronsh" @click="changeddlist('dsh')">待收货</div>
			<div class="col-3" :class="{cartCheck:model=='dsd'}" id="pronsd" @click="changeddlist('dsd')">待送达</div>
			<div class="col-3" :class="{cartCheck:model=='ysh'}" id="proysh" @click="changeddlist('ysh')">已收货</div>
			<div class="col-3" :class="{cartCheck:model=='all'}" id="proall" @click="changeddlist('all')">全部订单</div>
		</div>
		<div class="col-4 float-right text-right p-0">回收站</div>
	</div>
	<div id="useritemgroup">
        <userdd-item v-for="item in whatNow" :key="item.id" model="model" :iteminfo="item"></userdd-item>
        <div v-show="whatNow.length==0" class='text-center m-auto col-5'>
			<img class='mt-5 w-75 h-75' src='../assets/img/nullview.png'>
			<div class='mt-3'>暂无{{modelname}}订单！</div>
		</div>
	</div>
</div>

</template>

<script>
import axios from 'axios'
import userddItem from './UserddItem.vue'
export default {
    name:'userdd',
    data(){
        return {
            model:'dsh',
            modelname:'待收货',
            userlogslist:[]
        }
    },
    components:{
        userddItem
    },
    methods:{
        changeddlist(model){
            this.model=model
        }
    },
    mounted(){
        axios.get('/api/get/logsinfo').then(
            response =>{
                this.userlogslist=response.data
            },
            error =>{
                console.error(error);
            }
        )
    },
    computed:{
        whatNow(){
            return this.userlogslist.filter((item)=>{ 
                switch(this.model){
                    case 'dsh':
                        this.modelname='待收货'
                        return !item.has_find && item.endtime
                    case 'dsd':
                        this.modelname='待送达'
                        return !item.has_find && !item.endtime
                    case 'ysh':
                        this.modelname='已收货'
                        return item.has_find && item.endtime
                    default:
                        return true
                }
            })
        }
    }
}
</script>

<style>

</style>