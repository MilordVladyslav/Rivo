<template>
	<div class="case-content">
		<div class="case-content-section-container canvas-container">
			<div class="case-content-canvas-wrapper canvas-wrapper" id="case-content-canvas-wrapper" v-if="this.canvasWrapper"></div>
		</div>
		<div class="case-block" v-if="this.payloadCase">
	  		<div class="circle-figure case_single_circle"></div>
			<h2 class="large_h tc">More <span class="orange_bit">Cases</span></h2>
			<hooper class="project_list case_page" :settings="hooperSettings" v-if="this.payloadCase"> 
				<slide class="project-item case_page" v-for="(item, index) in localCasesData" :key="index">
					<div class="item_help" @click="changeData(item)"  v-scroll-to="{el: '#first-screen', duration: 500}">
	      				<nuxt-link :to="`/case/?title=${localCasesData[index].slug}`">
	      					<h5>{{ localCasesData[index].title.rendered }}</h5>
	      					<div class="img_size">
                                <img :src="localCasesData[index].fimg_url" alt="" />
	      					</div>
	      					<div class="info_pr">
	      						<i class="icon-combined-shape shape_more"></i>
	      						<p class="word_more">View work</p>
	      					</div>
	      				</nuxt-link>
	      			</div>
      			</slide>
      			<hooper-navigation slot="hooper-addons"></hooper-navigation>
      		</hooper>
		</div>
	</div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import { mapGetters } from 'vuex'
import sceneMaker from '../../../mixins/sceneMaker'
export default {
    name: 'CaseContent',
    data: function () {
        return {
			payloadCase: false,
			canvasWrapper: false,
			canvasRendered: false,
			localCasesData: [],
    		hooperSettings: {
    			wheelControl: false,
    			infiniteScroll: true,
    			itemsToShow: 1,
    			itemsToSlide: 1,
    			margin: 60,
		    	breakpoints: {
		          	1600: {
		            	itemsToShow: 3,
		          	},
		          	768: {
		          		itemsToShow: 2,
		          	},
		        }     			
			},
        }
	},
	computed:{
		caseContentCanvas: function () {
			return new THREE.WebGLRenderer({alpha: true})
		}
	},
	methods: {
		changeData(item) {
			this.$store.dispatch('getCurrentCase')
		},
		makeScene() {
			this.sceneMaker(
				'case-content-canvas',
				[
					{
						modelName: 'plus',
						position: {
							x: 270,
							y: 66,
							z: 50
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'sphere',
						position: {
							x: -325,
							y: -40,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.darkColor
					},
				
				],
				{
					height: 900
				},
				this.caseContentCanvas
			)
		}
	},
    components: {
        Hooper,
	    Slide,
		HooperNavigation,
	},
    watch: {
		casesData: function () {
			this.localCasesData = this.casesData
			this.payloadCase = true
		},  
		pivot: function () {
			this.canvasWrapper = true
		}  	
	},
	beforeDestroy() {
		this.caseContentCanvas.forceContextLoss()
	},
	props: ['casesData', 'pivot', 'colors'],
	mixins: [sceneMaker]
}
</script>

<style>
</style>