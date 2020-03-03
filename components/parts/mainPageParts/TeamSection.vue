<template>
  	<div class="team-content" id="team-content">
	    <div class="team-block" id="team-block">
	      	<h2 class="large_h tc orange_bit" id="team-title" v-if="this.pagesDataBind" v-html="pagesData.team_heading"></h2>
	      	<div class="squad_zone" id="squad_zone">
				<hooper :settings="teamSettings" ref="teamSlider" v-if="this.teamDataBind">
					<slide v-for="(member, index) in teamData" :key="index">  
		      			<div class="member_box">
		      				<div class="img_size">
		      					<img class="grayscale" :src="member.fimg_url" alt="" />
		      				</div>
		      				<div class="member_name">{{ member.title.rendered }}</div>
		      			</div>
					</slide>
					<hooper-navigation slot="hooper-addons"></hooper-navigation>
				</hooper>
	      	</div>
	    </div>
	</div>
</template>

<script>
import animateCaller from '../../../mixins/animateCaller'
import { TweenLite } from 'gsap'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import VueScrollTo from 'vue-scrollto'

export default {
	name: 'TeamSection',
	components: {
		Hooper,
		Slide,
		HooperNavigation,
	},
	data() {
		return {
		    pagesDataBind: false,
			teamDataBind: false,
			switchSection: false,
			teamSettings: {
				itemsToShow: 3,
				wheelControl: false,
				trimWhiteSpace: true,
				infiniteScroll: true,
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
		},
	},
	watch: {
		pagesData: function () {
			this.pagesDataBind = true
		},
		teamData: function () {
			this.$emit('update-mounted-components', 'TeamSection')
			this.teamDataBind = true
			
		},
	},
	computed: {
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
		let squadZone = document.getElementById('squad_zone')
		let teamSectionWidth = document.getElementById('squad_zone').offsetWidth;
		let squad_members = document.getElementsByClassName('member_box')
		let changeMod = -1
	    let scene1 = new ScrollMagic.Scene({
	      triggerElement: "#team-content",
		  triggerHook: 0,
		  duration: teamSectionWidth,
		  reverse: true
	    })
		.setPin("#team-block")
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
	beforeDestroy() {
		this.ScrollMagic.controller.enabled(false)
		this.animateCaller('', '', true)
		this.animateCaller = ''
	},
	mixins:[animateCaller],
	props: ['pagesData', 'teamData']
}



</script>

<style>

</style>