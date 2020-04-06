<template>
    <section id="blog" class="blog-content">
        <div class="blog-section-container canvas-container" id="blog-section-container">
			<div class="blog-section-canvas-wrapper canvas-wrapper" id="blog-section-canvas-wrapper"></div>
		</div> 
    <div class="snake-figure blog_snake_2">
        <img src="~@/assets/svg-icon/snake.svg" alt="" />
    </div>
    <div class="container blog-block">
        <!-- <div class="circle-figure blog_circle"></div> -->
        <div class="rectangle-figure blog_rectangle"></div>
        <div class="plus_bit blog_first_plus plus-figure">
            <span></span>
            <span></span>
        </div>
        <div class="snake-figure blog_snake">
            <img src="~@/assets/svg-icon/snake.svg" alt="" />
        </div>
        <h2 class="large_h tc">Blog</h2>
        <ul class="blog_list">
            <li v-if="blogpost < blogposts.length" class="project-item" v-for="(blogpost, index) in blogpostToShow" :key="blogpost.id">
                <router-link :to="{ name: 'blogpost', params: { id: index, pivotCase: pivot }, query: {id: blogpost.id } }">
                    <div class="img_size">
                        <img src="~@/assets/images/blog-1.jpg" srcset="~@/assets/images/blog-1@2x.jpg 2x" alt="" />
                    </div>
                    <div class="news_about">
                        <h5>{{ blogposts[blogpost].blogpost_name }}</h5>
                        <p class="desc_p">{{ blogposts[blogpost].detail_desc }} ...</p>
                        <div class="rd_more">
                            <i class="icon-combined-shape"></i>
                            <p class="word_more">Read more</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="tc">
            <button @click="blogpostToShow += 2" class="more_articles">Show more projects</button>
        </div>
    </div>
    </section>
</template>

<script>
import fetchData from '../../../data/blog.json'
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
export default {
    name: 'BlogSection',
    data() {
        return {
			renderer: new THREE.WebGLRenderer({alpha: true}),
            blogposts: fetchData,
            blogpostToShow: 2,
        }
	},
	methods: {
		makeScene() {
				this.sceneMaker(
				'blog-section-canvas',
                [
					{
						modelName: 'sphere',
						position: {
							x: -185,
							y: 50,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
                    },
					{
						modelName: 'plus',
						position: {
							x: -195,
							y: 60,
							z: 20
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
                    },
					{
						modelName: 'wave',
						position: {
							x: -195,
							y: -110,
							z: 0
						},
						rotation: {
							axis: 'x',
							speed: 0.005,
						},
						color: this.colors.lightColor
                    },
					{
						modelName: 'wave',
						position: {
							x: 215,
							y: 20,
							z: 0
						},
						rotation: {
							axis: 'x',
							speed: 0.005,
						},
						color: this.colors.lightColor
                    },
                    {
						modelName: 'minus',
						position: {
							x: 175,
							y: -115,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
                    },
                ],
                {
                    height: 800
                }
            )
		}
	},
	watch: {
		pivot: function () {
			this.makeScene()
		}
	},
	mounted() {
	  if(this.pivot.length) {
		this.makeScene()
	  }
	},
	beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
	},
    mixins:[sceneMaker],
	props:['pivot', 'colors'],
}
</script>

<style>

</style>


