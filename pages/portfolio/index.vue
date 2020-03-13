<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap&subset=cyrillic')
  @import "./assets/style/main.sass"
  @import "./assets/style/media.sass"
</style>
<template>
  <div>
    <Header></Header>
    <div class="content">
      <div class="container-portfolio">
        <section class="title-screen">
          <div class="title-wrapper">
            <p class="background-title">Haul Cars</p>
            <p class="front-title">Haul Cars</p>
            <img src="@/assets/images/cartrailer.png" alt="cartrailer">
          </div>
        </section>
        <section class="description">
          <div class="container">
            <div class="description-content">
              <div class="description-text">
                <p class="text"><span> Safe & Reliable </span> nationwide Auto transport</p>
              </div>
              <div class="images">
                <div class="left">
                  <img src="../../assets/images/car1.png" alt="car1">
                </div>
                <div class="right">
                  <div>
                    <img src="../../assets/images/car2.png" alt="car2">
                  </div>
                  <div>
                    <img src="../../assets/images/car3.png" alt="car3">
                  </div>
                </div>
              </div>
            </div>
            <div class="description-planning">
              <div class="planning-list">
                <li>Brand strategy</li>
                <li>Development</li>
                <li>Experience design</li>
                <li>User interface design</li>
              </div>
              <div>
                <p class="story">
                  A meal just isn’t complete without dessert. 
                  But instead of reaching for store-bought sweets or those unimaginative brownies from a box, 
                  get more mileage out of your grill by grilling your next dessert. 
                  “Years ago, even the most inventive cooks treated the idea of making desserts on a grill with skepticism, 
                  but now you can’t claim to be a master griller unless you have at least a couple desserts in your repertoire,”
                  said Jamie Purviance, author of Weber’s Real Grilling. “The truth is out about their great taste, and then there 
                  is the dramatic effect of opening the lid and surprising your guests with sizzling sweets.” Purviance recommends
                  watching the fruit carefully and turning occasionally. To check the color and doneness, slide a thin spatula 
                  gently under the fruit and slightly lift. Your sweet tooth will never be the same.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="discovery-planning">
          <div class="container">
            <div class="discovery-planning-content">
              <div class="text">
                <p>Discovery <br/>  <span> & planning </span> </p>
              </div>
              <div>
                <img src="@/assets/images/map.png" alt="map">
              </div>
            </div>
            
            <div class="description-wrapper">
              <p class="description">
                A meal just isn’t complete without dessert. 
                But instead of reaching for store-bought sweets or those unimaginative brownies from a box, 
                get more mileage out of your grill by grilling your next dessert. “Years ago, even the most 
                inventive cooks treated the idea of making desserts on a grill with skepticism, but now you can’t 
                claim to be a master griller unless you have at least a couple desserts in your repertoire
              </p>
            </div>
          </div>
        </section>
        <section class="technologies">
          <div class="container">
            <p class="title">Technologies</p>
            <div class="technologies-list">
              <div class="technology">
                <div>
                  <div class="img-wrapper">
                    <img src="@/assets/images/laravel.png" alt="laravel">
                  </div>
                  <p>Laravel</p>
                </div>
              </div>
              <div class="technology">
                <div>
                  <div class="img-wrapper">
                    <img src="@/assets/images/php.png" alt="php">
                  </div>
                  <p>PHP</p>
                </div>
              </div>
              <div class="technology">
                <div>
                  <div class="img-wrapper">
                    <img src="@/assets/images/bootstrap.png" alt="bootstrap">
                  </div>
                  <p>Bootstrap</p>
                </div>
              </div>
              <div class="technology">
                <div>
                  <div class="img-wrapper">
                    <img src="@/assets/images/jquery.png" alt="jquery">
                  </div>
                  <p>jQuery</p>
                </div>
              </div>
              <div class="technology">
                <div>
                  <div class="img-wrapper">
                    <img src="@/assets/images/select2.png" alt="select2">
                  </div>
                  <p>Select2</p>
                </div>
              </div>
              <div class="technology">
                <div>
                  <div class="img-wrapper">
                    <img src="@/assets/images/googlemaps.png" alt="googlemaps">
                  </div>
                  <p>Google Maps</p>
                </div>
              </div>
            </div>
            <div class="project-screen">
              <div>
                <img src="@/assets/images/livesite.png" alt="livesite"/>
              </div>
              <div class="project-link">
                <button class="common_btn">
                    <a href="#">
                      haulcars.com
                    </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="feedback">
          <div class="container">
            <p>Feedback</p>
            <div class="feedback-video-wrapper">
              <img src="@/assets/images/video.png" alt="video">
            </div>
          </div>
        </section>
        <section class="total">
          <p>Total</p>
          <div class="statistics">
            <div class="statistic-item">
              <div class="hightlight">
                <p>23k</p>
                <p>written lines of code</p>
              </div>
              
            </div>
          </div>
        </section>
      </div>
      <!-- <img src="@/assets/images/cartrailer.png" alt="cartrailer"> -->
    </div>
    <ContactsSection />
  </div>
