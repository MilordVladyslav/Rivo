<template>
    <section id="second-screen" class="desc-content">
        <div class="second-screen-section-container canvas-container">
            <div class="second-screen-canvas-wrapper canvas-wrapper" id="second-screen-canvas-wrapper"></div>
        </div>
        <div class="desc-block container">
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
            <div class="skew-figure case_skew"></div>
            <div class="snake-figure case_first_snake">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
            <div class="rectangle-figure case_rectangle"></div>
            <div class="brand_box">
                <div class="first_brand_box">
                    <ul class="brand_list">
                        <li>Brand strategy</li>
                        <li>User interface design</li>
                        <li>Experience design</li>
                        <li>Development</li>
                    </ul>
                    <div class="text_bit">
                        <p>A meal just isn’t complete without dessert. But instead of reaching for store-bought sweets or those unimaginative brownies from a box, get more mileage out of your grill by grilling your next dessert.</p>
                        <p>“Years ago, even the most inventive cooks treated the idea of making desserts on a grill with skepticism, but now you can’t claim to be a master griller unless you have at least a couple desserts in your repertoire,” said Jamie Purviance, author of Weber’s Real Grilling. “The truth is out about their great taste, and then there is the dramatic effect of opening the lid and surprising your guests with sizzling sweets.” Purviance recommends watching the fruit carefully and turning occasionally. To check the color and doneness, slide a thin spatula gently under the fruit and slightly lift. Your sweet tooth will never be the same.</p>
                    </div>
                </div>
                <div class="second_brand_box">
                    <div class="zone_br">
                        <div class="name_brand">Technologies</div>
                        <ul class="tech_list skill_st">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div class="zone_br">
                        <div class="name_brand">Live website</div>
                        <ul class="tech_list">
                            <li>
                                <a href="https://rivo.agency/">rivo.agency <span class="icon-combined-shape"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="img_size">
                <img
                    src="~@/assets/images/case/employeer-profile.png"
                    srcset="~@/assets/images/case/employeer-profile@2x.png 2x"
                    alt="" />
            </div>
        </div>
    </section>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'
export default {
    name: 'DescContent',
    data: function () {
        return {
			renderer: new THREE.WebGLRenderer({alpha: true}),
        }
	},
	watch: {
		pivot: function () {
			// this.pivot = this.getFigures
			this.makeScene()
		}
	},
	mounted () {
		if(this.pivot.length) {
			this.makeScene()
		}
	},
    methods: {
        makeScene() {
			this.sceneMaker(
				'second-screen-canvas',
				[
					{
						modelName: 'plus',
						position: {
							x: -182,
							y: 242,
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
							x: 0,
							y: 265,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.darkColor
					},				
					{
						modelName: 'cube',
						position: {
							x: 230,
							y: 277,
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
							y: 127,
							z: 60
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
							x: 195,
							y: 117,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.darkColor
					},
					{
						modelName: 'wave',
						position: {
							x: 185,
							y: -212,
							z: 10
						},
						rotation: {
							axis: 'z',
							speed: 0.005
						},
						color: this.colors.lightColor
					},	
					{
						modelName: 'trapezoid',
						position: {
							x: -205,
							y: -212,
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
							x: -160,
							y: 50,
							z: 10
						},
						rotation: {
							axis: 'y',
							speed: 0.005
						},
						color: this.colors.darkColor
					},	
				
				],
				{
					height: 2090
				}
			)
        }
	},
	beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
		// console.log(this.renderer)
	},
	mixins: [sceneMaker],
	props: ['pivot', 'colors']
}
</script>

<style>

</style>