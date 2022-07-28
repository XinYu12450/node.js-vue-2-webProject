<template>
  <div class="m-3 row" id="mydzgroup">
        <div class='col-5 pl-0 addressborder' v-if="userinfo" name='useraddressbody' @click="toggelwindow">
            <div class='CheckBTN d-inline-block pl-2 pr-2 mt-1 ml-1'>默认</div>
            <div class='mt-2 ml-3 sm-font'>{{userinfo.relname}}</div>
            <div class='mt-2 ml-3'>{{userinfo.telphone}}</div>
            <div class='ml-3'>{{userinfo.address}}</div>
            <div class='ml-3'>{{userinfo.zipcode}}</div>
        </div>
        <div class='col-5 pl-0 addressborder text-center ml-3 p-5' v-if="!userinfo" id='newaddress' @click="toggelwindow">
            <img src='../assets/img/bootstrap-icons-1.7.1/plus.svg' class='justify-content-center mt-4'>
            <div>添加新地址</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'userdzinfo',
    data(){
        return {}
    },
    computed:{
        ...mapState('userState',['userinfo'])
    },
    props:['toggelwindow']
}
</script>

<style>

</style>