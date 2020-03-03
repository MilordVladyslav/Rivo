<template>
	<div>
		<Preloader v-show="!this.payload" />
		<section class="first-content" v-if="this.payload">
			<div class="view-section-container canvas-container">
				<div class="view-section-canvas-wrapper canvas-wrapper" id="view-section-canvas-wrapper" v-if="this.canvasBind"></div>
			</div>
			<div class="container view-block">
				<div class="square-figure view_square"></div>
				<div class="skew-figure view_skew"></div>
				<div class="rectangle-figure view_rectangle"></div>
				<div class="snake-figure view_snake">
					<img src="~@/assets/svg-icon/snake.svg" alt="" />
				</div> 
				<div class="h_group">
					<h1 class="orange_bit" v-html="pagesData.heading_1"></h1>
					<h2>{{ pagesData.heading_2 }}</h2>
					<h6 class="no_wrap">{{ pagesData.sub_heading }}</h6>
					<a href="/" class="btn_coop t-up" @click.prevent="$modal.show('estimate')">
						<p id ="cooperate-p">{{ pagesData.button_text }}</p>
						<div class="icon_coop"><div>
						<span></span>    
					</div>
					</div>
				</a>
				</div>
				<ul class="stat_list">
					<li>
						<img class="img_stat" :src="pagesData.counters[0].icon" alt="">
						<p class="number_st">
							<number
							ref="number1"
							:from="0"
							:to="pagesData.counters[0].number"
							:duration="durationNumber"
							easing="Power1.easeOut"
							v-if="this.payload"
							/>
						</p>
						<p class="small_p">{{ pagesData.counters[0].description }}</p>
					</li>
					<li>
						<img class="img_stat" :src="pagesData.counters[1].icon" alt="">
						<p class="number_st">
							<number
							ref="number2"
							:from="0"
							:to="pagesData.counters[1].number"
							:duration="durationNumber"
							easing="Power1.easeOut"
							v-if="this.payload"
							/>
						</p>    
						<p class="small_p">{{ pagesData.counters[1].description }}</p>
					</li>
					<li>
						<img class="img_stat" :src="pagesData.counters[2].icon" alt="">
						<p class="number_st">
							<number
							ref="number3"
							:from="0"
							:to="pagesData.counters[2].number"
							:duration="durationNumber"
							easing="Power1.easeOut"
							v-if="this.payload"
							/>
						</p>
						<p class="small_p">{{ pagesData.counters[2].description }}</p>
					</li>
					<li>
						<img class="img_stat" :src="pagesData.counters[2].icon" alt="">
						<p class="number_st">
							<number
							ref="number4"
							:from="0"
							:to="pagesData.counters[3].number"
							:duration="durationNumber"
							easing="Power1.easeOut"
							v-if="this.payload"
							/>
						</p>
						<p class="small_p">{{ pagesData.counters[3].description }}</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
import { mapGetters } from 'vuex'
import Preloader from '../../preloader/Preloader'
export default {
    name: 'ViewSection',
    components: {
	    Preloader,
    },
    data() {
        return {
			durationNumber: 5,
			whiteTheme: false,
			payload: false,
			canvasBind: false,
			updatedTweens: false,
			switchSection: false,
    	}
	},
	computed: {
		renderer: function() {
			return new THREE.WebGLRenderer({alpha: true})
		}
	},  
  	methods: {
	  	makeScene () {
		  	this.sceneMaker(
				'view-section-canvas',
				[
					{
						modelName: 'pyramid',
						position: {
							x: 145,
							y: 30,
							z: 10
						},
						rotation: {
							axis: 'y',
							speed: 0.005
						},
						color: this.colors.darkColor
					},					
					{
						modelName: 'plus',
						position: {
							x: 135,
							y: -65,
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
				},
				this.renderer
			)
	  	}
	},
  	watch:{
		pivot: function () {
			this.canvasBind = true
		},
		pagesData: function () {
			this.payload = true
		}
  	},
  	updated() {
		if(this.canvasBind && window.innerWidth > 1200) {
			this.makeScene()
		}
		if(this.payload && !this.updatedTweens) {
			this.$emit('update-mounted-components', 'ViewSection')
			TweenMax.fromTo(('.first-content'), 1, {opacity: 0}, {opacity: 1});
			TweenMax.staggerFromTo(('h1, .h_group h2'), 0.7, {x: "25%", opacity: 0}, {x: "0%", opacity: 1}, 0.1);
			TweenMax.fromTo(('.first-content .view_circle_plus'), 1, {opacity: 0}, {opacity: 1}).delay(0.5);
			TweenMax.fromTo(('.h_group h6'), 1, {x: "25%", opacity: 0}, {x: "0%", opacity: 1}).delay(1.2);
			TweenMax.fromTo(('.stat_list'), 1, {y: "80px", opacity: 0}, {y: "0%", opacity: 1}).delay(0.7);
			TweenMax.staggerFromTo(('h1, .h_group h2'), 0.7, {x: "25%", opacity: 0}, {x: "0%", opacity: 1}, 0.1);
			TweenMax.staggerFromTo(('.view_skew, .btn_coop, .view_first_plus, .first-content .view_second_plus, .view_snake, .view_rectangle'), 1, {opacity: 0}, {opacity: 1}, 0.5);
			this.updatedTweens = true
		}
	  },
	  beforeDestroy() {
		this.renderer.forceContextLoss()
	  },
  	mixins: [sceneMaker],
  	props: ['pivot', 'pagesData', 'colors'],
}
</script>

<style>
.view-section-canvas-wrapper canvas {
	height: 100vh;
}	

</style>

