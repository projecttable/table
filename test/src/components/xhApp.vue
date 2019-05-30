<template>
	<div class="app">
		<app-header></app-header>
		<div class="top">
			<img src='@/assets/img/logo.png'>
			<div class="text">
				<div class="name">
					<h2>香哈菜谱</h2>
					<span>官方</span>
				</div>
				<div class="ser">
					<img src='@/assets/img/stars.png'>
					<span>（38，493个评分）</span>
				</div>
				<div class="count">
					1亿次安装
				</div>
			</div>
		</div>
		<div class='sel'>
			<div class="select">
				<span>
					<img src='@/assets/img/li_icon.png'>
					<a>无病毒</a>
				</span>
				<span>
					<img src='@/assets/img/li_icon.png'>
					<a>无广告</a>
				</span>
				<span>
					<img src='@/assets/img/li_icon.png'>
					<a>用户保障</a>
				</span>
			</div>
		</div>
		<scroll>
			<div class="img" ref='img'>
				<img src='@/assets/img/screenshot.jpg'>
			</div>
		</scroll>
		<div class="line"></div>
		<div class="text">
			<p>
				超过3000万吃货的选择，时下最流行的菜谱App。<br>
				视频菜谱简单易学，精致美食乐享生活。<br>
				晒美食，交朋友，每天与百万美食用户共同分享精彩美食生活。
			</p>
			<h3>下载香哈菜谱，学名厨做菜，简单、专业！</h3>
			<ul>
				<li>1、新增2019年夜饭活动，福利大奖等你来拿</li>
				<li>2、新增全新首页智能推荐更懂你，不信试试</li>
				<li>3、中文菜谱更全，让下厨更简单</li>
				<li>4、小白学做菜助手，快速提高厨艺</li>
			</ul>
		</div>
		<div class="ratings">
			<h3>用户评价:</h3>
			<ul>
				<li>
					<div class="top">
						<img src='@/assets/img/photo1.png'>
						<div class="right">
							<div>
								<img src='@/assets/img/stars.png'><br/>
								<div class="time">刚刚</div>
							</div>
							<p>加菲猫绒球儿</p>
						</div>
					</div>
					<div class="context">很喜欢很喜欢，可以学到很多，里面的哈友很友善，也可以互相交流提升厨艺，总之一句话，好喜欢！</div>
				</li>
				<li>
					<div class="top">
						<img src='@/assets/img/photo2.png'>
						<div class="right">
							<div>
								<img src='@/assets/img/stars2.png'><br/>
								<div class="time">今天</div>
							</div>
							<p>小吃货丫丫</p>
						</div>
					</div>
					<div class="context">这里每天可以与来自五湖四海的哈友们交流分享美食。这里有非常多的菜谱，也根据人群，口味或特殊体质提供不同菜谱的建议。那种快乐只有喜欢做饭的人才能感受到！</div>
				</li>
				<li style='border:0;'>
					<div class="top">
						<img src='@/assets/img/photo3.png'>
						<div class="right">
							<div>
								<img src='@/assets/img/stars.png'><br/>
								<div class="time">昨天</div>
							</div>
							<p>菲来飞去0902</p>
						</div>
					</div>
					<div class="context">这个app真心不错，有视频教学，有图片解析，还可以交流分享，在香哈学到了好多好多菜！</div>
				</li>
			</ul>
		</div>
		<div class="app">
			<div class="text">高速下载</div>
		</div>
	</div>
</template>
<script>
	import scroll from './scroll.vue'
	export default{
		components:{scroll},
		data(){
			return {
				img:{}
			}
		},
		mounted(){
			setTimeout(()=>{
				this.init();
			},500)
		},
		methods:{
			init(){
				this.img=this.$refs.img.bs;
			}
		}
	}
