<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
	<div class="success_page">
    <div class="cursor"></div>
		<div class="sc_content tc">
			<h2 class="large_h">Thank you!</h2>
			<h6>You have successfully leave request, You will get an email containing the details of the request.</h6>
			<nuxt-link :to="{ name: 'index' }" class="logo">
          <img src="~@/assets/svg-icon/logo.svg" alt="" />
      </nuxt-link>
		</div>
		<div class="triangle-figure success_triangle-left"></div>
		<div class="triangle-figure success_triangle-right"></div>
	    <div class="snake-figure view_snake-contacts-middle">
  			<img src="~@/assets/svg-icon/snake-copy.svg" alt="" />
  		</div>
        <div class="snake-figure view_snake-contacts">
            <img src="~@/assets/svg-icon/snake.svg" alt="" />
        </div>
        <div class="snake-figure view_snake-contacts2">
            <img src="~@/assets/svg-icon/snake.svg" alt="" />
        </div>
        <div class="plus_bit success_plus">
      		<span></span>
      		<span></span>
      	</div>
      	<div class="circle-plus-figure success_circle_plus">
      		<div class="circle-figure view_circle"></div>
      		<div class="plus_bit case_second_plus">
      			<span></span>
      			<span></span>
      		</div>
      	</div>
	</div>
</template>

<script>
import cursorCircle from '~/mixins/cursorCircle'

export default {
  head: {
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'rivo site' }
      ]
  },
	name: 'success',
	data() {
		return {

		}
	},
  mounted() {
    this.cursorCircle();
  },
  mixins: [cursorCircle],
}

</script>


