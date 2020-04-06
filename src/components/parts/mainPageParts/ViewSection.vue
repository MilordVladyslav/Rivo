<template>
  <section class="first-content" id="first-content-main-section">
		<div class="view-section-container canvas-container">
			<div class="view-section-canvas-wrapper canvas-wrapper" id="view-section-canvas-wrapper"></div>
		</div>
	  <div class="container view-block">
  		<div class="square-figure view_square"></div>
  		<div class="triangle-figure view_triangle"></div>
  		<div class="circle-plus-figure view_circle_plus">
  			<div class="circle-figure view_circle"></div>
  			<div class="plus_bit view_second_plus">
      			<span></span>
      			<span></span>
      		</div>
  		</div> 
  		<div class="skew-figure view_skew"></div>
  		<div class="rectangle-figure view_rectangle"></div>
  		<div class="plus_bit view_first_plus">
  			<span></span>
  			<span></span>
  		</div>
  		<div class="snake-figure view_snake">
  			<img src="~@/assets/svg-icon/snake.svg" alt="" />
  		</div> 
  		<div class="h_group">
  			<h1 class="orange_bit">We are <span>Rivo.agency</span></h1>
  			<h2>We help ideas change the world.</h2>
  			<h6 class="no_wrap">Make it simple, but meaningful <span>eye-catching</span>, but functional innovative, but reliable</h6>
  			<a href="/" class="btn_coop t-up">
      			<p id ="cooperate-p">Cooperate</p>
      			<div class="icon_coop">
      				<div>
                <span></span>    
              </div>
      		</div>
      	</a>
  		</div>
  		<ul class="stat_list">
  			<li>
  				<i class="icon-complate-icon img_stat"></i>
  				<p class="number_st">
		            <number
		              ref="number1"
		              :from="0"
		              :to="270"
		              :duration="durationNumber"
		              easing="Power1.easeOut"
		            />
	          	</p>
  				<p class="small_p">Complated projects</p>
  			</li>
  			<li>
  				<i class="icon-happy-icon img_stat"></i>
	          	<p class="number_st">
		            <number
		              ref="number2"
		              :from="0"
		              :to="230"
		              :duration="durationNumber"
		              easing="Power1.easeOut"
		            />
	          	</p>    
  				<p class="small_p">Grateful customers</p>
  			</li>
  			<li>
  				<i class="icon-years-icon img_stat"></i>
	          	<p class="number_st">
		            <number
		              ref="number3"
		              :from="0"
		              :to="9"
		              :duration="durationNumber"
		              easing="Power1.easeOut"
		            />
	          	</p>
  				<p class="small_p">years of experience</p>
  			</li>
  			<li>
  				<i class="icon-coffe-icon img_stat"></i>
	          	<p class="number_st">
	            	<number
		              ref="number4"
		              :from="0"
		              :to="995"
		              :duration="durationNumber"
		              easing="Power1.easeOut"
	            	/>
	          	</p>
  				<p class="small_p">cups of coffee</p>
  			</li>
  		</ul>
  	</div>
  </section>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'ViewSection',
  data() {
    return {
	  durationNumber: 5,
	  whiteTheme: false,
	  renderer: new THREE.WebGLRenderer({alpha: true}),
	  darkColor: 0x161616,
	  lightColor:  0x6d5c1a
    }
  },
  methods: {
	  makeScene () {
		  		this.sceneMaker(
				'view-section-canvas',
				[
					{
						modelName: 'plus',
						position: {
							x: -190,
							y: 70,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'sphere',
						position: {
							x: 150,
							y: -80,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'pyramid',
						position: {
							x: -145,
							y: 95,
							z: 10
						},
						rotation: {
							axis: 'y',
							speed: 0.005
						},
						color: this.darkColor
					},					
					{
						modelName: 'wave',
						position: {
							x: 65,
							y: -25,
							z: -30
						},
						rotation: {
							axis: 'x',
							speed: 0.005
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'cube',
						position: {
							x: 170,
							y: 90,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
							direction: 'forward'
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'trapezoid',
						position: {
							x: 0,
							y: 0,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.003
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'minus',
						position: {
							x: -180,
							y: -105,
							z: 10
						},
						rotation: {
							axis: 'x',
							speed: 0.05,
							direction: "reverse"
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'plus',
						position: {
							x: 140,
							y: -75,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
					}
				],
				{
					height: 1237
				}
			)
	  }
  },
  mounted() {
	
	  if(this.pivot.length) {
		this.makeScene()
	  }
	  //VueScrollTo.scrollTo(this.$route.params.scrollTo) 
	//   window.onload = function () {
	// 	  console.log(this.$route.params)
	// 	  VueScrollTo.scrollTo(this.$route.params.scrollTo) 
	//   }

     TweenMax.staggerFromTo(('h1, .h_group h2'), 0.7, {x: "25%", opacity: 0}, {x: "0%", opacity: 1}, 0.1);
     TweenMax.fromTo(('.first-content .view_circle_plus'), 1, {opacity: 0}, {opacity: 1}).delay(0.5);
     TweenMax.fromTo(('.h_group h6'), 1, {x: "25%", opacity: 0}, {x: "0%", opacity: 1}).delay(1.2);
     TweenMax.fromTo(('.stat_list'), 1, {y: "80px", opacity: 0}, {y: "0%", opacity: 1}).delay(0.7);
     TweenMax.staggerFromTo(('h1, .h_group h2'), 0.7, {x: "25%", opacity: 0}, {x: "0%", opacity: 1}, 0.1);
     TweenMax.staggerFromTo(('.view_skew, .btn_coop, .view_first_plus, .first-content .view_second_plus, .view_snake, .view_rectangle'), 1, {opacity: 0}, {opacity: 1}, 0.5);
  },
  updated() {
	  console.log('i was updated')
  },
  beforeDestroy() {
	this.renderer.forceContextLoss()
    // this.renderer.context = null
    // this.renderer.domElement = null
    // this.renderer = null
  },
  watch:{
	// whiteTheme(whiteTheme) {
	// 	localStorage.whiteTheme = whiteTheme;
	// },
	pivot: function () {
		this.makeScene()
	}
  },
  props: ['pivot', 'colors'],
  mixins: [sceneMaker]

}
</script>







