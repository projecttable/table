<template>
	<div id="list">
		<div class="cai">
			<div class="pageLeft">
				<ul class="left">
					<li v-for='item,index in data.goods' @click='fn(index)' :class='{on: curIndex==index}'>{{item.name}}</li>
				</ul>
			</div>
			<div class="pageRight">
				<ul class="right" v-if='data.goods'>
					<li v-for='item,index in data.goods[curIndex].foods'>
						<h4>
							{{item.name}}
						</h4>
						<div class="food">
							<ul class='foods'>
								<li v-for='item1,index1 in item.food'>
									<span>{{item1}}</span>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import BScroll from 'better-scroll';
	export default{
		name: 'list',
		created(){
			axios.get('/apis/list').then(data => {
				this.data = data.data;
			})
		},
		data(){
			return {
				curIndex: 0,
				data: {}
			}
		},
		methods: {
			fn(index){
				this.curIndex = index;
			}
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
	.pageLeft{
		width: 85px;
	}
	.pageRight{
		flex: 1;
	}
	.pageLeft,.pageRight{
		height: 100vh;
		overflow-y: auto;
	}
	.cai{
		display: flex;
	}
	.left li{
		width: 85px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 17px;
		color: #999;
		background: #f9f9f9;
	}
	.left li.on{
		border-left: 2px solid red;
		color: #3e3e3e;
    	font-weight: 700;
    	background: #fff;
	}
	.right{
		text-align: center;
	}
	.right h4{
		width: 100%;
		text-align: center;
		margin-top: 10px;
	}
	.right li span{
		display: inline-block;
		width: 80px;
		height: 25px;
		color: #bbb;
		text-align: center;
		line-height: 25px;
		border-radius: 25px;
		margin-left: 10px;
		margin-top: 15px;
		border: 1px solid #bbb;
	}
	.foods{
		display: flex;
		flex-wrap: wrap;
	}
</style>