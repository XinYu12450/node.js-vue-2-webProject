<template>
  <div>
    <pageHead></pageHead>
    <div class="container">
    <userSearch></userSearch>
    <div class="clearfix"></div>
    <router-view></router-view>
    <pagefooter></pagefooter></div>
    
  </div>
</template>

<script>
    import Vue from 'vue'
    import pageHead from './components/PageHead.vue'
    import pagefooter from './components/PageFooter.vue'
    import userSearch from './components/UserSearch.vue'
    export default {
        name:'App',
        components:{
            pageHead,pagefooter,userSearch
        },
        methods:{
          showDom(){
            console.log(this.$refs.mytest.$data)
          },
        },
        mounted(){
          this.$store.commit('userState/userlogin',JSON.parse(localStorage.getItem('userinfo')))
        },
        beforeCreate(){
          //全局事件总线注册
          Vue.prototype.$bus=this
        }
        
    }
</script>

<style>

</style>