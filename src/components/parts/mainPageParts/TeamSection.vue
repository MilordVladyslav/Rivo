<template>
  <section class="team-content" id="team-content">
	      	<div class="team-block" id="team-block">
	      		<h2 class="large_h tc orange_bit" id="team-title">Our <span>Team</span></h2>
	      		<div class="squad_zone" id="squad_zone">
				<hooper :settings="teamSettings" ref="teamSlider">
					<slide>  
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-1.png" srcset="" alt="~@/assets/images/1@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Max</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-2.png" srcset="" alt="~@/assets/images/2@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Nik</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-3.png" srcset="" alt="~@/assets/images/6-hover@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Pamela</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-4.png" srcset="" alt="~@/assets/images/3@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Adgar</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-5.png" srcset="" alt="~@/assets/images/4@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Ben</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-5.png" srcset="" alt="~@/assets/images/4@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Ben Ben</div>
		      			</div>
					</slide>
					<slide>  
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-1.png" srcset="" alt="~@/assets/images/1@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Max</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-2.png" srcset="" alt="~@/assets/images/2@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Nik</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-3.png" srcset="" alt="~@/assets/images/6-hover@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Pamela</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-4.png" srcset="" alt="~@/assets/images/3@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Adgar</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-5.png" srcset="" alt="~@/assets/images/4@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Ben</div>
		      			</div>
					</slide>
					<slide>
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" src="~@/assets/images/member-5.png" srcset="" alt="~@/assets/images/4@2x.png 2x" />
		      				</div>
		      				<div class="member_name">Ben Ben</div>
		      			</div>
					</slide>
					<hooper-navigation slot="hooper-addons"></hooper-navigation>
				</hooper>
	      		</div>
	      	</div>
	      </section>
</template>

<script>
import animateCaller from '../../../mixins/animateCaller'
import { TweenLite } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import VueScrollTo from 'vue-scrollto'
export default {
	name: 'TeamSection',
	components: {
		Hooper,
		Slide,
		HooperNavigation
	},
	data() {
		return {
			teamSettings: {
				itemsToShow: 3,
				wheelControl: false,
				trimWhiteSpace: true,
				infiniteScroll: false,
				
				breakpoints: {
					1950: {
						itemsToShow: 6,
					},
					1600: {
						itemsToShow: 5,
					},
					1100: { 
						itemsToShow: 4,
					}
				}
			}
		}
	},
	methods: {
		slideNext () {
			this.$refs.teamSlider.slideNext()
		},
		slidePrev () {
			this.$refs.teamSlider.slidePrev()
		}
	},
	mounted () {
		//VueScrollTo.scrollTo(this.$route.params.scrollTo) 
		function manageSlider (e, slideNext, slidePrev) {
			if(e.scrollDirection === "FORWARD") {
				slideNext()
			} else slidePrev()
		}		
		let controller = new ScrollMagic.Controller();
		let squadZone = document.getElementById('squad_zone')
		let teamSectionWidth = document.getElementById('squad_zone').offsetWidth;
		let squad_members = document.getElementsByClassName('member_box')
	    let scene1 = new ScrollMagic.Scene({
	      triggerElement: "#team-content",
		  triggerHook: 0,
		  duration: teamSectionWidth,
		  reverse: true
	    })
		.setPin("#team-block")
		.addTo(controller)
		.on('progress', (e) => manageSlider(e, this.slideNext, this.slidePrev))
	},
	mixins:[animateCaller]
}



</script>

<style>

</style>