<template>
    <section id="development" class="dev-content">
		<div class="dev-section-container canvas-container">
			<div class="dev-section-canvas-wrapper canvas-wrapper" id="dev-section-canvas-wrapper"></div>
		</div>
      	<div class="second_bg">
			  <div class="light-words-transform-wrapper">
				<ul class="light_words">
					<li>Experience</li>
					<li>Creative</li>
				</ul>
			  </div>
			<div class="dark-words-transform-wrapper">
				<ul class="dark_words">
					<li>Experience</li>
					<li>Creative</li>
				</ul>
			</div>
      		<div class="triangle-figure dev_triangle"></div>
      		<div class="rectangle-figure dev_rectangle"></div>
      		<div class="circle-plus-figure dev_circle_plus">
      			<div class="circle-figure view_circle"></div>
      			<div class="plus_bit view_second_plus">
	      			<span></span>
	      			<span></span>
	      		</div>
      		</div>
      		<div class="snake-figure dev_snake">
      			<img src="~@/assets/svg-icon/snake.svg" alt="" />
      		</div>
      	</div>
      	<div class="container dev-block" id="dev-block">
      		<h2 class="dev_h tc">Development</h2>
      		<div id="tabs" class="tab_zone">
        			<ul id="tab_nav" class="tab_nav_list">
        				<li>
        					<a 
                    @mouseover="activetab=1"
                    :class="[ activetab === 1 ? 'active_mode' : '' ]" 
                    @click.prevent
                    href="wp_group"
                    class="link_tab">
                    WordPress
                    <span class="amount_dev">5</span>
                  </a>
        				</li>
        				<li>
        					<a 
                    @mouseover="activetab=2"
                    :class="[ activetab === 2 ? 'active_mode' : '' ]"
                    @click.prevent
                    href="#laravel_group" 
                    class="link_tab">
                    Laravel
                    <span class="amount_dev">5</span>
                  </a>
        				</li>
        				<li>
        					<a 
                    @mouseover="activetab=3"
                    :class="[ activetab === 3 ? 'active_mode' : '' ]"
                    @click.prevent
                    href="#js_group"
                    class="link_tab">
                    JavaScript
                    <span class="amount_dev">5</span>
                  </a>
        				</li>
        				<li>
        					<a
                    @mouseover="activetab=4"
                    :class="[ activetab === 4 ? 'active_mode' : '' ]"
                    @click.prevent
                    href="#branding_group"
                    class="link_tab">
                    Branding
                    <span class="amount_dev">5</span>
                  </a>
        				</li>
        				<li>
        					<a
                    @mouseover="activetab=5"
                    :class="[ activetab === 5 ? 'active_mode' : '' ]"
                    @click.prevent
                    href="#support_group"
                    class="link_tab">
                    Support
                    <span class="amount_dev">4</span>
                  </a>
        				</li>
        				<li>
        					<a
                    @mouseover="activetab=6"
                    :class="[ activetab === 6 ? 'active_mode' : '' ]"
                    @click.prevent
                    href="#design_group"
                    class="link_tab">
                    Web design
                    <span class="amount_dev">5</span>
                  </a>
        				</li>
        			</ul>
            	<div class="tabs">
      					<div v-if="activetab === 1" id="wp_group" class="tab_content">
      						<div id="notice_wp" class="notice_dev tc">We chose most popular free platform which is perfect for website development as our speciality. It means we use our expertise to save development time and optimise website structure for future growth. Our WordPress development includes:</div>
      	      				<ul id="list_info" class="tab_info">
      	      					<li>PSD to Wordpress</li>
      	      					<li>Custom Wordpress Development</li>
      	      					<li>Wordpress Theme Customization</li>
      	      					<li>Wordpress Plugin Development</li>
      	      					<li>HTML to Wordpress Conversion</li>
      	      				</ul>
      	      	</div>
      					<div v-if="activetab === 2" id="laravel_group" class="tab_content">
      						<div class="notice_dev tc">For some large-scale projects we suggest to use Laravel. It’s an open-source PHP web framework suitable for projects with advanced functionality with planned high load and high amount of users. Laravel website development stages are usually like these:</div>
      	      				<ul class="tab_info">
      	      					<li>Discovery & planning</li>
      	      					<li>Backend development</li>
      	      					<li>QA and testing</li>
      	      					<li>Design and frontend<br> creation</li>
      	      					<li>Deployment</li>
      	      				</ul>
      	      	</div>
      					<div v-if="activetab === 3" id="js_group" class="tab_content">
      						<div class="notice_dev tc">Website front-end is the first step of user experience. Modern JS frameworks allow developers to use existing libraries and bring more complex interfaces with more easy coding. Frameworks we support include:</div>
      	      				<ul class="tab_info">
      	      					<li>vue.js</li>
      	      					<li>node.js</li>
      	      					<li>react.js</li>
      	      					<li>react native</li>
      	      					<li>angular.js</li>
      	      				</ul>
      	      	</div>
      					<div v-if="activetab === 4" id="branding_group" class="tab_content">
      						<div class="notice_dev tc">If you&#8217;re just starting with your business or project, we may provide our help setting up branding from scratch. It might be:</div>
      	      				<ul class="tab_info">
      	      					<li>Market research</li>
      	      					<li>Business goals set up</li>
      	      					<li>Logo & other offline materials design</li>
      	      					<li>Positioning & Differentiating</li>
      	      					<li>Brand promotion</li>
      	      				</ul>
      	      	</div>
      					<div v-if="activetab === 5" id="support_group" class="tab_content">
      						<div class="notice_dev tc">For any project, no mater if we delivered it or not, support assistance might be needed. We may help during launch stages or serve your customers while you focus on other business tasks. Support services differ:</div>
      	      				<ul class="tab_info">
      	      					<li>Customer care specialists for ticketing system</li>
      	      					<li>Technical support for handling omplex issues</li>
      	      					<li>User manual creation</li>
      	      					<li>FAQs set up and staff training</li>
      	      				</ul>
      	      	</div>
      					<div v-if="activetab === 6" id="design_group" class="tab_content">
      						<div class="notice_dev tc">If you&#8217;re looking for the visual part only, our designers may suggest how to draw design that converts visitors into leads or enables functionality you need in an easy for the user manner. Website design stages may depend on your project, we&#8217;ve worked on such:</div>
      	      				<ul class="tab_info">
      	      					<li>Wireframes creation and structuring</li>
      	      					<li>Visual design concepts evelopmeng</li>
                        <li>Website prototype set-up</li>
      	      					<li>User testing and analytics</li>
      	      					<li>Frontend launch and maintenance</li>
      	      				</ul>
      	      	</div>
            	</div>
          </div>
      		<div class="priority_zone" id="priority_zone">
      			<h3 class="tc orange_bit">Our <span>Priorities</span></h3>
      			<h6 class="tc">Make it simple, but meaningful eye-catching, but functional innovative, but reliable</h6>
      			<ul class="priority_list">
      				<li>Creating the best digital experience for your clients by combining the design and technology</li>
      				<li>Developing creative solutions to overcome everyday digital challenges</li>
      				<li>Bringing your ideas to life while providing the outstanding performance.</li>
      			</ul>
      		</div>
        </div>
    </section>
