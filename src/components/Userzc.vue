<template>
  <div class="float-right col-9 bg-white p-3" id="myzcmain">
	<div class="infoChecked m-3 border-bottom">优惠券</div>
	<div class="youhuijuansearch">
		<div class="ml-3 mr-3 mt-4 mb-4 w-75 overflow-hidden">
			<input type="text" class="form-control w-50 float-left" placeholder="请输入优惠码">
			<input type="button" class="float-left ml-2 CheckBTN p-2 border-0 rounded" value="确认兑换">
		</div>
	</div>
	<div class="m-3 row w-50 text-center pt-3" id="youhuijuanHead">
		<div class="col-4 checkBorder p-0">可使用</div>
		<div class="col-4 p-0">已使用</div>
		<div class="col-4 p-0">已过期/已失效</div>
	</div>
	<div class="text-center mt-4">
		<img class="mt-5 w-25 h-25" src="../assets/img/nullview.png">
		<div class="mt-3">您还没有任何优惠券</div>
	</div>
</div>
</template>

<script>
export default {
    name:'userzc'
}
</script>

<style>

</style>