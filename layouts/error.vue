<style lang="sass">
    @import "./assets/style/reset.sass"
    @import "./assets/style/fonts.sass"
    @import "./assets/style/mixins.sass"
    @import "./assets/style/cursor.sass"
    @import "./assets/style/whiteTheme.sass"
    @import "./assets/style/box.sass"
</style>
<template>
	<div class="container error_page">
		<div class="cursor"></div>
		<div class="tc">
			<h2>404</h2>
			<nuxt-link :to="{ name: 'index' }" class="back_btn">Back to main page</nuxt-link>
		</div>
	</div>
</template>


<script>
import cursorCircle from '../mixins/cursorCircle'

export default {
	data() {
		return {

		}
	},
    mounted() {
    	this.cursorCircle();
    },
    mixins: [cursorCircle]
}
</script>


<style>
body {
  background: #181818;
  transition: background 0.2s linear;
  font-family: "NeutraTextTF-Book", sans-serif;
  font-size: 20px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  color: #ffffff;
  margin: 0 auto;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.error_page {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.error_page h2 {
	font-family: "NeutraTextTF-Book", sans-serif;
	font-size: 60px;
	color: #ffffff;
	margin-bottom: 15px;
}
.back_btn {
	color: #ffffff;
}
</style>



