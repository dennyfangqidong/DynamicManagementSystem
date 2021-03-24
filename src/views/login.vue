<template>
    <div class="login">
    <p>管理系统</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

        <el-form-item label="用户名" prop="name">
        <!-- prop是rules校验时使用的名字 -->
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="login()">登录</el-button>
        </el-form-item> 
        </el-form>       
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return {
                ruleForm: {
                    username:'',
                    password:'',
                },
                rules:{
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 6, max: 300, message: '长度在6-30个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 100, message: '请输入最少6位最多100位字符', trigger: 'blur' }
                    ],                    
                }
            }
        },
        methods: {
            login(){
                let {username,password} = this.ruleForm
                this.$http({
                    methos:'post',
                    url:'/home/getData',
                    data:{
                        user:username,
                        password:password
                    }
                }).then(res=>{
                    console.log(res)
                    let {code} = res.data
                    if(code=='200'){
                        this.$router.push('/home')
                    }
                })
            }
        },
        mounted(){
            this.$http.post('/home/getData').then(res=>{console.log(res.data)})
        }
    }
</script>

<style lang="scss" scoped>

</style>