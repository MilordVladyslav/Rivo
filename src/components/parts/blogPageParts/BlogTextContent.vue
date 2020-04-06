<template>
    <section id="second-screen" class="blogtext-content">
        <div class="blogtext-container canvas-container">
			<div class="blogtext-canvas-wrapper canvas-wrapper" id="blogtext-canvas-wrapper"></div>
		</div>
        <div class="blogtext-block container">
            <div class="square-figure case_desc_square"></div>
            <div class="triangle-figure case_desc_triangle"></div>
            <div class="circle-figure case_desc_circle"></div>
            <div class="circle-plus-figure case_desc_circle_plus">
                <div class="circle-figure view_circle"></div>
                <div class="plus_bit case_second_plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="plus_bit case_first_plus">
                <span></span>
                <span></span>
            </div>
            <div class="plus_bit blog_second_plus">
                <span></span>
                <span></span>
            </div>
            <div class="skew-figure case_skew"></div>
            <div class="snake-figure case_first_snake">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
            <div class="snake-figure case_second_snake">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
            <div class="rectangle-figure case_rectangle"></div>
            <div class="triangle-figure blog_second_triangle"></div>
            <div class="circle-plus-figure blog_desc_circle_plus">
                <div class="circle-figure view_circle"></div>
                <div class="plus_bit case_second_plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="square-figure blog_desc_square"></div>
            <div class="content_blogpost">
                <h5>E-commerce applications become more and more popular. People prefer to use e-commerce applications for buying products online. It is fast and sometimes cheaper. Understanding of trends will be your advantage over competitors. The trends will also help you offer efficient solutions.</h5>
                <div class="blg_bit">
                    <div class="txt_space">
                        <h4></h4>
                        <div>
                            <p>Here are some trends of e-commerce</p>
                        </div>
                    </div>
                </div>
                <div class="blg_bit">
                    <div class="txt_space">
                        <h4>Mobile application</h4>
                        <div>
                            <p>The amount of people who use mobile devices increases. People use them quite often to access online shops. Consequently, it is necessary to offer solutions, which are perfect for mobile devices users. Experts state that mobile traffic will increase 8 times by 2020.</p>								
                        </div>
                    </div>
                </div>
                <div class="blg_bit">
                    <div class="txt_space">
                        <h4>Product personalization</h4>
                        <div>
                            <p>Some clients want something unique. A successful solution is to offer clients many options. Some shops let clients “customize” clothing, for example, change sleeves colors.</p>
                            <p>The website lenskart went further. They released an application where you can put on glasses and see how you will look in real-time. The application became very popular. Clients could not touch a product, but at least they could see how they would look. The augmented reality technology is able to help you create a successful e-commerce application.</p>
                        </div>
                    </div>
                </div>
                <div class="blg_bit">
                    <img src="~@/assets/images/blog/product-blog.png" alt="" />
                    <div class="txt_space">
                        <h4>Product searching</h4>
                        <div>
                            <p>Analysis of clients’ data can be extremely useful. Analyzing data of visited pages, you can understand what a person was looking for. Therefore, an online shop can offer a product that a person needs. The data can be used for email marketing.</p>
                        </div>
                    </div>
                </div>
                <div class="blg_bit">
                    <img src="~@/assets/images/blog/bots-blog.png" alt="" />
                    <div class="txt_space">
                        <h4>Bots</h4>
                        <div>
                            <p>Bots are used for executing simple tasks, like answering questions. A bot can help a person to find the necessary product or model by analyzing client’s desires. There are “smart” bots as well. For example, eBay uses a bot that is able to recognize human speech and offer necessary products.</p>
                        </div>
                    </div>
                </div>
                <div class="blg_bit">
                    <img src="~@/assets/images/blog/delivery-blog.png" alt="" />
                    <div class="txt_space">
                        <h4>Delivery</h4>
                        <div>
                            <p>Bots are used for executing simple tasks, like answering questions. A bot can help a person to find the necessary product or model by analyzing client’s desires. There are “smart” bots as well. For example, eBay uses a bot that is able to recognize human speech and offer necessary products.</p>
                        </div>
                    </div>
                </div>
                <div class="blg_bit">
                    <div class="txt_space">
                        <h4>One network for all shops</h4>
                        <div>
                            <p>Many users would like to have one shop where they could find anything they need. The approach is very attractive, but it requires cooperation of many shops</p>
                        </div>
                    </div>
                </div>
                <div class="blg_bit">
                    <img src="~@/assets/images/blog/video-blog.png" alt="" />
                    <div class="txt_space">
                        <h4>Video review</h4>
                        <div>
                            <p>E-commerce applications exclude the possibility of “touching” the product. It is possible to use video reviews to solve the problem. A detailed video review can help client decide. It is necessary to mention that a video review increases the chances of buying.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'
export default {
    name: "BlogTextContent",
    data: function () {
        return {
            renderer: new THREE.WebGLRenderer({alpha:true})
        }
       
    },
    watch: {
        pivot: function () {
            this.makeScene()
        }
	},
	mounted () {
		if(this.pivot.length) {
			this.makeScene()
		}
	},
	beforeDestroy () {
		this.renderer.forceContextLoss()
	},
    methods: {
        makeScene() {
		  		this.sceneMaker(
				'blogtext-canvas',
				[
					{
						modelName: 'plus',
						position: {
							x: -182,
							y: 607,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'sphere',
						position: {
							x: 190,
							y: 490,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.darkColor
                    },
					{
						modelName: 'sphere',
						position: {
							x: 0,
							y: 630,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.darkColor
                    },
					{
						modelName: 'pyramid',
						position: {
							x: 180,
							y: -250,
							z: 10
						},
						rotation: {
							axis: 'y',
							speed: 0.005
						},
						color: this.colors.darkColor
                    },
					{
						modelName: 'pyramid',
						position: {
							x: -160,
							y: 410,
							z: 10
						},
						rotation: {
							axis: 'y',
							speed: 0.005
						},
						color: this.colors.darkColor
					},		
					{
						modelName: 'wave',
						position: {
							x: 190,
							y: 165,
							z: -30
						},
						rotation: {
							axis: 'x',
							speed: 0.005
						},
						color: this.colors.lightColor
					},
					{
						modelName: 'cube',
						position: {
							x: 230,
							y: 640,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
							direction: 'forward'
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'trapezoid',
						position: {
							x: -200,
							y: 200,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.003
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'minus',
						position: {
							x: 220,
							y: 319,
							z: 10
						},
						rotation: {
							axis: 'x',
							speed: 0.05,
							direction: "reverse"
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'plus',
						position: {
							x: 200,
							y: 500,
							z: 50
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
							x: -170,
							y: -135,
							z: -30
						},
						rotation: {
							axis: 'x',
							speed: 0.005
						},
						color: this.colors.lightColor
                    },
					{
						modelName: 'plus',
						position: {
							x: -212,
							y: -440,
							z: 50
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
                    },
					{
						modelName: 'sphere',
						position: {
							x: -223,
							y: -450,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
                    },
					{
						modelName: 'cube',
						position: {
							x: -90,
							y: -587,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
							direction: 'forward'
						},
						color: this.colors.darkColor
                    },
					{
						modelName: 'plus',
						position: {
							x: 205,
							y: -660,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
							direction: 'forward'
						},
						color: this.colors.lightColor
					},
				],
				{
					height: 4565
				}
			)
        }
    },
    mixins: [sceneMaker],
    props: ['pivot', 'colors']
}
</script>

<style>

</style>