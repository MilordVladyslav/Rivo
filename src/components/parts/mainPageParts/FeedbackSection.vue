<template>
	<section class="feedback-content" id="feedback-content">
		<div class="container-large">
			<div class="feedback-block" id="feedback-block">
				<h2 class="large_h tc">Feedback</h2>
				<div class="slide_feed" id="slide-feed">
					<hooper :settings="feedSettings" :infiniteScroll="false" ref="feedbackSlider" :trimWhiteSpace="true" :wheelControl="false">
						<slide>
							<div class="single_fb" v-on:click="switchVideoModal" >
								<div class="movie_bit">
									<img src="~@/assets/images/video-2.png" alt="" />
									<span class="play_movie">
										<span class="white_play"></span>
										<span class="triangle_play"></span>
									</span>
								</div>
								<p class="name_client">Alex Tsykaliuk</p>
								<p class="large_p">Flexibility, responsiveness, and quality are the hallmarks of Development Company</p>
								<div class="client_contact">
									<a href="http://meltdowngame.com" class="site_client">Slavic Full Gospel Church</a>
								</div>
							</div>
						</slide>
						<slide>
							<div class="single_fb" v-on:click="switchVideoModal" >
								<div class="movie_bit">
									<img src="~@/assets/images/video-2.png" alt="" />
									<span class="play_movie">
										<span class="white_play"></span>
										<span class="triangle_play"></span>
									</span>
								</div>
								<p class="name_client">Alex Tsykaliuk</p>
								<p class="large_p">Flexibility, responsiveness, and quality are the hallmarks of Development Company</p>
								<div class="client_contact">
									<a href="http://meltdowngame.com" class="site_client">Slavic Full Gospel Church</a>
								</div>
							</div>
						</slide>
						<slide>
							<div class="single_fb" v-on:click="switchVideoModal" >
								<div class="movie_bit">
									<img src="~@/assets/images/video-2.png" alt="" />
									<span class="play_movie">
										<span class="white_play"></span>
										<span class="triangle_play"></span>
									</span>
								</div>
								<p class="name_client">Alex Tsykaliuk</p>
								<p class="large_p">Flexibility, responsiveness, and quality are the hallmarks of Development Company</p>
								<div class="client_contact">
									<a href="http://meltdowngame.com" class="site_client">Slavic Full Gospel Church</a>
								</div>
							</div>
						</slide>
						<slide>
							<div class="single_fb" v-on:click="switchVideoModal" >
								<div class="movie_bit">
									<img src="~@/assets/images/video-2.png" alt="" />
									<span class="play_movie">
										<span class="white_play"></span>
										<span class="triangle_play"></span>
									</span>
								</div>
								<p class="name_client">Alex Tsykaliuk</p>
								<p class="large_p">Flexibility, responsiveness, and quality are the hallmarks of Development Company</p>
								<div class="client_contact">
									<a href="http://meltdowngame.com" class="site_client">Slavic Full Gospel Church</a>
								</div>
							</div>
						</slide>
						<slide>
							<div class="single_fb" v-on:click="switchVideoModal" >
								<div class="movie_bit">
									<img src="~@/assets/images/video-2.png" alt="" />
									<span class="play_movie">
										<span class="white_play"></span>
										<span class="triangle_play"></span>
									</span>
								</div>
								<p class="name_client">Alex Tsykaliuk</p>
								<p class="large_p">Flexibility, responsiveness, and quality are the hallmarks of Development Company</p>
								<div class="client_contact">
									<a href="http://meltdowngame.com" class="site_client">Slavic Full Gospel Church</a>
								</div>
							</div>
						</slide>
						<slide>
							<div class="single_fb" v-on:click="switchVideoModal" >
								<div class="movie_bit">
									<img src="~@/assets/images/video-2.png" alt="" />
									<span class="play_movie">
										<span class="white_play"></span>
										<span class="triangle_play"></span>
									</span>
								</div>
								<p class="name_client">Alex Tsykaliuk</p>
								<p class="large_p">Flexibility, responsiveness, and quality are the hallmarks of Development Company</p>
								<div class="client_contact">
									<a href="http://meltdowngame.com" class="site_client">Slavic Full Gospel Church</a>
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
    </section>
</template>

<script>
import { TweenLite } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
// import '../../assets/playerjs'
// let player = new Playerjs({id:"player", file:"https://rivo.agency/wp-content/uploads/2018/05/Video-May-08-11-12-10-PM.webm"});
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
			feedSettings: {
				itemsToShow: 1,
				centerMode: true,
				wheelControl: false,
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
	computed: {
		wheelSwitch: function() {
			return false
		}
	},
	methods: {
		slideNext () {
			this.$refs.feedbackSlider.slideNext()
		},
		slidePrev () {
			this.$refs.feedbackSlider.slidePrev()
		},
        switchVideoModal: function (isPlay) {

            document.querySelector('body').classList.add('hide-scroll')

            let playerVideo = new Playerjs({id:"player-feedback", file:"https://rivo.agency/wp-content/uploads/2018/05/Video-May-08-11-12-10-PM.webm"});
	        if(!isPlay) {
				playerVideo.api('stop')
				this.modal = false
				return false
            }
            document.querySelector('#player-feedback').style.height = window.innerHeight + 'px'
            // console.log(document.querySelector('#player-video').style.height)
			this.modal = !this.modal
			if(!this.modal) {
                document.querySelector('body').classList.remove('hide-scroll')
                playerVideo.api('stop')
            }
        }
	},
	mounted () {
		// this.switchFeedbackModal(true) 
		function manageSlider (e, slideNext, slidePrev) {
			if(e.scrollDirection === "FORWARD") {
				slideNext()
			} else slidePrev()
		}
		function manageVideoPlaying (switchFeedbackModal) {
			switchFeedbackModal(false) 
		}
		let controller = new ScrollMagic.Controller();
		let singleFeedWidth = document.getElementById('slide-feed').offsetWidth
		let singleFb = document.getElementsByClassName('single_fb')
	    let scene1 = new ScrollMagic.Scene({
	      triggerElement: "#feedback-content",
		  triggerHook: 0,
		  duration: singleFeedWidth,
		  reverse: true
	    })
		.setPin("#feedback-block")
		.addTo(controller)
		.on('progress', (e) => manageSlider(e, this.slideNext, this.slidePrev))
		// .on("leave", (e) => manageVideoPlaying(this.switchFeedbackModal))
	}
}
</script>

<style>

</style>