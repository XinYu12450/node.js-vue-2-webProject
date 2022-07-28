<template>
    <div class="float-right col-9 bg-white" id="mydzmain">
		<div class="infoChecked m-3 border-bottom">地址管理</div>
		<userdzinfo :toggelwindow="toggelwindow"></userdzinfo>
        <userdzcontorl :isShow="isShow"></userdzcontorl>
    </div>
</template>

<script>
import userdzcontorl from './UserdzContorl.vue'
import userdzinfo from './UserdzInfo.vue'
export default {
    name:'userdz',
    components:{
        userdzcontorl,userdzinfo
    },
    data(){
        return { isShow:false,userinfo:{} }
    },
    methods:{
        toggelwindow(){
            this.isShow=!this.isShow
        }
    },
    mounted(){
        //正常来说这里应该axios请求服务器返回用户真实数据，这里偷懒用本地存储
        this.userinfo=JSON.parse(localStorage.getItem('userinfo')) 
    }
}
</script>

<style>

</style>