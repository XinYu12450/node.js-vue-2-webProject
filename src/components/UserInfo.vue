<template>
    <div>
        <div class="navlist">首页 > 个人中心 > {{pagestate}}</div>
        <div class="cartbody row mt-3">
				<div class="float-left col-3 pr-2">
					<div class="bg-white text-center p-5">
						<img src="../assets/img/head.jpg" class="rounded" style="height: 64px;width: 64px;">
						<div id="username2" class="mt-2">{{userinfo.itname}}</div>
					</div>
					<div class="myInfo bg-white text-center">
						<ul class="list-unstyled pt-3 border-top" id="mylistgt">
							<li class="mt-3" id="myddli" @click="gousersecondroute('')">我的订单</li>
							<li class="mt-3" id="myzcli" @click="gousersecondroute('myzc')">我的资产</li>
							<li class="mt-3" id="myscli" @click="gousersecondroute('mysc')">我的收藏</li>
							<li class="mt-3" id="mydzli" @click="gousersecondroute('mydz')">地址管理</li>
						</ul>
					</div>
				</div>
                <router-view></router-view>

			</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'userInfo',
    data(){
        return {
            pagestate:'我的订单'
        }
    },
    computed:{
        ...mapState('userState',['userinfo'])
    },methods:{
        gousersecondroute(value){
            switch(value){
                case '':
                    this.pagestate='我的订单'
                    break;
                case 'myzc':
                    this.pagestate='我的资产'
                    break;
                case 'mysc':
                    this.pagestate='我的收藏'
                    break;
                case 'mydz':
                    this.pagestate='我的地址'
                    break;
            }
            this.$router.push({
                path:'/userinfo/'+value
            })
        }
    }
}
</script>

<style>

</style>