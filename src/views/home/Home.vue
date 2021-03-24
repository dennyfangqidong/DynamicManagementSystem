<template>
    <div>
        <el-container style="height:100vh">
            <el-aside width="300px" ><common-aside style="height:100vh"></common-aside></el-aside>
            <el-container>
                <el-header><CommonHeader></CommonHeader></el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import CommonAside from '../../components/CommonAside'
    import CommonHeader from '../../components/CommonHeader'

    export default {
        components: {
            CommonAside,
            CommonHeader
        }
    }
</script>

<style lang="scss" scoped>
.el-header{
    background-color:black;
}
</style>