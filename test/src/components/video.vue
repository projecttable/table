<template>
	<div class="wrap">
		<div class="box">
			<div class="top">
				<img :src="data.title" alt="" class='title'>
			</div>
			<ul class="foods">
				<li v-for='item,index in data.food'>
					<div class="food-top">
						<img :src="item.bg" alt="" class='bg'>
						<img :src="item.play" alt="" class='playimg'>
					</div>
					<p class='name'>{{item.name}}</p>
					<p class='play'>播放{{item.playback}}</p>
				</li>
			</ul>
			<div class="bottom" v-if='data.list'>
				<h3>{{data.list.name}}</h3>
				<ul>
					<li v-for='item,index in data.list.list'>{{item}}</li>
				</ul>
			</div>
		</div>
		<img src="../assets/bottom-bg.png" alt="" class='bot'>
		<p class='bot1'>打开香哈APP查看更多菜谱、养生、相克知识</p>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return {
				data: {}
			}
		},
		created(){
			axios.get('/apis/video').then(data => {
				this.data = data.data;
				console.log(data.data);
			})
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	ul,ol,li{
		list-style: none;
	}
	.wrap{
		box-sizing: border-box;
		overflow: hidden;
		background: rgb(248,248,248);
		position: relative;
	}
	.box{
		padding: 0 20px;
	}
	.top{
		text-align: center;
	}
	.title{
		width: 35vw;
	}
	.foods{
		display: flex;
		flex-wrap: wrap;
	}
	.foods li:nth-child(2n){
		margin-left: 10px;
	}
	.foods li{
		width: 48%;
		height: 155px;
		margin-top: 20px;
		background: #fff;
	}
	.foods li .food-top	{
		position: relative;
	}
	.foods li .bg{
		width: 100%;
	}
	.foods li .playimg{
		width: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -17px;
		margin-top: -17px;
	}
	.foods li .name{
		color: #484848;
   		font-weight: 600;
   		text-align: center;
	}
	.foods li .play{
		color: #a4a4a4;
    	text-align: center;
    	font-size: 13px;
	}
	.bottom{
		margin-top: 20px;
	}
	.bottom ul{
		display: flex;
		flex-wrap: wrap;
	}
	.bottom ul li{
		width: 100px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		color: red;
		background: #fff;
		margin-top: 5px;
		margin-left: 5px;
	}
	.bot{
		width: 100vw;
	}
	.bot1{
		width: 347px;
		height: 44px;
		text-align: center;
		line-height: 44px;
		color: #fff;
		border: 2px solid #fff;
		position: absolute;
		bottom: 55px;
		margin-left: 10px;
	}
</style>