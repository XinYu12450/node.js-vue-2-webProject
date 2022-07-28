<template>
    <div>
        <div class="float-left p-2">
				<img src="../assets/img/logo@2x.30cd8c00.png" class=" m-auto align-self-center" width="166px" height="51px" @click="GoHomePage" />
			</div>
        <div class="align-items-end float-right p-3">

				<div class="input-group border pl-2 rounded-left">
					<div class="input-group-prepend m-auto pr-2">
						<img src="../assets/img/bootstrap-icons-1.7.1/search.svg" width="16" height="16"/>
					</div>
					<input type="text" v-model="searchtext" class="form-control" placeholder="找找宝贝" id="searchinput">
					<div class="input-group-append">
					    <button class="btn btn-outline-secondary" type="button" id="searchbtn" @click="goSearchPage">搜索</button>
					  </div>
                      <span class="p-1"><a class="text-decoration-none" href="javascript:;" @click="goUserCart"><img src="../assets/img/bootstrap-icons-1.7.1/cart.svg" id="gocart" class="gocart"></a></span>
				</div>
                
		</div>
    </div>
  
</template>

<script>
export default {
    name:'UserSearch',
    methods:{
        GoHomePage(){
            this.$router.push({
                name:'homePage'
            })
        },
        goSearchPage(){
            this.$router.push({
                path:'/search',
                query:{
                    searchvalue:this.searchtext
                }
            })
        },
        goUserCart(){
            this.$router.push({
                path:'/usercart'
            })
        }
    },
    data(){
        return {
            searchtext:''
        }
    }
}

</script>
    
<style>

</style>