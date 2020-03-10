<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div>
      <Header :isMainPage = "true"  :pagesData = "getPageInfo" v-if="this.getPageInfo"></Header>
      <main class="wrapper">
        <ViewSection
          :pivot = "pivot"
          :colors = "getFiguresColor"
          :pagesData = "getPageInfo"
          v-on:update-mounted-components="updateMountedComponents"
        />
        <DevSection
          :pivot = "pivot"
          :colors = "getFiguresColor"
          :pagesData = "getPageInfo"
          v-on:update-mounted-components="updateMountedComponents"
        />
        <VideoSection
          :pagesData = "getPageInfo"
          v-on:update-mounted-components="updateMountedComponents"
        />
        <ProcessSection 
          :pivot = "pivot"
          :colors = "getFiguresColor"
          :pagesData = "getPageInfo"
          v-on:update-mounted-components="updateMountedComponents"
        />
        <ProjectSection
          :pivot = "pivot"
          :colors = "getFiguresColor" 
          :pagesData = "getPageInfo" 
          :casesData = "getCaseInfo"
          v-on:update-mounted-components="updateMountedComponents"
        />
        <FeedbackSection 
          :pagesData = "getPageInfo"
          :feedbackData = "getFeedbackInfo"
          v-on:update-mounted-components="updateMountedComponents"
        />
        <!-- <PartnersSection
          :pagesData = "getPageInfo"
          v-on:update-mounted-components="updateMountedComponents"
        /> -->
        <!-- <TeamSection
          :pagesData = "getPageInfo"
          :teamData = "getTeamInfo"
          v-on:update-mounted-components="updateMountedComponents"
        /> -->
        <BlogSection
          :pivot = "pivot"
          :colors = "getFiguresColor"
          :pagesData = "getPageInfo"
          :postsData = "getPostInfo"
          v-on:update-mounted-components="updateMountedComponents"
        />
        <ContactsSection 
          :pivot = "pivot"
          :colors = "getFiguresColor"
          v-on:update-mounted-components="updateMountedComponents"
        />
      </main>
  </div>
</template>


<script>
import Preloader from '~/components/preloader/Preloader'
import store from '../store'
import Header from '~/components/parts/general/Header'
import ViewSection from '~/components/parts/mainPageParts/ViewSection'
import DevSection from '~/components/parts/mainPageParts/DevSection'
import VideoSection from '~/components/parts/mainPageParts/VideoSection'
import ProcessSection from '~/components/parts/mainPageParts/ProcessSection'
import ProjectSection from '~/components/parts/mainPageParts/ProjectSection'
import FeedbackSection from '~/components/parts/mainPageParts/FeedbackSection'
import PartnersSection from '~/components/parts/mainPageParts/PartnersSection'
import TeamSection from '~/components/parts/mainPageParts/TeamSection'
import BlogSection from '~/components/parts/general/BlogSection'
import ContactsSection from '~/components/parts/general/ContactsSection'
import { TweenMax, TimelineMax, Power3, TweenLite } from 'gsap'
import { mapGetters, mapActions } from 'vuex'
import VueScrollTo from 'vue-scrollto'
export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We design and develop modern websites and online stores, services for customers of all sizes, specialising in creating stylish, modern websites, web services and online stores.' }
    ],
  },
  components: {
    Header,
    ViewSection,
    DevSection,
    VideoSection,
    ProcessSection,
    ProjectSection,
    FeedbackSection,
    BlogSection,
    TeamSection,
    PartnersSection,
    Preloader,
    ContactsSection
  },
  created () {
    this.$store.dispatch('getPages');
    this.$store.dispatch('getCases');
    this.$store.dispatch('getFeedback');
    this.$store.dispatch('getPosts');
    this.$store.dispatch('getTeam');
  },
  data: function () {
    return {
      pivot: {},
      loaded: false,
      childrenMounted : []
    }
  },
  computed: {
    ...mapGetters([
      'getPageInfo',
      'getFigures',
      'getLoading',
      'getFiguresColor',
      'getPageInfo',
      'getCaseInfo',
      'getFeedbackInfo',
      'getPostInfo',
      'getTeamInfo',
      'getComponentsMounted',
    ]),
  },
  methods: {
    updateMountedComponents (componentName) {
      this.childrenMounted.push(componentName)
      if(this.childrenMounted.length === 10) {
        setTimeout(() => {
          if(this.$route.params.scrollTo && this.$route.params.scrollTo !== '#home') {
              VueScrollTo.scrollTo(this.$route.params.scrollTo)
            }    
        }, 200)  
      }
    },
		receive3Dmodels () {
				
			let pivot  = new THREE.Group();
      let objLoader = new THREE.OBJLoader();
      // objLoader.setLogging({enabled : false, debug : false})
      objLoader.setPath('./3Dmodels/');
			function addPivot (pivot, resolve) {
				resolve(pivot)
				 
			}
			function prepareModels(model, modelName, addPivot, resolve, reject) {
        model.scale.set(1.5,1.5,1.5);
				model.rotation.x = -Math.PI * 0.5
				model.children[0].geometry.center()
				model.modelName = modelName
				if(modelName === 'pyramid') {
					model.rotation.x = 60
				}
				pivot.add(model)
				resolve(pivot)
			}
			let trapezoid = new Promise((resolve, reject) => {
				objLoader.load('trapezoid.obj',
				(model) => prepareModels(model ,'trapezoid', this.addPivot, resolve, reject))
			})  
			let minus = new Promise((resolve, reject) => {
				objLoader.load('minus.obj',
				(model) => prepareModels(model, 'minus', this.addPivot, resolve, reject));
			})
			let plus = new Promise((resolve, reject) => {
				objLoader.load('plus.obj',
				(model) => prepareModels(model, 'plus', this.addPivot, resolve, reject));
			})
			let pyramid = new Promise((resolve, reject) => {
				objLoader.load('pyramid.obj',
				(model) => prepareModels(model, 'pyramid', this.addPivot, resolve, reject));
			})
			let sphere = new Promise((resolve, reject) => {
				objLoader.load('sphere.obj',
				(model) => prepareModels(model, 'sphere', this.addPivot, resolve, reject));
			})
			let wave = new Promise((resolve, reject) => {
				objLoader.load('wave.obj',
				(model) => prepareModels(model, 'wave', this.addPivot, resolve, reject));
			})
			let cube = new Promise((resolve, reject) => {
				objLoader.load('cube.obj',
				(model) => prepareModels(model, 'cube', this.addPivot, resolve, reject));
			})
		
				Promise.all([trapezoid, minus, plus, pyramid, sphere, wave, cube]).then(value => {			
            this.pivot = value
				})
		},
  },
  mounted() {
    this.receive3Dmodels()
     TweenMax.staggerFromTo(('.nav_list li'), 0.5, {y: "-50px", opacity: 0, rotation: "-15%"}, {y: "0%", opacity: 1, rotation: "0"}, 0.1);
     let canvases = document.getElementsByTagName('canvas')
     window.addEventListener('resize', () => {
       for(let i = 0; i<canvases.length; i++) {
         canvases[i].width = window.innerWidth
         canvases[i].height = window.innerHeight
       }
     })
  },
} 
</script>



