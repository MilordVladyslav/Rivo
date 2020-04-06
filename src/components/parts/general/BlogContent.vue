<template>
    <section id="blog" class="blog-content">
        <div class="blog-section-container canvas-container" id="blog-section-container">
            <div class="blog-section-canvas-wrapper canvas-wrapper" id="blog-section-canvas-wrapper"></div>
        </div> 
        <div class="snake-figure blog_snake_2">
            <img src="~@/assets/svg-icon/snake.svg" alt="" />
        </div>
        <div class="container blog-block">
            <div class="snake-figure blog_snake_3">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
            <div class="rectangle-figure blog_rectangle"></div>
            <div class="plus_bit blog_first_plus">
                <span></span>
                <span></span>
            </div>
            <div class="circle-plus-figure third_desc_circle_plus">
                <div class="circle-figure view_circle"></div>
                <div class="plus_bit case_second_plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="snake-figure blog_snake">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
            <h2 class="large_h tc">Blog</h2>
            <ul class="blog_list">
                <li v-if="blogpost < blogposts.length" class="project-item" v-for="(blogpost, index) in blogpostToShow" :key="blogpost.id">
                    <router-link :to="{ name: 'blogpost', params: { id: index, pivotCase: pivot }, query: {id: blogposts.id } }">
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
export default {
    name: "BlogContent",
	data() {
		return {
			blogposts: fetchData,
			blogpostToShow: 2,
		}
    },
    props: ['pivot', 'colors']
}
</script>

<style>

</style>