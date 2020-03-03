import axios from 'axios'

export default ({
	state: function() {
		return {
			pivot: {},
			loading: true,
			currentPage: '',
			currentCase: '',
			pagesInfo: '',
			casesInfo: '',
			feedbackInfo: '',
			postsInfo: '',
			teamInfo: '',
			postsData: '',
			сomponentsMounted: [],
			figuresColor: {
				darkColor: 0x161616,
				lightColor:  0x6d5c1a
			},
		}
	},
	actions: {
		clearComponents ({commit}) {
			commit('CLEAR_COMPONENTS')
		},
		componentsAmount ({commit}, mountedComponent) {
			commit('UPDATE_COMPONENTS_LIFE_CYCLE', mountedComponent)
		},
		getCurrentCase ({commit}) {
			let searchQueryCase = new URLSearchParams(window.location.search).get('title')
			axios.get('http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/cases?slug=' + searchQueryCase)
			.then((res) => { 
				commit('UPDATE_CURRENT_CASE', res)
			})
		},
		getCurrentBlogpost ({commit}) {
			let searchQueryBlogpost = new URLSearchParams(window.location.search).get('title')
			axios.get('http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/posts?slug=' + searchQueryBlogpost)
			.then((res) => { 
				commit('UPDATE_CURRENT_BLOGPOST', res)
			})
		},
		receive3Dmodels ({commit}) {
				
			let pivot  = new THREE.Group();
			let objLoader = new THREE.OBJLoader();

			commit('CHANGE_LOADING', true)
			function addPivot (pivot, resolve) {
				resolve(pivot)
				 
			}
			function prepareModels(model, modelName, addPivot, resolve, reject) {
				model.rotation.x = -Math.PI * 0.5
				// model.children[0].geometry.center()
				model.modelName = modelName
				if(modelName === 'pyramid') {
					model.rotation.x = 60
				}
				pivot.add(model)
				resolve(pivot)
			}

			let trapezoid = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/trapezoid.obj?token=AGFTNVNZNVDHEG7BFBKLQSC5YA3FE',
				(model) => prepareModels(model ,'trapezoid', this.addPivot, resolve, reject))
			})  
			let minus = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/minus.obj?token=AGFTNVOUSIKKAYFL7MOLSQS5YA26M',
				(model) => prepareModels(model, 'minus', this.addPivot, resolve, reject));
			})
			let plus = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/plus.obj?token=AGFTNVLXU647IICCSO7Q6GC5YA3AC',
				(model) => prepareModels(model, 'plus', this.addPivot, resolve, reject));
			})
			let pyramid = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/pyramid.obj?token=AGFTNVKFGDRYPKU7HCKOOJS5YA3BK',
				(model) => prepareModels(model, 'pyramid', this.addPivot, resolve, reject));
			})
			let sphere = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/sphere.obj?token=AGFTNVKY7UA3FDGJW5ZUHOC5YA3DC',
				(model) => prepareModels(model, 'sphere', this.addPivot, resolve, reject));
			})
			let wave = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/wave.obj?token=AGFTNVKO47CTHYZJPV5RDAS5YA3GI',
				(model) => prepareModels(model, 'wave', this.addPivot, resolve, reject));
			})
			let cube = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/cube.obj?token=AGFTNVKPQNUVUIIB7FRPKIC5YA224',
				(model) => prepareModels(model, 'cube', this.addPivot, resolve, reject));
			})
		
				Promise.all([trapezoid, minus, plus, pyramid, sphere, wave, cube]).then(value => {			
					commit('UPDATE_3D_MODELS',  value)	
					commit('CHANGE_LOADING', false)
				})
		},
		currentPage ({commit}, page) {
			commit('UPDATE_CURRENT_PAGE', page)
		},
		getPages ({commit}) {
			axios.get(`http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/pages/10`).then((response) => {
				commit('UPDATE_PAGES_API', response)
			})	
		},
		getCases ({commit}) {
			axios.get(`http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/cases/`).then((response) => {
				commit('UPDATE_CASES_API', response)
			})	
		},
		getFeedback ({commit}) {
			axios.get(`http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/feedback/`).then((response) => {
				commit('UPDATE_FEEDBACK_API', response)
			})	
		},
		getPosts ({commit}) {
			axios.get(`http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/posts/`).then((response) => {
				commit('UPDATE_POSTS_API', response)
			})	
		},
		getTeam ({commit}) {
			axios.get(`http://1572834.zorrro.web.hosting-test.net/wp-json/wp/v2/team/`).then((response) => {
				commit('UPDATE_TEAM_API', response)
			})	
		},
	},
	getters: {
		getFigures: state => state.pivot,
		getLoading: state => state.loading,
		getFiguresColor: state => state.figuresColor,
		getPageInfo: state => state.pagesInfo.ACF,
		getCaseInfo: state => state.casesInfo,
		getFeedbackInfo: state => state.feedbackInfo,
		getPostInfo: state => state.postsInfo,
		getTeamInfo: state => state.teamInfo,
		casesData: state => state.currentCase,
		postsData: state => state.postsData,
		getformContact: state => state.formContact,
		getComponentsMounted: state => {
			return state.сomponentsMounted
		}
	},
	mutations: {
		CLEAR_COMPONENTS (state) {
			this.state.componentsMounted = []
		},
		UPDATE_COMPONENTS_LIFE_CYCLE (state, payload) {
			this.state.сomponentsMounted.push(payload)
		},
		UPDATE_CURRENT_BLOGPOST (state, payload) {
			this.state.postsData = payload.data[0]
		},
		UPDATE_CURRENT_CASE (state, payload) {
			this.state.currentCase =  payload.data[0]
		},
		UPDATE_3D_MODELS (state, payload) {
			this.state.pivot = payload
		},
		UPDATE_CURRENT_PAGE (state, payload) {
			this.state.pivot.currentPage = payload
		},
		CHANGE_LOADING (state, payload) {
			setTimeout(() => {
				this.state.loading = payload
			}, 1000)
		},
		UPDATE_PAGES_API (state, payload) {
			this.state.pagesInfo = payload.data
		},
		UPDATE_CASES_API (state, payload) {
			this.state.casesInfo = payload.data
		},
		UPDATE_FEEDBACK_API (state, payload) {
			this.state.feedbackInfo = payload.data
		},
		UPDATE_POSTS_API (state, payload) {
			this.state.postsInfo = payload.data
		},
		UPDATE_TEAM_API (state, payload) {
			this.state.teamInfo = payload.data
		},
	}
})


