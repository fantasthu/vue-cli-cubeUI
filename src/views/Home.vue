<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <cube-button @click="sayHello">HelloWorld</cube-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	},
	methods: {
		sayHello() {
			console.log('this.', this)
			console.log('api.', this.$api)
			this.$toast('你好')
			this.$loading()
			setTimeout(() => {
				this.$hideLoading()
			}, 3000)
		}
	}
}
</script>