</template>

<script>
import Header from "@/components/parts/general/Header"
import ContactsSection from "@/components/parts/general/ContactsSection"
export default {
  components: {
    Header,
    ContactsSection
  }
}
</script>

<style lang="sass" scoped>
  .feedback
    padding-top: 187px
    font-size: 80px
    font-weight: bold
  .feedback-video-wrapper
    margin-top: 92px
    display: flex
    justify-content: center
  .technologies
    padding-top: 240px
    .project-screen
      margin-top: 80px
      .project-link
        margin-top: 30px
        display: flex
        justify-content: center
      .common_btn
        background: transparent
        font-size: 16px
        padding: 20px 32px
        font-family: 'NeutraTextTF-Demi'
        margin-top: 32px
        color: white
        position: relative
        overflow: hidden
        font-size: 20px
        &:after
            content: ''
            position: absolute
            display: block
            width: 100%
            height: 100%
            left: 0
            top: 0
            background: #1f1f1f
            z-index: -1
            transform: translateX(calc(62px - 100%))
            transition: .3s linear all
        &:hover 
            &:after
                transform: translateX(calc(0%))
                transition: .3s linear all
      a
        color: #ffd63c
    .technologies-list
      display: flex
      flex-wrap: wrap
    .technology
      width: 210px
      height: 180px
      background: #1E1E1E
      margin: 12px
      display: flex
      justify-content: center
      align-items: center
      .img-wrapper
        display: flex
        justify-content: center
      div
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-between
        height: 100px
        img
          display: block
        p
          margin-top: 10px
      
    .title
      font-size: 80px
      margin-left: 12px
      font-weight: bold
      margin-bottom: 80px

  .discovery-planning
    .description-wrapper
      display: flex
      justify-content: center
      padding: 150px 0 50px 0
    .description
      max-width: 925px
      line-height: 1.8

  .discovery-planning-content
    display: flex
    align-items: center
    justify-content: space-between

    p
      font-size: 80px
      font-weight: bold
      span
        color: #181818
        text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF

  .description-planning
    padding-top: 150px
    padding-bottom: 160px
    display: flex
    justify-content: space-evenly
    .planning-list
      line-height: 4
      li 
        list-style: none
        color: #FFD63C
        font-weight: bold
        &::before
          content: ''
          display: inline-block
          width: 10px
          height: 10px
          border: 2px solid #FFD63C
          border-radius: 50%
          position: relative
          left: -25px


    .story 
      max-width: 570px
      line-height: 180%
  .description-content
    span
      color: #ffd63c
    display: flex
    .description-text
      display: flex
      align-items: center
      padding-left: 110px
      padding-bottom: 20px
    .text
      font-size: 60px
      line-height: 70px
      font-weight: 900
    .images
      display: flex
      .left
        margin-top: 60px
        margin-right: 30px
      .right
        div:first-child
          margin-bottom: 30px

  .container-portfolio 
    font-family: "Roboto", sans-serif
  .title-screen
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
  .title-wrapper
    display: flex
    justify-content: center
    align-items: center
    position: relative
    width: 100%
  .background-title
    position: absolute
    font-weight: bold
    font-size: calc(16vw) 
    white-space: pre
    z-index: -1
    color: #181818
    text-shadow: -1px -1px 0 #3B3B3B, 1px -1px 0 #3B3B3B, -1px 1px 0 #3B3B3B, 1px 1px 0 #3B3B3B
  .front-title
    margin-top: 75px
    position: absolute
    font-size: 18rem
    font-weight: bold
  .content
    height: 8300px
    &::before
      content: ""
      background: linear-gradient(180deg, #1E1E1E 0%, rgba(30, 30, 30, 0) 100%), url('../../assets/images/background-portfolio.jpeg')
      opacity: 0.07
      filter: grayscale(1)
      position: absolute
      top: 0 
      left: 0
      width: 100% 
      height: 100%
</style>

