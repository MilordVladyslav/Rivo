<template>
    <section class="case-content">
        <div class="case-content-section-container canvas-container">
            <div class="case-content-canvas-wrapper canvas-wrapper" id="case-content-canvas-wrapper"></div>
        </div>
        <div class="case-block container">
            <div class="plus_bit case_third_plus">
                <span></span>
                <span></span>
            </div>
            <div class="circle-figure case_single_circle"></div>
            <h2 class="large_h tc">More <span class="orange_bit">Cases</span></h2>
            <hooper class="project_list case_page" :settings="hooperSettings"> 
                <slide class="project-item case_page" v-for="(item, index) in items" :key="item.id">
                    <div class="item_help">
                        <router-link :to="{ name: 'item', params: { id: index }, query: {id: item.id } }">
                            <h5>{{ item.case_name }}</h5>
                            <div class="img_size">
                                <img src="~@/assets/images/123.jpg" srcset="~@/assets/images/123@2x.jpg 2x" alt="" />
                            </div>
                            <div class="info_pr">
                                <i class="icon-combined-shape shape_more"></i>
                                <p class="word_more">View work</p>
                            </div>
                        </router-link>
                    </div>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>	
        </div>
    </section>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import fetchData from '../../../data/case.json'
import sceneMaker from '../../../mixins/sceneMaker'
export default {
    name: "CaseContent",
    data: function () {
        return {
            renderer: new THREE.WebGLRenderer({alpha: true}),
            items: fetchData,
            hooperSettings: {
    			wheelControl: false,
    			infiniteScroll: false,
    			itemsToShow: 1,
    			itemsToSlide: 1,
    			margin: 60,
		    	breakpoints: {
		          	1600: {
		            	itemsToShow: 2.5,
		          	},
		          	768: {
		          		itemsToShow: 2,
		          	},
		        }     			
			},
        }
    },
    components: {
	    Hooper,
	    Slide,
		HooperNavigation,
    },
    watch: {
        pivot: function () {
            this.makeScene()
        }
    },
    methods: {
        makeScene: function () {
            this.sceneMaker(
                    'case-content-canvas',
                    [
                        {
                            modelName: 'plus',
                            position: {
                                x: 270,
                                y: 66,
                                z: 50
                            },
                            rotation: {
                                axis: 'z',
                                speed: 0.005
                            },
                            color: this.colors.lightColor
                        },

                        {
                            modelName: 'sphere',
                            position: {
                                x: -325,
                                y: -40,
                                z: 10
                            },
                            rotation: {
                                axis: 'z',
                                speed: 0.005
                            },
                            color: this.colors.darkColor
                        },
                    
                    ],
                    {

                        height: 900
                    }
                )
        }
    },
    mounted () {
		if(this.pivot.length) {
			this.makeScene()
		}
    },
	beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
		// console.log(this.renderer)
	},
    mixins: [ sceneMaker ],
    props: ['pivot', 'colors']
}
</script>

<style>

</style>