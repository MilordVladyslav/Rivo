<template>
	<div>
		<!-- <Preloader v-show="this.loaded === false"/> -->
		<!-- <div v-if="!getLoading"> -->
			<Header :isMainPage = "true" ></Header>
			<ThemeChecker />
			<main class="wrapper">
				<ViewSection :pivot = "getFigures" :colors = "getFigureColors" />
				<DevSection :pivot = "getFigures" :colors = "getFigureColors"/>
				<VideoSection />
				<ProcessSection :pivot = "getFigures" :colors = "getFigureColors"/>
				<ProjectSection :pivot = "getFigures" :colors = "getFigureColors"/>
				<FeedbackSection />
				<PartnersSection />
				<TeamSection />
				<BlogSection :pivot = "getFigures" :colors = "getFigureColors"/>
				<ContactsSection :pivot = "getFigures" :colors = "getFigureColors"/>
			</main>
		<!-- </div> -->
<!-- 		<div v-else>
			<Preloader/>
		</div> -->
	</div>
</template>


<script>
import Preloader from './preloader/Preloader'
import store from '../store'
import Header from './parts/general/Header'
import ViewSection from './parts/mainPageParts/ViewSection'
import DevSection from './parts//mainPageParts/DevSection'
import ProcessSection from './parts/mainPageParts/ProcessSection'
import ProjectSection from './parts/mainPageParts/ProjectSection'
import FeedbackSection from './parts/mainPageParts/FeedbackSection'
import PartnersSection from './parts/mainPageParts/PartnersSection'
import TeamSection from './parts/mainPageParts/TeamSection'
import BlogSection from './parts/general/BlogSection'
import ContactsSection from './parts/general/ContactsSection'
import VideoSection from './parts/mainPageParts/VideoSection'
import CasePage from './pages/CasePage'
//import CanvasWrapper from './parts/CanvasWrapper'
import ThemeChecker from './parts/general/ThemeChecker'
import { TweenMax, TimelineMax, Power3, TweenLite } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { mapGetters } from 'vuex'

import 'three/build/three.min'
import 'three/examples/js/loaders/OBJLoader'
import 'three/examples/js/controls/OrbitControls'

export default {
	name: 'MainPage',
	components: {
		Header,
		DevSection,
		ViewSection,
		ProcessSection,
		ProjectSection,
		ContactsSection,
		BlogSection,
		TeamSection,
		PartnersSection,
		FeedbackSection,
		CasePage,
		VideoSection,
		Preloader,
		ThemeChecker
	},
	mounted() {
		console.log(this.$router)
		TweenMax.staggerFromTo(('.nav_list li'), 0.5, {y: "-50px", opacity: 0, rotation: "-15%"}, {y: "0%", opacity: 1, rotation: "0"}, 0.1);
	},
	data: function () {
		return {
			pivot: {},
			loaded: false,
		}
	},
	computed: {
		...mapGetters([
			'getFigures',
			'getLoading',
			'getFigureColors'
		]),
	},

	methods: {

	},
	mounted() {
		// let nt;
		// window.addEventListener('scroll', (e) => {
		// 	e.preventDefault()
		// 	nt = document.querySelector('body').getBoundingClientRect().y = 500
		// 	console.log(window.scrollY)
		// 	// console.log(nt)
		// })

		// $(document).bind( 'mousewheel', function (e) { 
		// 	var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
		// 	e.preventDefault(); 
		// 	e.stopPropagation(); 
		// 	$(document.body).stop().animate( { 
		// 		scrollTop : nt 
		// 	} , 500 , 'easeInOutCubic' );  
		// } )

		TweenMax.staggerFromTo(('.nav_list li'), 0.5, {y: "-50px", opacity: 0, rotation: "-15%"}, {y: "0%", opacity: 1, rotation: "0"}, 0.1);
		let canvases = document.getElementsByTagName('canvas')
		window.addEventListener('resize', () => {
			for(let i = 0; i<canvases.length; i++) {
				canvases[i].width = window.innerWidth
				canvases[i].height = window.innerHeight
			}
		})
	},
	beforeDestroy() {
		// this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
	},	
}	
</script>

