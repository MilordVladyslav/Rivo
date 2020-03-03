<template>
	<div class="process-content">
      	<div id="process_zone" class="container process-block">
      		<div class="pr_flex">
      			<div id="pinned-element1" class="figure_h">
					<div class="process-section-container canvas-container" id="process-section-container">
						<div class="process-section-canvas-wrapper canvas-wrapper" id="process-section-canvas-wrapper" v-if="this.bindCanvas"></div>
					</div> 
      				<h2 class="large_h orange_bit" v-if="this.payloadProcess" id="process-content-title" v-html="pagesData.development_process_heading"></h2>
      				<div class="process_snake">
		      			<img src="~@/assets/svg-icon/snake.svg" alt="" />
		      		</div>
					<div class="rectangle-figure process_rectangle"></div>
      			</div>
	      		<ul class="process_list" v-if="this.payloadProcess">
	      			<li v-for="(chain, index) in pagesData.development_process_items" :key="index">
	      				<div>
	      					<img class="img_pr_list" :src="pagesData.development_process_items[index].icon" alt="" />
	      					<p class="stage_pr">
	      						{{ pagesData.development_process_items[index].title }}
	      					</p>
	      				</div>
	      			</li>
	      		</ul>
      		</div>
      	</div>
      	<div id="project_box"></div>
    </div>
</template>

<script>
import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
import animateCaller from '../../../mixins/animateCaller'
import sceneMaker from '../../../mixins/sceneMaker'

export default {
    name: 'ProcessSection',
    data() {
    	return {
			payloadProcess: false,
			bindCanvas: false,
			updateAnimations: false,
			renderedInfo: false
    	}
	},
	computed: {
		renderer: function () {
			return new THREE.WebGLRenderer({alpha: true})
		}
	},
	methods: {
		makeScene() {
			this.sceneMaker(
				'process-section-canvas',
				[
					{
						modelName: 'pyramid',
						position: {
							x: -190,
							y: 150,
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
							x: -40,
							y: 30,
							z: 100
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
					},
				],
				{
					height: 1237
				},
				this.renderer
			)	
		}
	},
	watch: {
		pivot: function () {
			this.bindCanvas = true
		},
	    pagesData: function () {
			this.payloadProcess = true
		},
  	},
	mounted() {
			this.$emit('update-mounted-components', 'ProcessSection')
			let ScrollMagic
			if (process.client) {
				ScrollMagic = require('scrollmagic')
			}

			installMediaQueryWatcher("(min-width: 768px)", function(matches) {
				if (matches) {
					let controller = new ScrollMagic.Controller();
					let processZoneHeight = document.getElementById('process_zone').offsetHeight;
					let scene1 = new ScrollMagic.Scene({
					triggerElement: "#process_zone",
					triggerHook: 0,
					duration:processZoneHeight + 2000,
					reverse: true,
					})
					.setPin("#pinned-element1")
					.on('enter', function(e) {
						TweenLite.to('.process-content', 0.2,  {opacity: 1})
					})
					.on('progress', function(e) {
						if(e.scrollDirection === 'REVERSE') {
							TweenLite.to('.process-content', 0.2,  {opacity: 1})
						}
						if(e.scrollDirection === 'FORWARD' && e.progress > 1) {
							TweenLite.to('.process-content', 0.2,  {opacity: 0})
						}
						
					})
					.addTo(controller)
					let scene2 = new ScrollMagic.Scene({
					triggerElement: "#process_zone",
					triggerHook: 0,
					duration:processZoneHeight,
					reverse: true
					})
					.addTo(controller);
					let scene3 = new ScrollMagic.Scene({
					triggerElement: "#process_zone",
					triggerHook: 0,
					duration:processZoneHeight,
					reverse: true
					})
					.addTo(controller);
				
					let scene4 = new ScrollMagic.Scene({
						triggerElement: "#project_box",
						triggerHook: 0,
					})
					.removePin("#pinned-element1")
					.addTo(controller);
				} 
			});

			function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
			var mql = window.matchMedia(mediaQuery);
			mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
			layoutChangedCallback(mql.matches);
			}


	},
	updated() {
		if(this.bindCanvas && window.innerWidth > 1200) {
			this.makeScene()
		}

		if (!!this.pagesData && !!this.pivot && !this.renderedInfo) {
			
			this.renderedInfo = true
		}
	},
	beforeDestroy() {
		this.renderer.forceContextLoss()
	},
	mixins: [sceneMaker],
	props: ['pivot', 'pagesData', 'colors']
}

</script>




