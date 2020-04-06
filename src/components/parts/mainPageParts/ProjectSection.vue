<template>
 	<section id="portfolio" class="project-content">
		<div class="project-section-container canvas-container" id="project-section-container">
			<div class="project-section-canvas-wrapper canvas-wrapper" id="project-section-canvas-wrapper"></div>
		</div> 
      	<div class="container project-block">
      		<h2 class="large_h tc orange_bit">Our <span>Projects</span></h2>
      		<ul class="project_list" id="project_list">
      			<li v-if="item < items.length" class="project-item" v-for="(item, index) in projectsToShow" :key="item.id">
      				<router-link :to="{ name: 'item', params: { id: index, pivotCase: pivot }, query: {id: item.id } }">
      					<h5>{{ items[item].case_name }}</h5>
      					<div class="img_size">
                            <img src="~@/assets/images/123.jpg" srcset="~@/assets/images/123@2x.jpg 2x" alt="" />
      					</div>
      					<div class="info_pr">
      						<i class="icon-combined-shape shape_more"></i>
      						<p class="word_more">View work</p>
      					</div>
      				</router-link>
      			</li>
      		</ul>
      		<div class="tc">
                <button @click="projectsToShow += 2" class="more_articles">View more projects</button>
      		</div>
      	</div>
    </section>
</template>
<script>
import animateCaller from '../../../mixins/animateCaller'
import { TweenLite } from 'gsap'
import fetchData from '../../../data/case.json'
//import CasePage from '../pages/CasePage'
import Loadmore from 'vue-loadmore';
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
export default {
	name: 'ProjectSection',
      data() {
            return {
                  items: fetchData,
				  projectsToShow: 6,
				  renderer: new THREE.WebGLRenderer({alpha: true})
            }
	  },
	watch: {
		pivot: function () {
			this.makeScene()
		}
	},
	methods: {
		makeScene() {
			this.sceneMaker(
				'project-section-canvas',
				[
					{
						modelName: 'sphere',
						position: {
							x: -200,
							y: 120,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'plus',
						position: {
							x: -215,
							y: 130,
							z: 20
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'wave',
						position: {
							x: 180,
							y: 65,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
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
					{
						modelName: 'pyramid',
						position: {
							x: -205,
							y: -245,
							z: 0
						},
						rotation: {
							axis: 'y',
							speed: 0.005,
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'wave',
						position: {
							x: -90,
							y: -130,
							z: 0
						},
						rotation: {
							axis: 'x',
							speed: 0.005,
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'sphere',
						position: {
							x: 170,
							y: -310,
							z: 0
						},
						rotation: {
							axis: 'x',
							speed: 0.005,
						},
						color: this.colors.lightColor
					},						
				],
				{
					height: 2500
				}
			)			
		}
	},
	mounted () {
	  if(this.pivot.length) {
		this.makeScene()
	  }
		//VueScrollTo.scrollTo(this.$route.params.scrollTo) 
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
	},
	beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
	},
	mixins: [animateCaller, sceneMaker],
	props: ["pivot", 'colors']
}
</script>

<style>

</style>

