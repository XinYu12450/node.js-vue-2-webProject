<template>
 <div class="container">
			<div id="carouselExampleIndicators" class="carousel slide" data-intervel="2000" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">1</li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1">2</li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2">3</li>
					<li data-target="#carouselExampleIndicators" data-slide-to="3">4</li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="../assets/img/lb1.jpg" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item">
						<img src="../assets/img/lb2.png" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item">
						<img src="../assets/img/lb3.jpg" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item">
						<img src="../assets/img/lb4.jpg" class="d-block w-100" alt="...">
					</div>
				</div>
			</div>
<!--			专区-->
			<div class="zhuanqu">
				<div class="card-group row mt-3">
					<div class="card col-3 border-left-0 border-right-0 border-top-0 p-2">
						<img src="../assets/img/newpro.png" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2">
							<h5 class="text-center">上新精选</h5>
						</div>
					</div>
					<div class="card col-3 border-left-0 border-right-0 border-top-0 p-2">
						<img src="../assets/img/zhongchou.png" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2">
							<h5 class="text-center">小米众筹</h5>
						</div>
					</div>
					<div class="card col-3 border-left-0 border-right-0 border-top-0 p-2">
						<img src="../assets/img/miaosha.png" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2">
							<h5 class="text-center">有品秒杀</h5>
						</div>
					</div>
					<div class="card col-3 border-left-0 border-right-0 border-top-0 p-2">
						<img src="../assets/img/subm.png" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2">
							<h5 class="text-center">生活优选</h5>
						</div>
					</div>
					<div class="card col-3 border-left-0 border-right-0 border-top-0 p-2">
						<img src="../assets/img/milogo.png" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2">
							<h5 class="text-center">小米自营</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="protypeshower">
				<div class="protitle mt-4">
					<h2>有品秒杀<span class="timer"><img src="../assets/img/bootstrap-icons-1.7.1/lightning-fill.svg" class="p-1"><span class="timeround">12:00场</span><span class="timerred m-1">21</span>:<span class="timerred m-1">21</span>:<span class="timerred m-1">21</span></span></h2>
				</div>
				<div class="card-group row mt-3" id="miaosha">
					<div v-for="(item) in itemList[0]" :key="item.id" class='card col-3 mr-2 p-0 shadow cdms'  @click="goItemInfo(item.id)">
                        <a class='text-decoration-none' href="javascript:;">
                        <img :src="'http://127.0.0.1:1888/public/img/'+item.id+'/'+item.pri[0]" class='card-img-top align-self-center' alt='...'>
                        <div class='card-body p-2 zhuanqupro'>
                        <h5 class='text-center mt-1 proname'>{{item.name}}</h5>
                        <div class='text-center pricetitle'>￥<span class='price'>{{item.price}}</span>起<span class='nsprice'>￥{{item.fakeprice}}</span></div>
                        </div>
                        </a>
                    </div>
				</div>
			</div>
			<div class="protypeshower">
				<div class="protitle mt-4">
					<h2>每日新品<span class="protitletips ml-2">每日10点，惊喜不断</span></h2>
				</div>
				<div class="card-group row mt-3" id="xinping">
					<div v-for="(item) in itemList[1]" :key="item.id" class="card col-3 mr-2 p-0 border-0"  @click="goItemInfo(item.id)">
						<a class='text-decoration-none' href="javascript:;">
						<img :src="'http://127.0.0.1:1888/public/img/'+item.id+'/'+item.pri[0]" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2">
							<h5 class="text-center mt-1 proname">{{item.name}}</h5>
							<div class="protip text-center">{{item.incd}}</div>
							<div class="text-center pricetitle">￥<span class="price">{{item.fakeprice}}</span>起</div>
						</div></a>
					</div>
                    
				</div>
			</div>
			<div class="protypeshower">
				<div class="protitle mt-4">
					<h2>精选好物</h2>
				</div>
				<div v-for="(listroup,index) in itemList[2]" :key="index" class="card-group row mt-3" >
					<div v-for="(item) in listroup" :key="item.id" class="card col-3 mr-2 p-0 border-0"  @click="goItemInfo(item.id)">
						<a class='text-decoration-none' href="javascript:;">
						<img :src="'http://127.0.0.1:1888/public/img/'+item.id+'/'+item.pri[0]" class="card-img-top align-self-center" alt="...">
						<div class="card-body p-2">
							<h5 class="text-center mt-1">{{item.name}}</h5>
							<div class="text-center pricetitle">￥<span class="price">{{item.fakeprice}}</span>起</div>
						</div></a>
					</div>
				</div>
			</div>
			
		</div> 
</template>

<script>
import axios from 'axios'

export default {
    name:'HomePage',
    data(){
        return {
            itemList:[]
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
    mounted(){
        axios.get('/api/get/indexinfo').then(
            response =>{
               this.itemList=response.data
            },
            error =>{
                console.log(error)
            }
        )
    }
}
</script>

<style>

</style>