</script>
<style scoped>
	.app{
		width: 100%;
		height: 100vh;
		background: #eee;
	}
	.app .top{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		background: #fff;
	}
	.app .top img{
		width: 101px;
		height: 101px;
		padding-top: 17px;
		padding-left: 15px;
		margin-right: 16px;
		background-size: cover;
	}
	.app .top .text{
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
		margin-top: 34px;
	}
	.app .top .text .name{
		display: flex;
		width: 100%;
	}
	.app .top .text .name h2{
		font-size: 14px;
		margin-right: 12px;
	}
	.app .top .text .name span{
		display: inline-block;
		width: 40px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		background: #f39c11;
		color: #fff;
		font-size: 12px;
		border-radius: 20px;
	}
	.app .top .ser{
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 11px;
	}
	.app .top .ser img{
		width: 68px;
		height: 10px;
		margin-left: -14px;
		margin-top: -18px;
	}
	.app .top .ser span{
		font-size: 12px;
		color: #666;
		margin-left: -14px;
	}
	.app .top .count{
		margin-top: 14px;
		font-size: 14px;
		color: #666;
	}
	.app .sel{
		width: 100%;
		background: #fff;
	}
	.app .sel .select{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		height: 64px;
		margin-left: 5%;
		border-bottom: 1px solid rgb(7,17,27,.1);
	}
	.app .sel .select span{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 33.333%;
		height: 100%;
	}
	.app .sel .select span img{
		width: 13px;
		height: 13px;
		margin-right: 5px;
	}
	.app .sel .select span a{
		font-size: 14px;
		color: #999;
	}
	.app .img{
		overflow: hidden;
		width: 196%;
		background: #fff;
		padding-bottom: 15px;
	}
	.app .img img{
		width: 730px;
		height: 226px;
	}
	.app .line{
		width: 90%;
		height: 1px;
		margin-left: 5%;
		background: rgba(7,17,27,.1);
	}
	.app .text{
		width: 100%;
		background: #fff;
		padding-top: 19px;
	}
	.app .text p{
		width: 90%;
		color: #999;
		margin-left: 5%;
		font-size: 16px;
	}
	.app .text h3{
		width: 90%;
		margin-left: 5%;
		margin-top: 12px;
		font-size: 16px;
	}
	.app .text ul{
		width: 90%;
		margin-left: 5%;
		font-size: 14px;
		margin-top: 11px;
	}
	.app .text ul li{
		color: #999;
	}
	.app .ratings{
		width: 100%;
		background: #fff;
		margin-top: 5px;
		margin-bottom: 4px;
	}
	.app .ratings h3{
		display: flex;
		align-items: center;
		width: 90%;
		height: 58px;
		margin-left: 5%;
		font-size: 16px;
		color: #666;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	.app .ratings ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.app .ratings ul li{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 90%;
		height: 121px;
		margin-left: 5%;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	.app .ratings ul li .top{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 40px;
	}
	.app .ratings ul li .top img{
		width: 40px;
		height: 40px;
		margin-right: 17px;
	}
	.app .ratings ul li .top .right{
		flex: 1;
	}
	.app .ratings ul li .top .right div{
		display: flex;
	}
	.app .ratings ul li .top .right div img{
		width: 68px;
		height: 10px;
		margin-left: -14px;
		margin-right: 160px;
		margin-top: 10px;
	}
	.app .ratings ul li .top .right div .time{
		font-size: 16px;
		margin-top: 29px;
		color: #666;
	}
	.app .ratings ul li .top .right p{
		font-size: 12px;
		color: #333;
		margin-top: -8px;
	}
	.app .ratings ul li .context{
		width: 100%;
		text-align: left;
		font-size: 12px;
		color: #6c6c6c;
	}
	.app .app{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 66px;
		background: #fff;
	}
	.app .app .text{
		width: 80%;
		height: 36px;
		text-align: center;
		line-height: 36px;
		color: #fff;
		padding: 0;
		background: #3ec6b0;
		border-radius: 16px;
	}
</style>