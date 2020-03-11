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
          </div>
        </section>
      </div>
      <!-- <img src="@/assets/images/cartrailer.png" alt="cartrailer"> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/parts/general/Header"
export default {
  components: {
    Header
  }
}
</script>

<style lang="sass" scoped>
  span
    color: #ffd63c

  .description-content
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
    height: 4300px
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