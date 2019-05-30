<template>
    <div class="index-box">
        <div class="index-title" v-if='menu'>
            <select class="">
                <option v-for='(data,key) in menu' :key='key' :value="key">{{data}}</option>
                <!-- <option value="caipu" selected>菜谱</option>
                <option value="caidan" >菜单</option>
                <option value="zhishi" >知识</option> -->
            </select>
            <i class="icon"></i>  
        </div>
        <input type="text" id="index" placeholder="搜索菜谱、食材等">
        <button class="btn">搜索</button>    
    </div>
</template>
<script>
export default {
    props:{
        menu: Object,
        
    }
}
</script>
<style lang="stylus" scoped>
$vw=1/6.4
.index-box{
    display: flex;
    overflow: hidden;
    border-radius: 35vw*$vw;
    border: 1vw*$vw solid #eee;
    box-shadow: 3vw*$vw 3vw*$vw 5vw*$vw #f1f1f1, -3vw*$vw 3vw*$vw 5vw*$vw #f1f1f1;
    .index-title{
        width: 100vw*$vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26vw*$vw;
        line-height: normal;
        padding-left: 20vw*$vw;
        select{
            width: 100%;
        }
        .icon{
            width: 28vw*$vw;
            height: 14vw*$vw;
            display: block;
            background: url(https://s2.cdn.xiangha.com/images/m5/Common/common-icon.png)no-repeat;
            background-position: 0 -46vw*$vw; 
            background-size: 53vw*$vw 255vw*$vw;
        }
    }
    #index{
        flex: 1;
        color: #666;
        font-size: 28vw*$vw;
        padding: 14vw*$vw 0;
        padding-left: 30vw*$vw;
    }
    .btn{
        color: #666;
        width: 114vw*$vw;
        height: 68vw*$vw;
        display: block;
        font-size: 28vw*$vw;
        background: #eaeaea;
    }  
}
</style>
