<template>
    <section class="video-content" id="video-content">
        <div class="video-wrapper" id="video-wrapper">
            <div class="video_box main_page_video" v-on:click = "switchVideoModal">
                <div class="img_size" id="img-size">
                    <img src="~@/assets/images/video.jpg" srcset="~@/assets/images/video@2x.jpg 2x" alt="" />
                </div>
                <span class="play_movie">
                    <span class="white_play"></span>
                    <span class="triangle_play"></span>
                </span>
            </div>
        </div>
        <div :class="{'video-modal': true, 'visible': this.modal}">
            <div class="close" v-on:click = "switchVideoModal">
                <span></span>
                <span></span>
            </div>
            <div id="player-video"></div>
        </div>
    </section>
</template>

<script>
import animateCaller from '../../../mixins/animateCaller'
import ScrollMagic from 'scrollmagic'
import sceneMaker from '../../../mixins/sceneMaker'
import { TweenLite } from 'gsap'
export default {
    name: "VideoSection",
    data: function () {
        return {
            renderer: new THREE.WebGLRenderer({alpha: true}),
            modal:false,
            scene1: {}
        }
    },
    methods: {
        switchVideoModal: function (isPlay) {

            document.querySelector('body').classList.add('hide-scroll')

            let playerVideo = new Playerjs({id:"player-video", file:"https://rivo.agency/wp-content/uploads/2018/05/Video-May-08-11-12-10-PM.webm"});
	        if(!isPlay) {
				playerVideo.api('stop')
				this.modal = false
				return false
            }
            document.querySelector('#player-video').style.height = window.innerHeight + 'px'
            console.log(document.querySelector('#player-video').style.height)
			this.modal = !this.modal
			if(!this.modal) {
                document.querySelector('body').classList.remove('hide-scroll')
                playerVideo.api('stop')
            }
        }
    },
    mounted() {

        // function noScroll() {
        // window.scrollTo(0, 0);
        // }

        // // add listener to disable scroll
        // window.addEventListener('scroll', noScroll);

            let controller = new ScrollMagic.Controller();
            let list_info = document.getElementById('list_info')
            let videoContent = document.getElementById('video-wrapper')[0]
            let imgSize = document.getElementById('img-size')
            let videoCont = document.getElementById('video-content')
            let opacity = 1
            let value = document.getElementsByClassName('video-wrapper')[0].style.marginTop
            // function manageVideoPlaying (switchVideoModal) {
            //     switchVideoModal(false) 
            // }
            this.scene1 = new ScrollMagic.Scene({
            triggerElement: "#list_info",
                triggerHook: 0,
                duration: window.innerHeight + 200,
                reverse: true
            })
            .addTo(controller)
            .on('progress', function (e) {
                let scrollPosition = e.progress * 300
                // console.log(scrollPosition)
                TweenLite.to('.video-wrapper', 0.5,  {y: '-' + (scrollPosition)})})

        //   .on("leave", (e) => manageVideoPlaying(this.switchVideoModal))
    },
	beforeDestroy() {
        this.renderer.forceContextLoss()
        this.scene1 = {}
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
	},	
    mixins: [animateCaller, sceneMaker],
    props: ['pivot']
}
</script>

<style>

</style>