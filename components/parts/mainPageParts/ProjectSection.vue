<template>
 	<section id="portfolio" class="project-content" v-if="this.payload">
		<div class="project-section-container canvas-container" id="project-section-container">
			<div class="project-section-canvas-wrapper canvas-wrapper" id="project-section-canvas-wrapper" v-if="this.canvasBind"></div>
		</div> 
      	<div class="container project-block">
      		<div class="project_snake">
      			<img src="~@/assets/svg-icon/snake.svg" alt="" />
      		</div> 
      		<div class="snake-figure project_snake_2">
      			<img src="~@/assets/svg-icon/snake-copy.svg" alt="" />
      		</div>
      		<h2 class="large_h tc orange_bit" v-if="this.pagesDataBind" v-html="pagesData.portfolio_title"></h2>
      		<ul class="project_list" id="project_list" v-if="this.casesDataBind">
      			<li v-if="item = casesData.length" class="project-item" v-for="(item, index) in projectsToShow" :key="index">
							<div v-if="casesData[index]">
								<nuxt-link :to="`/case/?title=${casesData[index].slug}`">
									<h5>{{ casesData[index].title.rendered }}</h5>
									<div class="img_size">
															<img :src="casesData[index].fimg_url" alt="" />
									</div>
									<div class="info_pr">
										<i class="icon-combined-shape shape_more"></i>
										<p class="word_more">View work</p>
									</div>
								</nuxt-link>
							</div>
      			</li>
      		</ul>
      		<div class="tc" v-if="projectsToShow < casesData.length">
                <button @click="casesData.length % 2 == 0 ? projectsToShow += 2 : projectsToShow += 1"  class="more_articles">View more projects</button>
      		</div>
      	</div>
    </section>
</template>
<script>
import animateCaller from '../../../mixins/animateCaller'
import { TweenLite } from 'gsap'
import Loadmore from 'vue-loadmore';
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
import { mapGetters } from 'vuex'

export default {
	name: 'ProjectSection',
  	data() {
      return {
			projectsToShow: 6,
			payload: false,
			pagesDataBind: false,
			casesDataBind: false,
			canvasBind: false,
			switchSection: false,
			projectsDone: true
			}
	  },
	computed: {
		renderer: function () {
			return new THREE.WebGLRenderer({alpha: true})
		}
	},
	watch: {
		pivot: function () {
			this.canvasBind = true
		},
		pagesData: function () {
			this.pagesDataBind = true
			this.payload = true
		},
		casesData: function () {
			this.payload = true
			this.casesDataBind = true
		}
	},
	methods: {
		makeScene() {
			this.sceneMaker(
				'project-section-canvas',
				[
					{
						modelName: 'plus',
						position: {
							x: -130,
							y: 95,
							z: 100
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'pyramid',
						position: {
							x: 205,
							y: -165,
							z: 0
						},
						rotation: {
							axis: 'y',
							speed: 0.005,
						},
						color: this.colors.darkColor
					},						
				],
				{
					height: 2500
				},
				this.renderer
			)			
		}
	},
	updated() {
		let projectBlocks = document.getElementsByClassName('project-item')
		TweenLite.to(projectBlocks, 1.5, {transform:"translateY(90px)"})
		this.animateCaller('project_list', () => {
			let tlProjectSection = []
			for(let i = 0; i < projectBlocks.length; i++) {
				if(i % 2 == 0) {
					TweenLite.fromTo(projectBlocks[i], 1.5, {transform:"translateY(90px)"}, {transform:"translateY(0px)"})
				} else {
					TweenLite.fromTo(projectBlocks[i], 1.5, {transform:"translateY(90px)"}, {transform:"translateY(0px)"})
				}
			}
			
		})
		if (this.projectsDone) {
			this.$emit('update-mounted-components', 'ProjectSection')
			this.projectsDone = false
		}
		if(!this.projectSectionCompleted && !!this.pagesData && !!this.casesData) {
			this.projectSectionCompleted = true
		}
		if(this.canvasBind && window.innerWidth > 1200) {
			  this.makeScene()
		}
	},
	beforeDestroy() {
		this.renderer.forceContextLoss()
		this.animateCaller('', '', true)
		this.animateCaller = ''
	},
	mixins: [animateCaller, sceneMaker],
	props: ['pivot', 'pagesData', 'casesData', 'colors'],
}
</script>

<style>

</style>

