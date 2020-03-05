<template>
    <section id="development" class="dev-content" v-if="this.payload">
    		<div class="dev-section-container canvas-container" v-if="this.canvasBind">
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
      		<div class="rectangle-figure dev_rectangle"></div>
      		<div class="snake-figure dev_snake">
      			<img src="~@/assets/svg-icon/snake.svg" alt="" />
      		</div>
      	</div>
      	<div class="container dev-block" id="dev-block">
      		<h2 class="dev_h tc">{{ pagesData.development_heading }}</h2>
          <div id="tabs" class="tab_zone">
            <ul id="tab_nav" class="tab_nav_list">
              <li v-for="(stage, index) in pagesData.development_experience" :key="index">
                <a 
                    @mouseover="activetab=index+1"
                    :class="[ activetab === index+1 ? 'active_mode' : '' ]" 
                    @click.prevent
                    :href="index+1 + 'tab'"
                    class="link_tab">
                    {{ pagesData.development_experience[index].title }}
                    <span class="amount_dev">
                      {{ pagesData.development_experience[index].skills.length }}
                    </span>
                  </a>
              </li>
            </ul>
            <div class="tabs">
              <div v-for="(tab, index) in pagesData.development_experience" :key="index">
                <div v-if="activetab === index+1" :id="index+1 + 'tab'" class="tab_content">
                  <div id="notice_wp" class="notice_dev tc">
                    {{ pagesData.development_experience[index].description }}
                  </div>
                  <ul id="list_info" class="tab_info">
                    <li v-for="bit in pagesData.development_experience[index].skills" :key="bit.index">
                      {{ bit.title }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      		<div class="priority_zone" id="priority_zone">
      			<h3 class="tc orange_bit" v-html="pagesData.priorities_heading"></h3>
      			<h6 class="tc" v-html="pagesData['priorities_sub-heading']"></h6>
      			<ul class="priority_list">
              <li v-html="pagesData.priorities_descr_1">
              </li>
              <li  v-html="pagesData.priorities_descr_2 ">
              </li>
              <li  v-html="pagesData.priorities_descr_3 ">
              </li>
            </ul>
      		</div>
        </div>
    </section>
</template>

<script>
import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
import animateCaller from '../../../mixins/animateCaller'
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
import { mapGetters } from 'vuex'

export default {
  name: 'DevSection',
  data() {
      return {
          activetab: 1,
          payload: false,
		      index: '',
		      canvasBind: false
      }
	},
  watch: {
		pivot: function () {
			this.canvasBind = true
		},
      pagesData: function () {
          this.payload = true
      }
  },
  computed: {
	  renderer: function () {
		return new THREE.WebGLRenderer({alpha: true})
	  },
      ScrollMagic: function () {
            let ScrollMagic
            if (process.client) {
                ScrollMagic = require('scrollmagic')
            }
            return {
				controller:  new ScrollMagic.Controller(),
				controller2: new ScrollMagic.Controller()
            }
        
     }
  },
  methods: {
      indexMath(index) {
          return index + 1;
	  },
  	  makeScene() {
    			this.sceneMaker(
      				'dev-section-canvas',
      				[
        					{
          						modelName: 'pyramid',
          						position: {
            							x: 185,
            							y: 35,
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
            							x: -190,
            							y: 50,
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
					    },
					this.renderer
    			)
  	  }
  },

  
  mounted() {
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
	updated() {
		if(this.canvasBind && window.innerWidth > 1200) {
			this.makeScene()
		}
		if(this.payload && !this.updatedAnimations) {
			this.$emit('update-mounted-components', 'DevSection')
			let ScrollMagic
			if (process.client) {
				ScrollMagic = require('scrollmagic')
			}

			let controller = new ScrollMagic.Controller();
			let controller2 = new ScrollMagic.Controller();
			let scrollPosition = 0


			this.scene1 = new ScrollMagic.Scene({
			triggerElement: "#development",
				triggerHook: 0.5,
				duration: window.innerHeight,
				reverse: true
			})
			.addTo(this.ScrollMagic.controller)
			.on('progress', function (e) {
				scrollPosition = e.progress * window.innerWidth / 2
				TweenLite.to('.light-words-transform-wrapper', 1,  {css:{transform:`translateX(${-scrollPosition}px)`}})
				})
			this.scene2 = new ScrollMagic.Scene({
			triggerElement: "#priority_zone",
				triggerHook: 0.6,
				duration: window.innerHeight,
				reverse: true
			})
			.addTo(this.ScrollMagic.controller2)
			.on('progress', function (e) {
				scrollPosition = e.progress * window.innerWidth / 2
				TweenLite.to('.dark-words-transform-wrapper', 1,  {css:{transform:`translateX(${-scrollPosition}px)`}})
			})
			this.updatedAnimations = true
		}
	},
	beforeDestroy() {
		this.renderer.forceContextLoss()
		this.animateCaller('', '', true)
		this.animateCaller = ''
		this.ScrollMagic.controller.enabled(false)
		this.ScrollMagic.controller2.enabled(false)
	},
	mixins: [animateCaller, sceneMaker],
	props: ['pivot', 'pagesData', 'colors'],

}
</script>

<style>

</style>


