<template>
  <div class="bg-white align-content-center" id="newaddressbody" v-show="isShow">
	<div class="container shadow p-3 mb-5" >
		<h3 class="mb-3" id="userinfomsg">添加新信息</h3>
		<div class="input-group pl-2 mt-3 rounded-left bg-light">
			<div class="input-group-prepend m-auto pr-2 bg-light">
				<img src="../assets/img/bootstrap-icons-1.7.1/telephone-plus-fill.svg" width="16" height="16"/>
			</div>
			<input type="text" class="form-control bg-light border-0" placeholder="手机号码" id="usertelphone">
		</div>
		<div class="input-group pl-2 mt-3 rounded-left bg-light">
			<div class="input-group-prepend m-auto pr-2 bg-light">
				<img src="../assets/img/bootstrap-icons-1.7.1/shield-fill.svg" width="16" height="16"/>
			</div>
			<input type="text" class="form-control bg-light border-0" placeholder="请输入真实名称" id="userrelname">
		</div>
		<div class="input-group pl-2 mt-3 rounded-left bg-light">
			<div class="input-group-prepend m-auto pr-2 bg-light">
				<img src="../assets/img/bootstrap-icons-1.7.1/shield-fill.svg" width="16" height="16"/>
			</div>
			<input type="text" class="form-control bg-light border-0" placeholder="请输入昵称" id="useritname">
		</div>
		<div class="input-group pl-2 mt-3 rounded-left bg-light">
			<div class="input-group-prepend m-auto pr-2 bg-light">
				<img src="../assets/img/bootstrap-icons-1.7.1/shield-fill.svg" width="16" height="16"/>
			</div>
			<input type="text" class="form-control bg-light border-0" placeholder="请输入地址" id="useraddress">
		</div>
		<div class="input-group pl-2 mt-3 rounded-left bg-light">
			<div class="input-group-prepend m-auto pr-2 bg-light">
				<img src="../assets/img/bootstrap-icons-1.7.1/shield-fill.svg" width="16" height="16"/>
			</div>
			<input type="text" class="form-control bg-light border-0" placeholder="请输入邮政编号" id="zipcode">
		</div>
		<input type="button" class="p-3 bg-warning border-0 w-100 mt-3 rounded" value="注册新信息!" id="registerbtn" />
	</div>
	</div>
</template>

<script>
export default {
    name:'userdzcontrol',
    data(){
        return {
        }
    },
    props:['isShow']
}
</script>

<style>

</style>