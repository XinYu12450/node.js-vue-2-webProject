<template>
  <div class="cartItem border-bottom m-3">
	<div class="itemSp">
		<div class="float-left">{{iteminfo.starttime}}</div>
		<div class="float-right infoChecked">{{itemState}}</div>
		<div class="clearfix"></div>
	</div>
	<div class="itemIf  pb-3">
		<div class="float-left">
			<img class="align-self-center float-left mt-3" :src="'http://localhost:1888/public/img/'+iteminfo.comm_id+'/'+itemHeadpri[0]" style="height: 120px;width: 120px"/>
			<div class="float-left justify-content-center mt-5 ml-3">
				<div>{{iteminfo.name}}</div>
				<div class="infoChecked">￥{{iteminfo.price}}</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="float-right infoChecked mt-5">X  1</div>
		<div class="clearfix"></div>
	</div>
	<div class="itemMo mt-3 mb-3">
		<div class="float-right">
			<div>共<span>一</span>件商品, 订单总金额: <span class="infoChecked">{{iteminfo.price}}</span>元</div>
			<div class="mt-3 float-right">
                <slot>
                    <button class="bg-white ml-2 pl-3 pr-3 border border-dark">删除订单</button>
					<button class="bg-white ml-2 pl-3 pr-3 border border-dark">订单详情</button>
                </slot>
		</div>
		<div class="clearfix"></div>
	</div>
    <div class="clearfix"></div>
</div>
  </div>
</template>

<script>
export default {
    name:'userdditem',
    props:['iteminfo','model'],
    computed:{
        itemState(){
            if(this.iteminfo.endtime && this.iteminfo.has_find){
                return '已收货'
            }else if(this.iteminfo.has_find){
                return '待收货'
            }else{
                return '待送达'
            }
        },
        itemHeadpri(){
            return this.iteminfo.pri.split(";")
        }
    }
}
</script>

<style>

</style>