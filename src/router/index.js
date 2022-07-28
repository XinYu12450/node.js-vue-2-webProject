import VueRouter from "vue-router";
import userLogin from '../components/UserLogin.vue'
import userRegister from '../components/UserRegister.vue'
import homePage from '../components/HomePage.vue'
import itemInfo from '../components/ItemInfo.vue'
import userinfo from '../components/UserInfo.vue'
import userdd from '../components/Userdd.vue'
import userzc from '../components/Userzc'
import usersc from '../components/Usersc'
import userdz from '../components/Userdz'
import search from '../components/SearchPage'
import usercart from '../components/UserCart'
export default new VueRouter({
    routes:[
        {
            name:'userLogin',
            path:'/login',
            component:userLogin
        },
        {
            path:'/register',
            component:userRegister
        },
        {
            name:'homePage',
            path:'/',
            component:homePage
        },
        {
            name:'ItemInfoPage',
            path:'/iteminfo',
            component:itemInfo
        },
        {
            path:'/userinfo',
            component:userinfo,
            children:[
                {
                    path:'',
                    component:userdd
                },
                {
                    path:'myzc',
                    component:userzc
                },
                {
                    path:'mysc',
                    component:usersc
                },
                {
                    path:'mydz',
                    component:userdz
                }

            ]
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/usercart',
            component:usercart
        }
    ]
})
const VueRouterPush =VueRouter.prototype.push
VueRouter.prototype.push = function push (to){
    return VueRouterPush.call(this,to).catch(err => err)
}