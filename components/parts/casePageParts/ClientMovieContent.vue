<template>
    <div class="client-movie-content">
        <div class="client-movie-section-container canvas-container">
            <div class="client-movie-canvas-wrapper canvas-wrapper" id="client-movie-canvas-wrapper" v-if="this.canvasWrapper"></div>
        </div>
        <div class="client-movie-block container" v-if="!!this.casesData">
            <div class="circle-plus-figure case_movie_circle_plus">
                <div class="circle-figure view_circle"></div>
                <div class="plus_bit case_second_plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="square-figure case_movie_square"></div>
            <div class="movie_zone" v-on:click="switchVideoModal">
                <div class="video_box">
                    <div class="img_size" id="img-size">
                        <img src="~@/assets/images/case/video-case.jpg" alt="" />
                    </div>
                    <span class="play_movie">
                        <span class="white_play"></span>
                        <span class="triangle_play"></span>
                    </span>
                </div>
            </div>
        </div>
        <div :class="{'video-modal': true, 'visible': this.modal}">
            <div class="close" v-on:click = "switchVideoModal">
                <span></span>
                <span></span>
            </div>
            <div id="player-client-movie"></div>
        </div>
    </div>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'
export default {
    name: 'ClientMovieContent',
    data: function () {
        return {
            modal: false,
            canvasWrapper: false,
            canvasRendered: false
        }
    },
    watch: {
        pivot: function () {
            this.canvasWrapper = true
        }
    },
    computed: {
        clientMovieCanvas: function () {
            return new THREE.WebGLRenderer({alpha: true})
        }
    },
    methods: {
        switchVideoModal: function (isPlay) {
            document.querySelector('body').classList.add('hide-scroll')

            let playerVideo = new Playerjs({id:"player-client-movie", file:this.casesData.ACF.discovery_section.video});
	        if(!isPlay) {
				playerVideo.api('stop')
				this.modal = false
				return false
            }
            document.querySelector('#player-client-movie').style.height = window.innerHeight + 'px'
			this.modal = !this.modal
			if(!this.modal) {
                document.querySelector('body').classList.remove('hide-scroll')
                playerVideo.api('stop')
            }
		},
        makeScene: function () {
		this.sceneMaker(
				'client-movie-canvas',
				[
					{
						modelName: 'plus',
						position: {
							x: -207,
							y: 52,
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
							x: -220,
							y: 40,
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
							x: -82,
							y: -100,
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
					height: 820
				},
				this.clientMovieCanvas
			)
        }
    },
	beforeDestroy() {
		this.clientMovieCanvas.forceContextLoss()
	},
    mixins: [sceneMaker],
    props: ['pivot', 'casesData', 'colors' ]
}
</script>

<style>
</style>