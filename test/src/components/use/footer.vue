<template>
    <footer class="footer">
        <img src="https://s2.cdn.xiangha.com/images/m5/Common/bottom-bg.png" alt="">
        <em class='down'></em>
        <button class="btn">打开香哈APP查看更多菜谱、养生、相克知识</button>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
$vw=1/6.4
.footer{
    position: relative;
    .down{
        width: 42vw*$vw;
        height: 45vw*$vw;
        display: block;
        animation: pullDown 1s infinite;
        background: url(https://s2.cdn.xiangha.com/images/m5/Common/icon-common.png)no-repeat 0 -258vw*$vw;
        background-size: 158vw*$vw 415vw*$vw;
        position: absolute;
        left: 48%;
        top: 15%;
    }
    .btn{
        width: 92%;
        color: #fff;
        height: 74vw*$vw;
        font-size: 16vw*$vw;
        font-weight: 700;
        border-radius: 4vw*$vw;
        border: 1vw*$vw solid #fff;
        box-shadow: 0 1vw*$vw 3vw*$vw 0 #fff; 
        transform: translate(-50%,-50%);
        position: absolute;
        left: 50%;
        top: 53%;
    }
}
@keyframes pullDown {
    0%{transform:translateY(0vw*$vw)}
    50%{transform:translateY(10vw*$vw)}
    100%{transform:translateY(0)}
}
</style>
