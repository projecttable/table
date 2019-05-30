<template>
    <div class="rec-menu">
        <img :src="img" >
        <div class="content">
            <h2 class="title">{{title||"标题"}}</h2>
            <h3 class="span">{{text||"菜谱"}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type: String
        },
        text:{
            type: String
        },
        img:{
            type: String
        }
    }
}
</script>
<style lang="stylus" scoped>
$vw=1/6.4
.rec-menu{
    position: relative;
    img{
        width: 100%;
        height: 100%;
        display: block
    }
    .content{
        width: 100%;
        height: 100%;
        display:flex;
        color: #fff;
        text-align: center;
        background: rgba(0,0,0,.2);
        flex-direction: column;
        align-content: center;
        justify-content: center;
        font-weight: 600;
        position: absolute;
        top: 0;
        .title{
            font-size: 36vw*$vw;
        }
        .span{
            font-size: 24vw*$vw;
            padding-top: 10vw*$vw;
        }
    }
}
</style>
