<template>
	<div id="second-screen" class="desc-content">
		<div class="second-screen-section-container canvas-container">
			<div class="second-screen-canvas-wrapper canvas-wrapper" id="second-screen-canvas-wrapper"></div>
		</div>
		<div class="desc-block container" v-if="!!this.casesData">
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
						<li v-for="(ww, index) in casesData.wwd_names">
							{{ ww }}
						</li>
					</ul>
					<div class="text_bit">
						<p>{{ casesData.ACF.header_section.about_case }}</p>
					</div>
				</div>
				<div class="second_brand_box">
					<div class="zone_br">
						<div class="name_brand">Technologies</div>
						<ul class="tech_list skill_st">
							<li v-for="(tech, index) in casesData.technologies_names">
								{{ tech }}
							</li>
						</ul>
					</div>
					<div class="zone_br">
						<div class="name_brand">Live website</div>
						<ul class="tech_list">
							<li>
								<a :href="casesData.ACF.header_section.site_link">
									{{ casesData.ACF.header_section.site_link }}
									<span class="icon-combined-shape"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="img_size">
				<img :src="casesData.ACF.description_section.wireframe" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker';

export default {
	name: "DescContent",
	data: function () {
		return {
			canvasWrapper: false,
			canvasRendered: false
		}
	},
	computed: {
		secondScreenCanvas: function () {
			return new THREE.WebGLRenderer({alpha: true})
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
							axis: 'x',
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
				},
				this.secondScreenCanvas
			)
		}
	},
	watch: {
		pivot: function () {
			this.canvasWrapper = true
		}
	},
	beforeDestroy() {
		this.secondScreenCanvas.forceContextLoss()
	},
	mixins:[sceneMaker],
	props:['casesData', 'pivot', 'colors']
}
</script>

<style>

</style>