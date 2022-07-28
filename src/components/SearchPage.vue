<template>
  <div class="bg-light pb-5">
	<div class="container pt-3 pb-5" id="searchmain">
		<div>为您找到<span id="pronum">{{searchitemlist.length}}</span>条结果</div>
		<div class="protypeshower">
			<div class=" row mt-3 row-cols-md-4">
                <searchitem v-for="item in searchitemlist" :key="item.id" :iteminfo="item"></searchitem>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import searchitem from './SearchItem.vue'
export default {
    name:'searchpage',
    components:{ searchitem },
    data(){
        return {
            searchitemlist:[]
        }
    },
    mounted(){
        axios.get('/api/get/getsearch?name='+this.$route.query.searchvalue).then(
            response =>{
                this.searchitemlist=response.data
            },
            error =>{
                console.error(error);
            }
        )
    }
}
</script>

<style>

</style>