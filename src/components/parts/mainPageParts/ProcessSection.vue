<template>

	<section class="process-content">

      	<div id="process_zone" class="container process-block">
      		<div id="pinned-element3" class="circle-plus-figure process_circle_plus">
      			<div class="circle-figure view_circle"></div>
      			<div class="plus_bit view_second_plus">
	      			<span></span>
	      			<span></span>
	      		</div>
      		</div>
      		<div id="pinned-element2" class="triangle-figure process_triangle"></div>
      		<div class="pr_flex">
					<div id="pinned-element1" class="figure_h">
						<div class="process-section-container canvas-container" id="process-section-container">
							<div class="process-section-canvas-wrapper canvas-wrapper" id="process-section-canvas-wrapper"></div>
						</div> 
						<h2 class="large_h orange_bit" id="process-content-title">Site <span>Development</span> Process</h2>
						<div class="process_snake">
							<img src="~@/assets/svg-icon/snake.svg" alt="" />
						</div>
						<div class="rectangle-figure process_rectangle"></div>
					</div>

	      		<ul class="process_list">
	      			<li>
	      				<div>
	      					<i class="icon-path-2 img_pr_list"></i>
	      					<p class="stage_pr">Pre-analysis</p>
	      				</div>
	      			</li>
	      			<li>
	      				<div>
		      				<i class="icon-design-icon img_pr_list"></i>
		      				<p class="stage_pr">Design concept</p>
		      			</div>
	      			</li>
	      			<li>
	      				<div>
		      				<i class="icon-omplement-icon img_pr_list"></i>
		      				<p class="stage_pr">Design imlementation</p>
		      			</div>
	      			</li>
	      			<li>
	      				<div>
		      				<i class="icon-cut-icon img_pr_list"></i>
		      				<p class="stage_pr">Front-end & back-end development</p>
		      			</div>
	      			</li>
	      			<li>
	      				<div>
		      				<i class="icon-network-icon img_pr_list"></i>
		      				<p class="stage_pr">Testing & Q/A</p>
		      			</div>
	      			</li>
	      			<li>
	      				<div>
		      				<i class="icon-perfect-icon img_pr_list"></i>
		      				<p class="stage_pr">Project release&nbsp;and maintenance</p>
		      			</div>
	      			</li>
	      			<li>
	      				<div>
		      				<i class="icon-leaf-icon img_pr_list"></i>
		      				<p class="stage_pr">Promotion and&nbsp;further development</p>
		      			</div>
	      			</li>
	      		</ul>
      		</div>
      	</div>
      	<div id="project_box"></div>
    </section>
</template>

<script>
import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
import ScrollMagic from 'scrollmagic'
import animateCaller from '../../../mixins/animateCaller'
import sceneMaker from '../../../mixins/sceneMaker'
import Scrollbar from 'smooth-scrollbar'
export default {
    name: 'ProcessSection',
    data() {
    	return {
			renderer: new THREE.WebGLRenderer({alpha: true}),
    	}
	},
	methods: {
		makeScene() {
					this.sceneMaker(
				'process-section-canvas',
				[
					{
						modelName: 'minus',
						position: {
							x: -180,
							y: -53,
							z: 0
						},
						rotation: {
							axis: 'x',
							speed: 0.05
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'pyramid',
						position: {
							x: -190,
							y: 170,
							z: 10
						},
						rotation: {
							axis: 'y',
							speed: 0.005
						},
						color: this.colors.darkColor
					},
										
					{
						modelName: 'wave',
						position: {
							x: -80,
							y: 5,
							z: 10
						},
						rotation: {
							axis: 'x',
							speed: 0.005
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'plus',
						position: {
							x: 155,
							y: 170,
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
							x: 165,
							y: 165,
							z: -25
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
					}
				],
				{
					height: 1237
				}
			)	
		}
	},
	watch: {
		pivot: function () {
			this.makeScene()
		}
	},
	mounted() {
		if(this.pivot.length) {
			this.makeScene()
		}
		installMediaQueryWatcher("(min-width: 768px)", function(matches) {
			let body = document.querySelector('body')
		  if (matches) {
				let controller = new ScrollMagic.Controller({
					container: body
				});
				console.log(controller)
				var processZoneHeight = document.getElementById('process_zone').offsetHeight;
			    let scene1 = new ScrollMagic.Scene({
			      triggerElement: "#process_zone",
				  triggerHook: 0,
				  duration:processZoneHeight,
			      reverse: true,
			    })
				.setPin("#pinned-element1")
				.on('enter', function(e) {
					TweenLite.to('.process-content', 0.2,  {opacity: 1})
				})
				.on('progress', function(e) {
					// console.log(e)
					if(e.scrollDirection === 'REVERSE') {
						TweenLite.to('.process-content', 0.2,  {opacity: 1})
					}
					if(e.scrollDirection === 'FORWARD' && e.progress > 0.9) {
						TweenLite.to('.process-content', 0.2,  {opacity: 0})
					}
					
				})
				// .on('leave', function(e) {
				// 	console.log('leave')
				// 	TweenLite.to('.process-content', 0.2,  {opacity: 0})
				// })
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
			//   let scroll = Scrollbar.init(document.querySelector('body'));
			//   scroll.addListener(() => {
			// 	  	console.log(window.pageYOffset)
  			// 		scene1.refresh()
			// 	})
				window.addEventListener('scroll', function () {
					// console.log(window.pageYOffset)
				})
			  } 
		});

		function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
		  var mql = window.matchMedia(mediaQuery);
		  mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
		  layoutChangedCallback(mql.matches);
		}
	},
	mixins: [sceneMaker],
	props: ['pivot', 'colors'],
	beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
	},

}
</script>

<style>

</style>


