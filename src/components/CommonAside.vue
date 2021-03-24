<template>
    <div>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#33aef0"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click='clickMenu(item)'>
                <i :class="'el-icon-'+item.icon"></i>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
            <el-submenu :index='item.path' v-for="(item,index) in hasChildren" :key="index" @click="clickMenu(subItem)">
                <template slot="title">
                <i :class="'el-icon-'+item.icon"></i>
                <span>{{item.label}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex">{{subItem.label}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed: {
            noChildren() {
                return this.asideMenu.filter(item=>!item.children) 
            },
            hasChildren() {
                return this.asideMenu.filter(item=>item.children) 
            }
        },
        data(){
            return{

                asideMenu:[
                    {
                        // 菜单所有属性写在这里
                        path: '/',//对应router
                        name: 'home',
                        label: '首页',//对应菜单标题
                        icon: 'home',//图标
    
                    },
                    {
                        path:'/video',
                        name:'video',
                        label:'视频管理页',
                        icon:'video-play'
                    },
                    {
                        path:'/user',
                        name:'user',
                        label:'用户管理',
                        icon:'user'
                    },
                    {
                        // 对于有二级页面，只要子集有地址就行
                        path:'/',
                        name:'other',
                        label:'其他',
                        icon:'location',
                        children:[
                            {
                                path:'/page1',
                                name:'page1',
                                label:'页面1',
                                icon:'setting'
                            },
                            {
                                path:'/page2',
                                name:'page2',
                                label:'页面2',
                                icon:'setting'
                            }
                        ]
                    }
                ],
            }
        },
        methods: {
            clickMenu(item) {
                this.$store.commit('selectMenu',item)
            }
        },
    }
</script>

<style lang="scss" scoped>
.el-menu{
    height:100%;
    border:none;
}
</style>