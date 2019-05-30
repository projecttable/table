<template>
    <div class="app-index" ref='app'>
        <app-header :back='false'></app-header>
        <header class="header">
            <find/>
        </header>
        <div class='index-box'>
            <ul class="index-list-1">
                <li class="index" v-for="item of 8" :key='item' @click='link(data)'>
                    <i class="icon" :style='{backgroundPosition:index[item-1].bg}'></i>
                    {{index[item-1].name}}
                </li>
            </ul>
            <ul class="index-list-2">
                <li class="index" @click='sancan(0)'>
                    <img src="https://s3.cdn.xiangha.com/caipu/201901/1322/132257034457.jpg/MjUweDI1MA" class='laze'>
                    <h2 class='name'>早餐</h2>
                </li>
                <li class="index" @click='sancan(1)'>
                    <img src="https://s1.cdn.xiangha.com/caipu/201510/3113/311317268692.jpg/MjUweDI1MA" class='laze'>
                    <h2 class='name'>中餐</h2>
                </li>
                <li class="index" @click='sancan(2)'>
                    <img src="https://s3.cdn.xiangha.com/caipu/201510/3115/311526225121.jpg/MjUweDI1MA" class='laze'>
                    <h2 class='name'>晚餐</h2>
                </li>
            </ul>
            <ul class="index-list-3">
                <li class="index"><a>
                    <rec-menu 
                        class="rec-menu" 
                        :img='"https://s3.cdn.xiangha.com/caipu/201807/0215/021508094529.jpg/OTgweDA.webp"'
                        :title='"年夜饭【名厨精选上】"'
                        :text='"—10道菜谱—"'
                    ></rec-menu>
                </a></li>
                <li class="index"><a>
                    <rec-menu 
                        class="rec-menu" 
                        :img='"https://s3.cdn.xiangha.com/imgs/201811/1210/5be8dfd98841f.jpg/OTgweDA.webp"'
                        :title='"年夜饭【名厨精选下】"'
                        :text='"—8道菜谱—"'
                    ></rec-menu>
                </a></li>
            </ul>
            <div class="vedio-dish">
                <div class="img">
                    <img src="https://s1.cdn.xiangha.com/caipu/201606/2114/211402438738.jpg/MzAweDIwMA.webp" class="vedio">
                    <img src="https://s2.cdn.xiangha.com/images/m5/Common/videoIcon.png" class="plear">
                </div>
                <div class="desc">
                    <div class="l">
                        <h3 class="title">柠檬水果甜汤</h3>
                        <p class="">
                            <span class='span'>120.3万</span>
                            <span class='span'>1.0万</span>
                        </p>    
                    </div>
                    <div class="user">
                        <img src="https://s3.cdn.xiangha.com/i/201711/1420/5a0ae72b9bb7f.jpg/MTUweDE1MA.webp">
                        <h4 class='name'>涛哥的菜</h4>
                    </div>
                </div>
            </div>
        </div>
        <ul class="rec-list">
            <li v-for='(item,index) in data' 
                :class="item.floor_type" 
                :key='index' class='list' 
                :itemId='item.data.brand.brand_id'>
                <img v-lazy="item.data.brand.image" alt="">
                <!-- {{item.data.brand}} -->
                <div class="bt">
                    <div class="l">
                        <h2 class='title text-ellipsis'>{{item.data.brand.title}}</h2>
                        <p class='text text-ellipsis'>{{item.data.brand.text}}</p> 
                    </div>
                    <div class="r" v-if='item.floor_type=="brand"'>
                        <img v-lazy="item.data.brand.logo" alt="" class="icon">
                        <div class="user ellipsis">{{item.data.brand.textTitle}}</div>
                    </div>
                </div>
            </li>
        </ul>
        <reload/>
        <app-footer :isShow='!get'></app-footer>
    </div>
