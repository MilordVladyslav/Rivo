<template>
    <section id="blog" class="blog-content" v-if="this.payload">
        <div class="blog-section-container canvas-container" id="blog-section-container" v-if="this.canvasBind">
			<div class="blog-section-canvas-wrapper canvas-wrapper" id="blog-section-canvas-wrapper"></div>
		</div> 
		<div class="snake-figure blog_snake_2">
			<img src="~@/assets/svg-icon/snake.svg" alt="" />
		</div>
	    <div class="container blog-block">
			<div class="snake-figure blog_snake">
				<img src="~@/assets/svg-icon/snake.svg" alt="" />
			</div>
	        <h2 class="large_h tc">Blog</h2>
	        <ul class="blog_list">
	            <li v-if="blogpost = postsData.length" class="project-item" v-for="(blogpost, index) in 	blogpostToShow" :key="index" @click="changeCurrentPost" v-scroll-to="{el: '#first-screen-blog', duration: 500}">
	                <nuxt-link :to="`/blogpost/?title=${postsData[index].slug}`">
	                    <div class="img_size">
	                        <img :src="postsData[index].fimg_url" alt=""/>
	                    </div>
	                    <div class="news_about">
	                        <h5>{{ postsData[index].title.rendered }}</h5>
	                        <p class="desc_p" v-html="postsData[index].excerpt.rendered"></p>
	                        <div class="rd_more">
	                            <i class="icon-combined-shape"></i>
	                            <p class="word_more">Read more</p>
	                        </div>
	                    </div>
	                </nuxt-link>
	            </li>
	        </ul>
      		<div class="tc" v-if="blogpostToShow < postsData.length">
                <button @click="postsData.length % 2 == 0 ? blogpostToShow += 2 : blogpostToShow += 1"  class="more_articles">View more projects</button>
      		</div>
	    </div>
    </section>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
import { debounce } from 'underscore'

export default {
    name: 'BlogSection',
    data() {
        return {
            blogpostToShow: 2,
			payload: false,
			canvasBind: false,
			canvasRendered: false,
			renderedInfo: false
        }
	},
	computed: {
		rendererBlog: function () {
		return new THREE.WebGLRenderer({alpha: true})
		}
	},
	methods: {
		makeScene() {
			this.sceneMaker(
				'blog-section-canvas',
                [
					{
						modelName: 'plus',
						position: {
							x: -155,
							y: 100,
							z: 20
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
                    },
                ],
                {
                    height: 800
				},
				this.rendererBlog
            )
		},
		changeCurrentPost() {
			this.$store.dispatch('getCurrentBlogpost')
		}
	},
	watch: {
		pivot: function () {
			this.canvasBind = true
		},
		pagesData: function () {
			this.payload = true

		},
		postsData: function () {
			this.payload = true
		},
	},
	filters: {
		sliceParagraph(value) {
			return `${value.slice(0, 70)}`
		}
	},
	updated() {
		this.$emit('update-mounted-components', 'BlogSection')
		if(!this.canvasRendered && this.canvasBind && window.innerWidth > 1200) {
			setTimeout( () => {
				this.makeScene() 
			}, 200)
			this.canvasRendered = true
		}
		if(!!this.pivot && !!this.postsData && !!this.pagesData && !this.renderedInfo) {
			this.renderedInfo = true
		}
	},
	beforeDestroy() {
		this.rendererBlog.forceContextLoss()
	},
    mixins:[sceneMaker],
	props:['pivot', 'postsData', 'pagesData', 'colors'],
}
</script>

<style>

</style>


