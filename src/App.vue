<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app">
    <router-view></router-view>
    <div class="cursor"></div>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar';
import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
export default {
  name: 'App',
  created() {
    this.$store.dispatch('receive3Dmodels')
  },
  mounted () {
    let exactly
    function scrollMe() {
      let needed = window.pageYOffset
      exactly = window.pageYOffset
      // if(needed + 1)
      window.scrollTo(0, needed + 1)
      // console.count('call:')
      console.log(exactly)
      return false
    }

    // scrollMe()

    // window.addEventListener('scroll', scrollMe)




    let currentHour = new Date().getHours()
    document.querySelector('body').style.height =  `${0}px`
    let body = document.querySelector('body')
    console.log(body)
    // document.querySelector('body').style.width =  `${2000}px`
    if(currentHour >= 18) document.querySelector('body').classList.add('white-theme')
    // console.log(document.body.offsetHeight)
    // TweenLite.set(body, {
    //   y: -window.pageYOffset
    // });

    

    // var html = document.documentElement;
    // var body = document.body;

    // var scroller = {
    //   target: document.querySelector("#app"),
    //   ease: 0.05, // <= scroll speed
    //   endY: 0,
    //   y: 0,
    //   resizeRequest: 1,
    //   scrollRequest: 0,
    // };

    // var requestId = null;

    // TweenLite.set(scroller.target, {
    //   rotation: 0.01,
    //   force3D: true
    // });

    // window.addEventListener("load", onLoad);

    // function onLoad() {    
    //   updateScroller();  
    //   window.focus();
    //   window.addEventListener("resize", onResize);
    //   document.addEventListener("scroll", onScroll); 
    // }

    // function updateScroller() {
      
    //   var resized = scroller.resizeRequest > 0;
        
    //   if (resized) {    
    //     var height = scroller.target.clientHeight;
    //     body.style.height = height + "px";
    //     scroller.resizeRequest = 0;
    //   }
          
    //   var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    //   scroller.endY = scrollY;
    //   scroller.y += (scrollY - scroller.y) * scroller.ease;
    //   console.log(scroller.ease)
    //   // window.scrollTo(0, scroller.y += (scrollY - scroller.y) * scroller.eas)
    //   if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    //     scroller.y = scrollY;
    //     scroller.scrollRequest = 0;
    //   }
      
    //   TweenLite.set(scroller.target, { 
    //     y: -scroller.y 
    //   });
      
    //   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    // }

    // function onScroll() {
    //   scroller.scrollRequest++;
    //   if (!requestId) {
    //     requestId = requestAnimationFrame(updateScroller);
    //   }
    // }

    // function onResize() {
    //   scroller.resizeRequest++;
    //   if (!requestId) {
    //     requestId = requestAnimationFrame(updateScroller);
    //   }
    // }




  }
};
</script>
