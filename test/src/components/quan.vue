<template>
	
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				data: {}
			}
		},
		created(){
			axios.get('/apis/quan').then(data => {
				this.data = data;
				console.log(this.data);
			})
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	ul,li,ol{
		list-style: none;
	}

</style>