<template>
    <div class="header">
        <div class="left">
            <i class="el-icon-s-unfold"></i>
        </div>
        <div class="right">
            <p class="name">张某某</p>
            <p class="logo">
                <img src="@/assets/img/photo1.png" alt="">
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            click(){
                
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .header{
        width: 1100px;
        height: 62px;
        line-height: 62px;
        background: rgb(20,160,255);
        .left{
            float: left;
            height: 62px;
            line-height: 62px;
            margin-left: 20px;
            i{
                width: 20px;
                height: 20px;
                color: #fff;
                font-size: 20px;
            }
        }
        .right{
            float: right;
            height: 62px;
            line-height: 62px;
            .name{
                float: left;
                color: #fff;
                font-size: 16px;
                margin-right: 20px;
            }
            .logo{
                float: right;
                margin-top: 6px;
                img{
                    width: 50px;
                    heigth: 50px;
                }
            }
        }
    }
</style>
