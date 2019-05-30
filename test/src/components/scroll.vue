<template>
	<div class="scroll" ref='wrapper'>
		<slot></slot>
	</div>
</template>
<script>
	import scroll from 'better-scroll'
	export default{
		data(){
			return{
				bs:{}
			}
		},
		mounted(){
			setTimeout(()=>{
				this.init();
			},200)	
		},
		methods:{
			init(){
				this.bs=new scroll(this.$refs.wrapper,{
					scrollX: true,
					scrollY: false,
					eventPassthrough:'vertical',
					probeType: 3
				})
			}
		}
	}
</script>
<style scoped>
	.scroll{
		overflow: hidden;
		width: 100%;
	}
</style>