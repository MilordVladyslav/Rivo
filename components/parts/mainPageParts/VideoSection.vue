<template>
    <section class="video-content" id="video-content" v-if="this.payload">
        <div class="video-wrapper" id="video-wrapper">
            <div class="video_box main_page_video" v-on:click = "switchVideoModal">
                <div class="img_size" id="img-size">
                    <img :src="pagesData.priorities_video_cover" alt="" />
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
import { TweenLite } from 'gsap'
import { mapGetters } from 'vuex'

export default {
  head: {
    script: [
      { src: 'https://cdn.plrjs.com/player/dz34kdb2325ak/305sz0pg3df8.js' },
    ],
  },
    name: "VideoSection",
    data: function () {
        return {
            modal: false,
            payload: false,
        }
    },
    watch: {
        pagesData: function () {
          this.payload = true
        }
    },
    methods: {
        switchVideoModal: function (isPlay) {
            document.querySelector('body').classList.add('hide-scroll')
            let playerVideo = new Playerjs({id:"player-video", file:this.pagesData.priorities_video_url});
  	    if(!isPlay) {
  				playerVideo.api('stop')
  				this.modal = false
  				return false
              }
              document.querySelector('#player-video').style.height = window.innerHeight + 'px'
  			this.modal = !this.modal
  			if(!this.modal) {
                  document.querySelector('body').classList.remove('hide-scroll')
                  playerVideo.api('stop')
              }
        }
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
    updated() {
        let ScrollMagic
        if (process.client) {
            ScrollMagic = require('scrollmagic')
        }
        let videoContent = document.getElementById('video-wrapper')
        let videoCont = document.getElementById('video-content')
        let opacity = 1
  	    let scene1 = new ScrollMagic.Scene({
          triggerElement: "#video-wrapper",
  		    duration: window.innerHeight + 200,
  		    reverse: true
          })
  		  .addTo(this.ScrollMagic.controller)
  		  .on('progress', function (e) {
              let scrollPosition = e.progress * 300
              TweenLite.to('.video-wrapper', 0.5,  {y: '-' + (scrollPosition)})})
        this.$emit('update-mounted-components', 'VideoSection')
    },
    beforeDestroy() {
        this.ScrollMagic.controller.enabled(false)
        this.animateCaller('', '', true)
        this.animateCaller = ''
    },
    mixins: [animateCaller],
    props: ['pagesData']
}
</script>

<style>

</style>


