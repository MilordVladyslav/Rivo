<template>
	<div class="success_page">
		<div class="sc_content tc">
			<h2 class="large_h">Thank you!</h2>
			<h6>You have successfully leave request, You will get an email containing the details of the request.</h6>
			<router-link to="/" class="logo">
                <img src="~@/assets/svg-icon/logo.svg" alt="" />
            </router-link>
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
	
export default {
	name: 'SuccessPage',
	data() {
		return {

		}
	}
}

</script>