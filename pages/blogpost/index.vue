<style lang="sass">
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
	<div>
		<div class="pages">
			<Header></Header>
		</div>
		<main class="wrapper blogpost_page">
			<section class="first-content case-start-section" id="first-screen-blog" v-if="this.postsData">
		        <div class="back_image">
		            <img :src="postsData.fimg_url" alt="" />
		        </div>
		        <div class="container">
		            <div class="bottom_zone">
		                <div class="topic_case">Blog</div>
		                <h2 class="name_case">{{ postsData.title.rendered }}</h2>
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
			<section id="second-screen" class="blogtext-content" v-if="this.postsData">
				<div class="blogtext-block container">
					<div class="content_blogpost" v-html="postsData.content.rendered"></div>
				</div>
			</section>
			<BlogSection
				:postsData="getPostInfo"
				:pivot="pivot"
				:colors="getFiguresColor"
			/>
			<ContactsSection
				:pivot="pivot"
				:colors="getFiguresColor"
			/>
		</main>
	</div>
</template>


<script>
import Header from '~/components/parts/general/Header'
import BlogSection from '~/components/parts/general/BlogSection'
import ContactsSection from '~/components/parts/general/ContactsSection'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
	name: 'Blogpost',
	head: {
		meta: [
	      { charset: 'utf-8' },
	      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	      { hid: 'description', name: 'description', content: 'We design and develop modern websites and online stores, services for customers of all sizes, specialising in creating stylish, modern websites, web services and online stores.' }
	    ],
	},
	components: {
		Header,
    	ContactsSection,
		BlogSection,
	},
	data() {
		return {
			blogpostToShow: 2,
			currentPost: '',
			templateRender: false,
			pivot: {}
		}
	},
	watch: {
		'$route': function (to, from, next) {
			this.$store.dispatch('getCurrentBlogpost')
		}
	},
	created() {
		this.$store.dispatch('getPosts')
	},
	computed: {
		...mapGetters([
			'getPostInfo',
			'postsData',
			'getFiguresColor'
		])
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
	mounted() {
		this.$store.dispatch('getCurrentBlogpost')
		this.receive3Dmodels()
	},
}

</script>
