<template>
    <div class="top">
        <div class="box">
            <div class="l">
                <i class="icon back" v-if='back' @click='backPage'></i>
                <router-link to="app" class='logo'>
                    <img src="https://s2.cdn.xiangha.com/images/m5/Common/new-common-logo.png" alt="">
                </router-link>
            </div>
            <button class="download">
                <router-link to="/app">下载APP</router-link>
            </button>    
        </div>
    </div>
</template>

<script>
export default {
    props:{
        back:{
            type: Boolean,
            default: true
        }
    },
    methods:{
        backPage(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
$vw=1/6.4
.top{
    width: 100%;
    height: 86vw*$vw;
    position: relative;
    z-index: 1000
    .box{
        width: 100%;
        height: 86vw*$vw;
        display: flex;
        padding: 0 35vw*$vw;
        background: #fff;
        align-items: center;
        box-sizing: border-box;
        justify-content: space-between;
        border-bottom: 1vw*$vw solid #eee;
        position: fixed;
        top: 0;
        .l{
            display: flex;
            align-items: center;
            .back{
                width: 12vw*$vw;
                height: 25vw*$vw;
                display: block;
                margin-right: 26vw*$vw;
                background-image: url(https://s2.cdn.xiangha.com/images/m5/Common/common-icon.png);
                background-position: 0 0;
                background-size: 54vw*$vw 255vw*$vw;
            }
            .logo{
                width: 90vw*$vw;
                height: 42vw*$vw;
                padding: 21vw*$vw 0;
                display: block;
            }    
        }
        .download{
            width: 125vw*$vw;
            height: 55vw*$vw;
            color: #fa273b;
            font-size: 22vw*$vw;
            font-weight: 700;
            border: 2vw*$vw solid #fa273b;
            border-radius: 10vw*$vw;
            &>*{
                color: #fa273b;
            }
        }
    }
}
</style>
