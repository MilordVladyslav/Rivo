<template>
	<div class="feedback-content" id="feedback-content">
		<div class="container-large">
			<div class="feedback-block" id="feedback-block">
				<h2 class="large_h tc" v-if="this.payload">
					{{ pagesData.feedback_heading }}
				</h2>
				<div class="slide_feed" id="slide-feed">
					<hooper :settings="feedSettings" :infiniteScroll="false" ref="feedbackSlider" :trimWhiteSpace="true" :wheelControl="false" v-if="this.feedDataBind">
						<slide v-for="(slide, index) in feedbackData" :key="index">
							<div class="single_fb" v-on:click="switchVideoModal(slide.ACF.video_url)" >
								<div class="movie_bit">
									<img :src="slide.fimg_url" alt="" />
									<span class="play_movie">
										<span class="white_play"></span>
										<span class="triangle_play"></span>
									</span>
								</div>
								<p class="name_client">{{ slide.title.rendered }}</p>
								<p class="large_p">{{ slide.ACF.video_text }}</p>
								<div class="client_contact">
									<a :href="slide.ACF.link" class="site_client">
										{{ slide.ACF.position }}
									</a>
								</div>
							</div>
						</slide>
						<hooper-navigation slot="hooper-addons"></hooper-navigation>
					</hooper>
				</div>
			</div>
		</div>
		<div :class="{'video-modal': true, 'visible': this.modal}">
			<div class="close" v-on:click = "switchVideoModal">
				<span></span>
				<span></span>
			</div>
			<div id="player-feedback"></div>
		</div>
    </div>
</template>

<script>
import { TweenLite } from 'gsap'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
export default {
	name: 'FeedbackSection',
	components: {
		Hooper,
		Slide,
		HooperNavigation,
	},
	data: function () {
		return {
			modal: false,
			payload: false,
			feedDataBind: false,
			currentVideo: '',
			renderedInfo: false,
			feedSettings: {
				itemsToShow: 1,
				infiniteScroll: true,
				wheelControl: false,
				trimWhiteSpace: false,
				breakpoints: {
					1200: {
		            	itemsToShow: 3,
		          	},
		          	992: {
		          		wheelControl: false,
		          		itemsToShow: 2,
		          		centerMode: false,
		          	},
		          	768: {
		            	itemsToShow: 2,
		            	centerMode: false,
		          	},
				}
			}
		}
	},
	watch: {
		pagesData: function () {
			this.payload = true
		},
		feedbackData: function () {
			this.feedDataBind = true
		},
	},
	computed: {
		wheelSwitch: function() {
			return false
		},
		ScrollMagic: function () {
            let ScrollMagic
            if (process.client) {
                ScrollMagic = require('scrollmagic')
            }
            return {
                controller:  new ScrollMagic.Controller()
            }
        }
	},
	methods: {
		slideNext () {
			this.$refs.feedbackSlider.slideNext()
		},
		slidePrev () {
			this.$refs.feedbackSlider.slidePrev()
		},
        switchVideoModal: function (videoLink) {
			if(typeof videoLink === 'string') {
				this.currentVideo = videoLink
			}
            document.querySelector('body').classList.add('hide-scroll')

			let playerVideo = new Playerjs({id:"player-feedback", file:this.currentVideo});
            document.querySelector('#player-feedback').style.height = window.innerHeight + 'px'
			this.modal = !this.modal
			if(!this.modal) {
				playerVideo.api('stop')
                document.querySelector('body').classList.remove('hide-scroll')
                
            }
        }
	},
	mounted () {
		let ScrollMagic
	    if (process.client) {
	      ScrollMagic = require('scrollmagic')
	    }
		function manageSlider (e, slideNext, slidePrev) {
			if(e.scrollDirection === "FORWARD") {
				slideNext()
			} else slidePrev()
		}
		function manageVideoPlaying (switchFeedbackModal) {
			switchFeedbackModal(false) 
		}
		let singleFeedWidth = document.getElementById('slide-feed').offsetWidth
		let singleFb = document.getElementsByClassName('single_fb')
		let changeMod = -1
	    let scene1 = new ScrollMagic.Scene({
	      triggerElement: "#feedback-content",
		  triggerHook: 0,
		  duration: singleFeedWidth,
		  reverse: true
	    })
		.setPin("#feedback-block")
		.addTo(this.ScrollMagic.controller)
		.on('progress', (e) => {
			if(e.scrollDirection === 'FORWARD' && Math.floor(e.progress * 10) > changeMod) {
				changeMod = Math.floor(e.progress * 10)
				manageSlider(e, this.slideNext, this.slidePrev)	
			} else if (e.scrollDirection === 'REVERSE' && Math.floor(e.progress * 10) < changeMod) {
				changeMod = Math.floor(e.progress * 10)
				manageSlider(e, this.slideNext, this.slidePrev)	
			}
		})
	},
	updated() {
		if(!!this.feedbackData && !!this.pagesData && !this.renderedInfo) {
			this.$emit('update-mounted-components', 'FeedbackSection')
			this.renderedInfo = true
		}
	},
	beforeDestroy() {
		this.ScrollMagic.controller.enabled(false)
	},
	props: ['pagesData', 'feedbackData'],
}
</script>


<style>
</style>