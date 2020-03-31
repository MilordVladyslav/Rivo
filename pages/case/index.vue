<style lang="sass">
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
	<div>
		<div class="pages">
			<Header></Header>
		</div>
		<nuxt />
		<main class="wrapper cases">
			<section class="first-content case-start-section" id="first-screen">
		        <div class="back_image" v-if="!!this.casesData">
		            <img :src="casesData.ACF.header_section.image" alt=""/>
		        </div>
		        <div class="container" v-if="!!this.casesData">
		            <div class="bottom_zone">
		                <div class="topic_case">{{ casesData.ACF.header_section.description }}</div>
		                <h2 class="name_case">{{ casesData.ACF.header_section.name }}</h2>
		                <a href="#second-screen" class="look_case" v-scroll-to="'#second-screen'">
		                    <span class="shape_circle">
		                    	<span>
		                    		<img src="~@/assets/svg-icon/combined-shape-2.svg" alt="" />
		                    	</span>
		                    </span>
		                    <span>Explore</span>
		                </a>
		            </div>
		        </div>
		    </section>
			<DescContent
				:casesData="this.casesData"
				:colors="getFiguresColor"
			/>
			<DiscoveryContent
				:casesData="this.casesData"
				:colors="getFiguresColor"
			/>
			<ImageSliderContent
				:casesData="this.casesData"
			/>
			<ClientMovieContent
				:casesData="this.casesData"
				:colors="getFiguresColor"
			/>
			<CaseContent
				:casesData="getCaseInfo"
				:colors="getFiguresColor"
			/>
			<ContactsSection
				:pivot="this.pivot"
				:colors="getFiguresColor"
			/>
		</main>
	</div>
</template>

<script>
import Header from '~/components/parts/general/Header'
import DescContent from '~/components/parts/casePageParts/DescContent'
import DiscoveryContent from '~/components/parts/casePageParts/DiscoveryContent'
import ImageSliderContent from '~/components/parts/casePageParts/ImageSliderContent'
import ClientMovieContent from '~/components/parts/casePageParts/ClientMovieContent'
import CaseContent from '~/components/parts/casePageParts/CaseContent'
import ContactsSection from '~/components/parts/general/ContactsSection'
import store from '../../store'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
	name: "case",
	head: {
		meta: [
	      { charset: 'utf-8' },
	      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	      { hid: 'description', name: 'description', content: 'We design and develop modern websites and online stores, services for customers of all sizes, specialising in creating stylish, modern websites, web services and online stores.' }
	    ],
	},
    data() {
    	return {
			payloadCase: false,
			modal: false,
			caseRender: false,
			canvasWrapper: false,
			canvasRendered: false,
			pivot: {},
    	}
    },
    components: {
    	Header,
    	ContactsSection,
		DescContent,
		DiscoveryContent,
		ImageSliderContent,
		CaseContent,
		ClientMovieContent,
	},
	created() {
		this.$store.dispatch('getCases');
	},
	computed: {
		...mapGetters([
			'getCaseInfo',
			'casesData',
			'getFiguresColor'
		]),
	},
	watch: {
		pivot: function () {
			this.canvasWrapper = true
		},
		'$route': function (to, from, next) {
			this.$store.dispatch('getCurrentCase');
		}
	},
	mounted() {
		setTimeout(() => {
			console.log(this.casesData)
		}, 1500)
		this.$store.dispatch('getCurrentCase');
		this.receive3Dmodels()
		let searchQueryCase = new URLSearchParams(window.location.search).get('title')
		this.postData = axios.get('http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/cases?slug=' + searchQueryCase)
			.then((res) => { 
				this.caseRender = true
			})
		let canvases = document.getElementsByTagName('canvas')
		window.addEventListener('resize', () => {
			for(let i = 0; i<canvases.length; i++) {
				canvases[i].width = window.innerWidth
				canvases[i].height = window.innerHeight
			}
		})
	},
	updated () {
		if(this.canvasWrapper && !this.canvasRendered) {
			let canvases = document.getElementsByTagName('canvas')
			window.addEventListener('resize', () => {
			for(let i = 0; i<canvases.length; i++) {
				canvases[i].width = window.innerWidth
				canvases[i].height = window.innerHeight
			}
			})
			this.canvasRendered = true	
		}
	},
    methods: {
		receive3Dmodels () {
				
			let pivot  = new THREE.Group();
			let objLoader = new THREE.OBJLoader();
			objLoader.setPath('../3Dmodels/');
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
}
</script>

<style>
</style>


