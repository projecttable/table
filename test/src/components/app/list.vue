<template>
    <div class="list">
        <app-header></app-header>
        <header class="header">
            <find :menu="menu"></find>
        </header>
        <div class="list-box">
            <h2 class="title">家常味的菜谱做法大全</h2>
            <ul class="list">
                <li class="item" v-for='(item,index) in list' :key='index'>
                    <div class="img-box"><img v-lazy="item.data.brand.image" alt=""></div>
                    <div class="con">
                        <h3 class="title ellipsis">{{item.data.brand.title}}</h3>
                        <p class="text text-ellipsis">{{item.data.brand.text||"ID："+item.data.brand.textTitle}}</p>
                    </div>
                </li>
            </ul>
            <div class="more"><i class="icon" @click='getLload'></i></div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import Bus from '@/assets/js/bus'
export default {
    data(){
        return{
            menu:{
                caipu: '菜谱',
                caidan: '菜单',
                zhishi: '知识',
            },
            list:null,
        }
    },
    methods:{
        getData(){
            let listData=JSON.parse(localStorage.getItem("app-listData"))
            this.list=listData
        },
        getLload(){
            let listData=JSON.parse(localStorage.getItem("app-listData"))
            this.list=this.list.concat(listData);
        },
    },
    computed:{
    },
    created(){
        this.getData();
    }
}
</script>
<style lang="stylus" scoped>
$vw=1/6.4
.list{
    .header{
        padding: 20vw*$vw 34vw*$vw;
    }
    .list-box{
        padding: 0 34vw*$vw;
        .list{
            .item{
                display: flex;
                margin-bottom: 30vw*$vw;
                .img-box{
                    width: 192vw*$vw;
                    height: 140vw*$vw;
                    margin-right: 18vw*$vw;

                }
                .con{
                    flex: 1;
                    width: 360vw*$vw;
                    height: 134vw*$vw;
                    .title{
                        color: #3e3e3e;
                        font-size: 28vw*$vw;
                        line-height: 42vw*$vw;
                        font-weight: 700;
                    }
                    .text{
                        color: #999;
                        flex-wrap: wrap;
                        font-size: 22vw*$vw;
                        line-height: 42vw*$vw;
                        margin-top: 5vw*$vw;
                    }
                }
            }
        }
        .more{
            width: 100%;
            .icon{
                width: 32vw*$vw;
                height: 32vw*$vw;
                display: block;
                margin: 20vw*$vw auto;
                animation: pullDown 1s infinite;
                background: url(https://s2.cdn.xiangha.com/images/m5/Common/icon-common.png)no-repeat 0 -178vw*$vw / 158vw*$vw 415vw*$vw;
            }
        }
    }
}
@keyframes pullDown {
    0%{transform:translateY(0vw*$vw)}
    50%{transform:translateY(10vw*$vw)}
    100%{transform:translateY(0)}
}
</style>