</template>
<script>
import Bus from '@/assets/js/bus'
export default {
    name: "appIndex",
    data(){
        return {
            index:[
                {name: '菜谱分类',bg:".45956% 61.53846%"},
                {name: '视频',bg:"14.52206% 61.53846%"},
                {name: '健康养生',bg:"28.30882% 61.53846%"},
                {name: '生活圈',bg:"42% 61.53846%"},
                {name: '食材',bg:"56.06618% 61.53846%"},
                {name: '菜单',bg:"70.2% 61.53846%"},
                {name: '小吃',bg:"83.5% 61.53846%"},
                {name: '特产',bg:"97.7% 61.53846%"},
            ],
            data:[],
            get:true,
        }
    },
    methods:{
        getData(){
            this.$axios.get('/apis/getAppData').then(res=>{
                this.data=(res.data)
            })   
        },
        getLload(){
            let _this=this;
            onscroll=function(ev){
                if(scrollY>=_this.$refs.app.offsetHeight-300-document.body.offsetHeight&&_this.get){
                    _this.get=false;
                    _this.$axios.get('/apis/getAppData').then(res=>{
                        _this.data=_this.data.concat(res.data);
                        _this.get=true;
                    })  
                }
            }
        },
        link(data){
            localStorage.setItem("app-listData",JSON.stringify(data))
            this.$router.push({
                path: '/list'
            })
        },
        sancan(index){
            localStorage.setItem("sancanData",JSON.stringify({index,data:this.data}))
            // Bus.$emit("sendSancanData",{index,data:this.data})
            this.$router.push('sancan')
            
        }
    },
    created(){
        this.getData();
    },
    mounted(){
        this.getLload()
    }
}
</script>
<style lang="stylus" scoped>
$vw=1/6.4
.app-index{
    background: #fff;
    .header{
        padding: 20vw*$vw 34vw*$vw;
    }
    &>.index-box{
        padding: 0 34vw*$vw;
        .index-list-1{
            display: flex;
            flex-wrap: wrap;
            color: #3e3e3e
            .index{
                width: 25%;
                display: flex;
                flex-direction: column;
                font-size: 23vw*$vw;
                align-items: center;
                justify-content: center;
                font-weight: 400;
                i.icon{
                    width: 111vw*$vw;
                    height: 111vw*$vw;
                    display: block;
                    background-image: url('https://s2.cdn.xiangha.com/images/m5/Index/nav-icon01.png');
                    background-size: 1071vw*$vw 111vw*$vw;
                }
            }
        }
        .index-list-2{
            margin-top: 24vw*$vw;
            display: flex;
            justify-content:space-between;
            .index{
                width: 32%;
                position: relative;
                border-radius: 3vw*$vw;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                .name{
                    color: #fff;
                    width: 100%;
                    font-size: 36vw*$vw;
                    line-height: 60vw*$vw;
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                }
            }
        }
        .index-list-3{
            margin-top: 50vw*$vw;
            .index{
                margin-top: 40vw*$vw;
                border-radius: 5vw*$vw;
                overflow: hidden;
            }
        }
        .vedio-dish{
            color: #b8b8b8;
            font-size: 20vw*$vw;
            border-radius: 5vw*$vw;
            overflow: hidden;
            margin-top: 50vw*$vw;
            box-shadow: 3vw*$vw 3vw*$vw 5vw*$vw #f1f1f1, -3vw*$vw 3vw*$vw 5vw*$vw #f1f1f1;
            .img{
                position: relative;
                .plear{
                    width: 90vw*$vw;
                    height: 90vw*$vw;
                    transform: translate(-50%,-50%);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                }
            }
            .desc{
                padding: 20vw*$vw;
                display: flex;
                .l{
                    flex: 1;
                    .title{
                        color: #333;
                        padding: 10vw*$vw 0 24vw*$vw 0;
                        font-size: 34vw*$vw;
                    }
                    .span{
                        padding-left: 40vw*$vw;
                        background: url(https://s2.cdn.xiangha.com/images/m5/Index/index_sprites.png) no-repeat;
                        background-size: auto 48vw*$vw;
                        &:nth-of-type(1){
                            background-position: 0 -26vw*$vw;
                        }
                    }
                }
                .user{
                    text-align: center;
                    img{
                        width: 58vw*$vw;
                        height: 58vw*$vw;
                        border-radius: 50%;
                        margin: 0 auto 14vw*$vw;
                    }
                }
            }
        }
    }
    .rec-list{
        padding: 0 34vw*$vw;
        margin-top: 50vw*$vw;
        &>.list{
            overflow: hidden;
            border-radius: 5vw*$vw;
            margin-bottom: 40vw*$vw;
            padding-bottom: 30vw*$vw;
            box-shadow: 3vw*$vw 3vw*$vw 5vw*$vw #f1f1f1, -3vw*$vw 3vw*$vw 5vw*$vw #f1f1f1;
            .bt {
                display: flex;
                .l{
                    flex: 1;
                    .title{
                        padding: 16vw*$vw 20vw*$vw 0;
                        margin-bottom: 20vw*$vw;
                    }
                    .text{
                        padding: 0 20vw*$vw;
                    }
                    &>*{
                        -webkit-line-clamp: 1;
                    }    
                }
            }
        }
        .adverti{
           .title{
               font-size: 36vw*$vw;
               font-weight: 600;
           }
           .text{
               color: #666;
               font-weight: 400;
               font-size: 28vw*$vw;
           }
        }
        .brand{
            .title{
                font-size: 34vw*$vw;
                font-weight: 400;    
            }
            .text{
                color: #666;
                font-weight: 400;
                font-size: 28vw*$vw;
            }
            .bt{
                .r{
                    width: 106vw*$vw;
                    height: 92vw*$vw;
                    padding: 16vw*$vw 20vw*$vw 0 0;
                    .icon{
                        width: 58vw*$vw;
                        height: 58vw*$vw;
                        margin: 0 auto;
                        border-radius: 50%;
                        margin-bottom: 14vw*$vw;
                        
                    }
                    .user{
                        color: #b8b8b8;
                        font-size: 20vw*$vw;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
