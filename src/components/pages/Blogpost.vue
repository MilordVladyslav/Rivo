<template>
	<div>
		<div class="pages">
			<Header></Header>
		</div>
		<ThemeChecker/>
		<main class="wrapper blogpost_page">
			<CaseStartSection />
			<BlogTextContent :pivot = "getFigures" :colors = "getFigureColors" />
			<BlogSection :pivot = "getFigures" :colors = "getFigureColors" />
			<ContactsSection :pivot = "getFigures" :colors = "getFigureColors" />
		</main>
	</div>
</template>


<script>
import Header from '../parts/general/Header'
import CaseStartSection from '../parts/general/CaseStartSection'
import BlogTextContent from '../parts/blogPageParts/BlogTextContent'
import BlogSection from '../parts/general/BlogSection'
import BlogContent from '../parts/general/BlogContent'
import ContactsSection from '../parts/general/ContactsSection'
// import sceneMaker from '../../mixins/sceneMaker'	
import ThemeChecker from '../parts/general/ThemeChecker'
import { mapGetters } from 'vuex'
export default {
	name: 'Blogpost',
	components: {
		Header,
    	ContactsSection,
		BlogSection,
		ThemeChecker,
		CaseStartSection,
		BlogTextContent,
		BlogContent
	},
	computed: {
		...mapGetters([
			'getFigures',
			'getFigureColors'
		])
	}
}

</script>

