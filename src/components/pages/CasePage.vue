<template>
	<div>
		<div class="pages">
			<Header></Header>
		</div>
		<ThemeChecker />
		<main class="wrapper">
			<CaseStartSection />
			<DescContent :pivot = "getFigures" :colors = "getFigureColors"/>
			<DiscoveryContent :pivot = "getFigures" :colors = "getFigureColors"/>
			<ImageSliderContent />
			<ClientMovieContent :pivot = "getFigures" :colors = "getFigureColors"/>
			<CaseContent :pivot = "getFigures" :colors = "getFigureColors"/>
			<ContactsSection :pivot = "getFigures" :colors = "getFigureColors"/>
		</main>
	</div>
</template>

<script>
import Header from '../parts/general/Header'
import ContactsSection from '../parts/general/ContactsSection'
// import fetchData from '../../data/case.json'
// import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
// import sceneMaker from '../../mixins/sceneMaker'
import { mapGetters } from 'vuex'
import ThemeChecker from '../parts/general/ThemeChecker'
import DescContent from '../parts/casePageParts/DescContent'
import DiscoveryContent from '../parts/casePageParts/DiscoveryContent'
import ImageSliderContent from '../parts/casePageParts/ImageSliderContent'
import ClientMovieContent from '../parts/casePageParts/ClientMovieContent'
import CaseContent from '../parts/casePageParts/CaseContent'
import CaseStartSection from '../parts/general/CaseStartSection'
export default {
	name: "CasePage",
    data() {
    	return {
			// items: fetchData,
			// modal: false,
    		// hooperSettingsImage: {
    		// 	wheelControl: false,
    		// 	infiniteScroll: false,
    		// 	itemsToShow: 1,
    		// 	itemsToSlide: 1,
		    // 	breakpoints: {
		    //       	1600: {
		    //         	itemsToShow: 1.3,
		    //       	},
		    //       	1440: {
			// 			itemsToShow: 1,
		    //       	},
		    //       	768: {
			// 			itemsToShow: 2,
		    //       	},
		    //     } 			
    		// },
    		// hooperSettings: {
    		// 	wheelControl: false,
    		// 	infiniteScroll: false,
    		// 	itemsToShow: 1,
    		// 	itemsToSlide: 1,
    		// 	margin: 60,
		    // 	breakpoints: {
		    //       	1600: {
		    //         	itemsToShow: 2.5,
		    //       	},
		    //       	768: {
		    //       		itemsToShow: 2,
		    //       	},
		    //     }     			
			// },
			// pivot: {},
			// renderer: new THREE.WebGLRenderer({alpha: true})
    	}
    },
    components: {
    	Header,
    	ContactsSection,
	    // Hooper,
	    // Slide,
		// HooperNavigation,
		ThemeChecker,
		DescContent,
		DiscoveryContent,
		ImageSliderContent,
		ClientMovieContent,
		CaseContent,
		CaseStartSection
	},
	computed: {
		...mapGetters([
			'getFigures',
			'getFigureColors'
		]),
	},
	// watch: {
	// 	getFigures: function () {
	// 		this.pivot = this.getFigures
	// 		// this.makeScene()
	// 	}
	// },
	// created() {
	// },
	// mounted () {
	//   if(this.getFigures.length) {
	// 	  this.pivot = this.getFigures
	// 	this.makeScene()
	//   }
	// },
	// beforeDestroy() {
	// 	this.renderer.forceContextLoss()
	// 	this.renderer.context = null
	// 	this.renderer.domElement = null
	// 	this.renderer = null
	// 	console.log(this.renderer)
	// },
	// mixins: [sceneMaker]
}

</script>

<style>

</style>

