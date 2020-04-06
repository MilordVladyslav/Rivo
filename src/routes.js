import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import CasePage from './components/pages/CasePage.vue'
import Blogpost from './components/pages/Blogpost.vue'
import SuccessPage from './components/SuccessPage.vue'
import Preloader from './components/preloader/Preloader.vue'
import ErrorPage from './components/ErrorPage.vue'

export default new VueRouter ({
	mode: 'history',
	routes: [
		{ path: '/', name: 'mainPage', component: MainPage},
		{ path: '/blogpost/:id', name: 'blogpost', component: Blogpost  },
		{ path: '/case/:id', name: 'item', component: CasePage },
		{ path: '/success/', name: 'SuccessPage', component: SuccessPage },
		{ path: '/preloader/', name: 'Preloader', component: Preloader },
		{ path: '*', name: 'ErrorPage', component: ErrorPage },
	],
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})
