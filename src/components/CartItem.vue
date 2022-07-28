<template>
    <div class="row bg-light mt-4">
        <div class="col-2 m-auto p-2">
            <input type="checkbox" onselect="null" class="p-2" name=procheckbox v-model="iteminfo.isSel"  @click="togItem(iteminfo.id)"/>
            <span class="text-center">
                <img :src="'http://localhost:1888/public/img/'+iteminfo.comm_id+'/'+priHead" class="w-75 h-75 ml-2">
            </span>
        </div>
        <div class="col-4 m-auto">
            <a @click="GoItemInfo(iteminfo.id)" class="text-decoration-none drakfont">
                {{iteminfo.name}}
            </a>
        </div>
        <div class="col-2 m-auto">￥{{iteminfo.price}}</div>
        <div class="col-2 m-auto text-center">1</div>
        <div class="col-1 m-auto">￥{{iteminfo.price}}</div>
        <div class="col-1 m-auto text-center"><a class="text-decoration-none mdfont drakfont"  name="delitem" @click="delItem(iteminfo)">X</a></div>
    </div>
</template>

<script>
export default {
    name:'cartitem',
    data(){
        return {
            
        }
    },
    computed:{
        priHead(){
            return this.iteminfo.pri.split(';')[0]
        }
    },
    methods:{
       
    },
    props:['iteminfo','delItem','togItem'],
    mounted(){
    }
}
</script>

<style>

</style>