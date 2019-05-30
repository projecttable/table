<template>
    <div class="sancan">
        <app-header></app-header>
        <ul class="title-list">
            <li class="title" v-for="item in sancan" :key="item.id" ref='title'><i>{{item.text}}</i></li>
        </ul>
        <ul class="list">
            <li class="item" v-for='(item,index) in newData' :key='index'>
                <div class="img-box"><img v-lazy="item.data.brand.image" alt=""></div>
                <h2 class="title ellipsis">{{item.data.brand.title}}</h2>
                <p class="text text-ellipsis">{{item.data.brand.text||"ID："+item.data.brand.textTitle}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Bus from '@/assets/js/bus'
export default {
    data(){
        return {
            sancan:[{
                id: 'zao',
                text: '早餐',
                data: null,
            },{
                id: 'zhong',
                text: '中餐',
                data: null,
            },{
                id: 'wan',
                text: '晚餐',
                data: null,
            }],
            data:[],
            index:0,
        }
    },
    methods:{
        init(){
            this.tab()
        },
        tab(){
            let title=this.$refs.title
            title[this.index].className='title active';
            title.forEach((item,index)=>{
                let _this=this
                item.onclick=function(){
                    _this.index=index
                    title.forEach(item=>{
                        item.className="title"
                    })
                    this.className='title active'
                }
            })
        },getData(){
            let index=0;
            let data=JSON.parse(localStorage.getItem("sancanData"))
            this.data=data.data
            this.index=data.index
            // Bus.$on("sendSancanData",data=>{
            //     this.data=data.data;
            //     this.index=data.index;
            // })
        }
    },
    computed:{
        newData(){
            let newData=[];
            let len=this.data.length/3;
            newData=this.data.slice(this.index*len,(this.index+1)*len);
            return newData
        }
    },
    created(){
        this.getData()
    },
    mounted(){
        setTimeout(()=>{
            this.init()
        },200)
    }
}
</script>
<style lang="stylus" scoped>
$vw=1/6.4
.sancan{
    color:#333;
    & *{
        box-sizing: border-box;
    }
    .title-list{
        display: flex;
        padding: 0 34vw*$vw;
        .title{
            width: 33%;
            text-align: center;
            &>*{
                font-size: 28vw*$vw;
                font-weight: 400;
                line-height: 72vw*$vw;
                padding-bottom: 18vw*$vw;
                border-bottom: 4vw*$vw solid transparent;
            }
            &.active{
                color: #fa273b;
                &>*{
                    border-color: #fa273b;
                }
            }
        }
    }
    .list{
        padding: 0 34vw*$vw;
        border-top: 1vw*$vw solid #e8e6e6;

        .item{
            padding-top: 60vw*$vw;
            text-align: center;
            border-bottom: 1vw*$vw solid #e8e6e6;
            font-weight: 400;
            .title{
                color: #333;
                font-size: 26vw*$vw;
                padding-top: 26vw*$vw;
            }
            .text{
                color: #848a91;
                font-size: 24vw*$vw;
                margin: 14vw*$vw 0 30vw*$vw;
            }
        }
    }
}
</style>
