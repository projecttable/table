<template>
    <div class="load" v-show='isShow'>
        <i class="icon"></i>
        <span>正在加载更多</span>
    </div>
</template>
<script>
export default {
    props:{
        isShow:{
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="stylus" scoped>
$vw=1/6.4
.load{
    color: #999;
    display: flex;
    padding: 20vw*$vw 0;
    font-size: 24vw*$vw;
    justify-content: center;
    .icon{
        width: 32vw*$vw;
        height: 32vw*$vw;
        display: block;
        animation: router 1s infinite;
        background: url(https://s2.cdn.xiangha.com/images/m5/Common/common_sprites.png)no-repeat 0 -40vw*$vw / 32vw*$vw;
        margin-right: 10vw*$vw;
    }
}
@keyframes router {
    0%{transform:rotate(0)}
    100%{transform:rotate(360deg)}
}
</style>
