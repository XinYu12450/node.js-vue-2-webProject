<template>
    <!-- 组件模板 -->
    <div class="teststyle">
        <h2>姓名：{{name}}</h2>
        <h3>年龄：{{age}}</h3>
        <button @click="showName">组件按钮</button>
    </div>
</template>

<script>
import {hunhe} from '../mixins'
    // 组件交互
    export default {
        name:"MyTest",
        data(){
            return {
               
            }
        },
        // methods: {
        //     testclick(){
        //         // console.log(this.name)
        //     }
        // },
        // 父组件传值接受数据类型声明
        props:{
            name:String,
            age:{
                type:Number,
                // required:true,是否必要
                default:99
            }
        },
        mixins:[hunhe]
    }
</script>

<style scoped>
    /* 组件样式 */
    *{
        margin: 0;
        padding: 0;
    };
    .teststyle{
        background-color: skyblue;
    }
</style>