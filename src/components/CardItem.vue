<template>
  <div class="card col-3 mr-2 p-0 border-0" name="item">
		<a class='text-decoration-none' href='/iteminfo?itemid={{item.id}}'>
			<img src="../public/img/{{item.id}}/{{item.pri[0]}}" class="card-img-top align-self-center" alt="...">
			<div class="card-body p-2">
				<h5 class="text-center mt-1">{{item.name}}</h5>
					<div class="protip text-center">{{item.incd}}</div>
				<div class="text-center pricetitle">￥<span class="price">{{item.fakeprice}}</span>起
            </div>
		</div></a>
	</div>
</template>

<script>
export default {
    name:'CardItem',
    props:[item]
}
</script>

<style>

</style>