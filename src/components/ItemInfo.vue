<template>
  <div class="container">
			<div class="row mt-3 overflow-hidden" id="iteminfomain">
				<div class="float-left col-5">
					<div class="float-left w-75">
						<img :src="'http://localhost:1888/public/img/'+item.id+'/'+item.pri[0]" class="w-100" />
					</div>
					<div class="float-right w-25">
                        <template v-for="(value,index) in item.pri">
                            <img  :key="index" v-if="index!=0"  :src="'http://localhost:1888/public/img/'+item.id+'/'+value" class="h-25 w-100 pb-2 pl-2" />
                        </template>
						
					</div>
				</div>
				<div class="float-right col-7">
					<h5 class="mb-1">{{item.name}}</h5>
					<div class="timerred d-inline-block smfont">有品秒杀</div>
					<div class="smfont fontgary">{{item.incd}}</div>
					<div class="bg-light pb-3">
						<div class="smfont ml-1">售价:<span class="ml-4 lgfont timeround">￥{{item.price}}</span><span class="smfont fontgary ml-2">¥{{item.fakeprice}}</span></div>
						<div class="smfont ml-1">服务:<span class="ml-4 timeround">假一赔十</span><span class="ml-4 timeround">七天无理由</span><span class="ml-4 timeround">官方店铺</span></div>
						<div class="ml-5"><span class="ml-2 timeround">三天内送达</span></div>
					</div>
					<div class="smfont mt-2">
						配送至: {{item.address}}<span><a href="#">修改</a></span>
					</div>
					<div class="mt-3">
						<input type="button" class="CheckBTN pl-4 pr-4 pt-2 pb-2 rounded mdfont border-0" value="加入购物车" id="getincart" @click="irtcart">
						<span><input type="button" class="CheckBTN2  ml-4 pl-4 pr-4 pt-2 pb-2 rounded mdfont" value="立即购买" id="getinbuy" @click="irtlogs"></span>
					</div>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-10">
					<div class="infoChecked m-3 border-bottom">评论</div>
						<div class="pinglunbody" id="plbody">
						<div v-for="value in pinlun" :key="value.id" class="p-3 row">
							<div class="text-center col-1 ml-2"><img class="smhead" src="../assets/img/head.jpg"></div>
							<div class="col-10 ml-4 ">
								<div>{{value.itname}}</div>
								<div class="smfont fontgary">{{value.plti}}|{{value.name}}</div>
								<div class="mdfont">{{value.plco}}</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<div v-if="pinlun.length==0" class='text-center m-auto col-5'>
							<img class='mt-1 w-25 h-25' src='../assets/img/nullview.png'>
							<div class='mt-3'>暂无评论！</div>
					    </div>
			        </div>
			</div>
            <div class="col-2" id="moreitem">
					<div class="infoChecked m-3 border-bottom text-center">更多宝贝</div>

					<div v-for="value in moreitem" :key="value.id" class="card p-0 mb-3">
						<img :src="'http://localhost:1888/public/img/'+value.id+'/'+value.pri[0]" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2 zhuanqupro">
							<div class="text-center mt-1 smfont">{{value.name}}</div>
						</div>
					</div>

				</div>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'itemInfo',
    data(){
        return {
            item:{pri:[]},
            pinlun:[],
            moreitem:[]
        }
    },
    mounted(){
        axios.get('/api/get/iteminfo?itemid='+this.$route.query.itemid).then(
            response =>{
                this.item=response.data.iteminfo
                this.pinlun=response.data.pinlun
                this.moreitem=response.data.moreitem
            },
            error =>{
                console.error(error);
            }
        )
    },
	methods:{
		irtcart(){
		axios.get('/api/get/irtpro?comm_id='+this.item.id).then(
			response =>{
				if(response.data){
					alert("已加入购物车，快去个人页面看看吧！")
				}else{
						alert("未知错误，请联系管理员！")
				}
			}
		)	
		},
		irtlogs(){
		axios.get('/api/get/irtlogs?comm_id='+this.item.id).then(
				response =>{
					if(response.data=="OK"){
						alert("已加入订单，快去个人页面看看吧！")
					}else{
						alert("未知错误，请联系管理员！")
					}
				},
				error =>{
					console.error(error);
				}
			)
		}
	}
}
</script>

<style>

</style>