</template>

<script>
import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
import animateCaller from '../../../mixins/animateCaller'
import sceneMaker from '../../../mixins/sceneMaker'
import ScrollMagic from 'scrollmagic'
import VueScrollTo from 'vue-scrollto'
export default {
    name: 'DevSection',
    data() {
      return {
		renderer: new THREE.WebGLRenderer({alpha: true}),
        activetab: 1,
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
				'dev-section-canvas',
				[
					{
						modelName: 'sphere',
						position: {
							x: -180,
							y: -20,
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
							x: 155,
							y: 135,
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
							x: 175,
							y: 30,
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
							x: -190,
							y: -10,
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

			let controller = new ScrollMagic.Controller();
			let controller2 = new ScrollMagic.Controller();
            // let list_info = document.getElementById('list_info')
			// let videoContent = document.getElementById('video-wrapper')[0]
			let scrollPosition = 0
            // let videoCont = document.getElementById('video-content')
            // let value = document.getElementsByClassName('video-wrapper')[0].style.marginTop
            // function manageVideoPlaying (switchVideoModal) {
            //     switchVideoModal(false) 
            // }
            this.scene1 = new ScrollMagic.Scene({
            triggerElement: "#development",
                triggerHook: 0.1,
                duration: window.innerHeight,
                reverse: true
            })
            .addTo(controller)
            .on('progress', function (e) {
                scrollPosition = e.progress * window.innerWidth / 2
                // console.log(scrollPosition)
				TweenLite.to('.light-words-transform-wrapper', 1,  {css:{transform:`translateX(${-scrollPosition}px)`}})
				})
			this.scene2 = new ScrollMagic.Scene({
            triggerElement: "#priority_zone",
                triggerHook: 0.6,
                duration: window.innerHeight,
                reverse: true
            })
            .addTo(controller)
            .on('progress', function (e) {
                scrollPosition = e.progress * window.innerWidth / 2
                // console.log(scrollPosition)
				TweenLite.to('.dark-words-transform-wrapper', 1,  {css:{transform:`translateX(${-scrollPosition}px)`}})
				})

	//VueScrollTo.scrollTo(this.$route.params.scrollTo) 
	//   document.querySelector('body').classList.add('white-theme')
    TweenLite.to('.dev-block, .tab_nav_list, .notice_dev, .tab_info li', 0, {opacity:0});
    this.animateCaller('development', () => {
        let tlDev = []
        tlDev.push(TweenLite.to('.dev-block', 0, {opacity:1}));
        tlDev.push(TweenLite.fromTo('.dev-block h2', 0.4, {css:{transform:"translateY(70px)", opacity: "0"}}, {css:{transform:"translateY(0px)", opacity: "1"}}));
    })
    this.animateCaller('tab_nav', () => {
        let tlDevNav = []
        tlDevNav.push(TweenLite.fromTo('.tab_nav_list', 0.8, {css:{transform:"translateY(70px)", opacity: "0"}}, {css:{transform:"translateY(0px)", opacity: "1"}}));
    })
    this.animateCaller('notice_wp', () => {
        let tlDevNotice = []
        tlDevNotice.push(TweenLite.fromTo('.notice_dev', 0.8, {css:{transform:"translateY(70px)", opacity: "0"}}, {css:{transform:"translateY(0px)", opacity: "1"}}));
    })
    this.animateCaller('list_info', () => {
        let tlDevList = []
        tlDevList.push(TweenLite.fromTo('.tab_info li:nth-of-type(1), .tab_info li:nth-of-type(3)', 0.8, {css:{transform:"translateX(-50%)", opacity: "0"}}, {css:{transform:"translateX(0px)", opacity: "1"}}));
        tlDevList.push(TweenLite.fromTo('.tab_info li:nth-of-type(2), .tab_info li:nth-of-type(5)', 0.8, {css:{transform:"translateX(50%)", opacity: "0"}}, {css:{transform:"translateX(0px)", opacity: "1"}}));
        tlDevList.push(TweenLite.fromTo('.tab_info li:nth-of-type(3), .tab_info li:nth-of-type(5)', 0.8, {css:{transform:"translateX(-100%)", opacity: "0"}}, {css:{transform:"translateX(0px)", opacity: "1"}}));
        tlDevList.push(TweenLite.fromTo('.tab_info li:nth-of-type(4)', 1, {css:{transform:"translateY(150px)", opacity: "0"}}, {css:{transform:"translateX(0px)", opacity: "1"}}));
        tlDevList.push(TweenLite.fromTo('.tab_info li:nth-of-type(5), .tab_info li:nth-of-type(5)', 0.8, {css:{transform:"translateX(100%)", opacity: "0"}}, {css:{transform:"translateX(0px)", opacity: "1"}}));
    })
  },
	beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
	},
	mixins: [animateCaller, sceneMaker],
	props: ['pivot', 'colors']

}
</script>

<style>

</style>


