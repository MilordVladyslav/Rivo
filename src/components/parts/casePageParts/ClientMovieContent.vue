<template>
    <section class="client-movie-content">
        <div class="client-movie-section-container canvas-container">
            <div class="client-movie-canvas-wrapper canvas-wrapper" id="client-movie-canvas-wrapper"></div>
        </div>
        <div class="client-movie-block container">
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
                        <img src="~@/assets/images/case/video-case.png" srcset="~@/assets/images/case/video-case@2x.png 2x" alt="" />
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
    </section>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'

export default {
    name: 'ClientMovieContent',
    data: function () {
        return {
            modal: false,
            renderer: new THREE.WebGLRenderer({alpha: true})
        }
    },
    watch: {
        pivot: function () {
            console.log(this.pivot)
            this.makeScene()
        }
    },
    methods: {
        switchVideoModal: function (isPlay) {
            document.querySelector('body').classList.add('hide-scroll')

            let playerVideo = new Playerjs({id:"player-client-movie", file:"https://rivo.agency/wp-content/uploads/2018/05/Video-May-08-11-12-10-PM.webm"});
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
    mixins: [sceneMaker],
    props: ['pivot', 'colors' ]

}
</script>

<style>

</style>