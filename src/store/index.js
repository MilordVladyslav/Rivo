import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let pivot  = new THREE.Group();
let objLoader = new THREE.OBJLoader();

export default new Vuex.Store({
	state: {
		pivot: {},
		loading: true,
		currentPage: '',
		figureColors: {
			darkColor: 0x161616,
	  		lightColor:  0x6d5c1a
		}
	},
	actions: {
		receive3Dmodels ({commit}) {
			commit('CHANGE_LOADING', true)
			function addPivot (pivot, resolve) {
				resolve(pivot)
				 
			}
			function prepareModels(model, modelName, addPivot, resolve, reject) {
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
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/trapezoid.obj?token=AGFTNVKHVL2Q5X2TAAIA2VS5WQRO6',
				(model) => prepareModels(model ,'trapezoid', this.addPivot, resolve, reject))
			})  
			let minus = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/minus.obj?token=AGFTNVIT4JZRS7XEWMW43JS5WQRIQ',
				(model) => prepareModels(model, 'minus', this.addPivot, resolve, reject));
			})
			let plus = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/plus.obj?token=AGFTNVKYV2P5GPR4QDKXBOC5WQRKO',
				(model) => prepareModels(model, 'plus', this.addPivot, resolve, reject));
			})
			let pyramid = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/pyramid.obj?token=AGFTNVIFKT7CMMCRDXA3OKS5WQRLY',
				(model) => prepareModels(model, 'pyramid', this.addPivot, resolve, reject));
			})
			let sphere = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/sphere.obj?token=AGFTNVKNDWFMZAYHOCVE7U25WQRNM',
				(model) => prepareModels(model, 'sphere', this.addPivot, resolve, reject));
			})
			let wave = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/wave.obj?token=AGFTNVP5DGFUKACIBZRAE4C5WQRQO',
				(model) => prepareModels(model, 'wave', this.addPivot, resolve, reject));
			})
			let cube = new Promise((resolve, reject) => {
				objLoader.load('https://raw.githubusercontent.com/developerscompany/rivo-off-site/master/src/assets/3Dmodels/cube.obj?token=AGFTNVPLFNBX4GRCIDWIWQK5WQRGS',
				(model) => prepareModels(model, 'cube', this.addPivot, resolve, reject));
			})
		
				Promise.all([trapezoid, minus, plus, pyramid, sphere, wave, cube]).then(value => {			
					commit('UPDATE_3D_MODELS',  value)	
					commit('CHANGE_LOADING', false)
				})
		},
		currentPage ({commit}, page) {
			console.log(page)
			commit('UPDATE_CURRENT_PAGE', page)
		}
	},
	getters: {
		getFigures: state => state.pivot,
		getLoading: state => state.loading,
		getFigureColors: state => state.figureColors
	},
	mutations: {
		UPDATE_3D_MODELS (state, payload) {
			this.state.pivot = payload
		},
		UPDATE_CURRENT_PAGE (state, payload) {
			this.state.pivot.currentPage = payload
			console.log(this.state.pivot.currentPage)
		},
		CHANGE_LOADING (state,payload) {
			setTimeout(() => {
				this.state.loading = payload
			}, 1000)
			
		}
	}
})