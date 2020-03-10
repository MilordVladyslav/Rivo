<template>
    <section id="contacts" class="contacts-content">
        <div class="contacts-section-container canvas-container" id="contacts-section-container" v-if="this.canvasBind">
          <div class="contacts-section-canvas-wrapper canvas-wrapper" id="contacts-section-canvas-wrapper"></div>
        </div> 
        <div class="container contacts-block">
            <div class="triangle-figure view_triangle-contacts-right" v-show="this.figures2d"></div>
            <h2 class="large_h contacts-title">Contacts</h2>
            <div class="triangle-figure view_triangle-contacts-left" v-show="this.figures2d"></div>
            <div class="contacts_flex">
                <div class="reference-zone">
                    <div class="triangle-figure view_triangle-contacts-left" v-show="this.figures2d"></div>
                    <router-link to="/" class="logo-link">
                        <img src="~@/assets/svg-icon/logo.svg" class="logo" alt="" />
                    </router-link>
                    <div class="phone_address_box">
                        <div class="reference location">
                            <a href="#">Rovno, Melnyk str.1, 33016</a>
                        </div>
                        <ul class="phone_list">
                            <li>
                                <a href="tel:+13477057935">+1 347 705 79 35</a>
                            </li>
                            <li>
                                <a href="tel:+380964247150">+38 096 424 71 50</a>
                            </li>
                        </ul>                   
                    </div>
                </div>
                <div class="snake-figure view_snake-contacts-middle" v-show="this.figures2d">
                  <img src="~@/assets/svg-icon/snake-copy.svg" alt="" />
                </div>
                <div class="snake-figure view_snake-contacts" v-show="this.figures2d">
                    <img src="~@/assets/svg-icon/snake.svg" alt="" />
                </div>
                <div class="contacts-form">
                    <form method="POST" @submit="onSubmit">
                        <input type="hidden" name="project_name" value="Rivo">
                        <input type="hidden" name="admin_email" value="vitovstreet@gmail.com">
                        <input type="hidden" name="form_subject" value="Form">
                        <div class="fields">
                            <p>
                                <span class="field">
                                   <input 
                                        v-model="form.name"
                                        type="text" id="name_client"
                                        class="head-field" 
                                         autocomplete="off"
                                        name="name" 
                                        required="" 
                                    />
                                   <label for="name_client" :class="{'hide-visibility': form.name}">Name</label>
                                   <span class="golden_line"></span>
                                </span>
                            </p>
                            <p>
                                <span class="field">
                                   <input 
                                        v-model="form.company"
                                        type="text" id="company_form"
                                        class="head-field"
                                        name="company"
                                        autocomplete="off"
                                        placeholder=""
                                        required=""
                                    />
                                   <label for="company_form" :class="{'hide-visibility': form.company}">Company</label>
                                   <span class="golden_line"></span>
                                </span>
                            </p>
                            <p>
                                <span class="field">
                                   <input
                                        v-model="form.email"
                                        type="email" id="email_form"
                                        class="head-field"
                                        name="email"
                                        title="email@domain.com"
                                        required=""
                                        autocomplete="off"
                                    />
                                    <label for="email_form" :class="{'hide-visibility': form.email}">Email</label>
                                    <span class="golden_line"></span>
                                </span>
                            </p>
                            <p>
                                <span class="field">
                                    <input
                                        v-model="form.country"
                                        type="text"
                                        id="country_form"
                                        class="head-field"
                                        name="country"
                                        autocomplete="off"
                                        required=""
                                    />
                                    <label for="country_form" :class="{'hide-visibility': form.country}">Country</label>
                                    <span class="golden_line"></span>
                                </span>
                            </p>
                            <div class="attach-file">
                                <div>
                                    <label id="fileUpload_wrap" class="label-wrapper">
                                        <img src="~@/assets/svg-icon/attach-icon.svg" alt="" />
                                        Attach file
                                        <input
                                          type="file"
                                          class="file_change"
                                          id="fileUpload"
                                          ref="file"
                                          @change="onChangeFileUpload()"
                                        />
                                    </label>
                                    <div id="upload_text" class="text_added"></div>
                                </div>
                            </div> 
                        </div>  
                        <input type="hidden" class="pacet" name="type form" value="Standard form">
                        <button class="common_btn" type="submit">Send mail</button>
                    </form>
                </div>
            </div>
            <div class="plus_bit view_plus-contacts" v-show="this.figures2d">
              <span></span>
              <span></span>
            </div>
            <div class="circle-figure contacts_circle" v-show="this.figures2d"></div>
        </div>
    </section>
</template>

<script>
import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
import animateCaller from '../../../mixins/animateCaller'
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
import axios from 'axios'
const querystring = require("querystring");
export default {
    name:'ContactsSection',
    data() {
        return {
          figures2d: true,
          canvasBind: false,
          switchSection: false,
          canvasRendered: false,
          data: [],
          form: {
              name: "",
              country: "",
              company: "",
              email: "",
              fileAttach: "",
          },
          file: '',
        }
    },
  watch: {
    pivot: function () {
      this.canvasBind = true
      this.figures2d = false
    }
  },
  computed: {
    rendererContacts: function () {
      return new THREE.WebGLRenderer({alpha: true})
    }
  },
  mounted () {
    TweenLite.to(['.reference-zone', '.contacts-form'], 0, {opacity:0});
    this.$emit('update-mounted-components', 'ContactsSection')
    this.animateCaller('contacts', () => {
        let tlContacts = [] 
        tlContacts.push(TweenLite.fromTo(".head-field", 1.5, {width: 0}, {width: 100 + '%'} ));
        tlContacts.push(TweenLite.fromTo([".reference-zone", ".contacts-form"], 1.5, {opacity: 0}, {opacity: 1} ));
        tlContacts.push(TweenLite.fromTo('.contacts-title', 1.5, {css:{transform:"translateY(50px)"}}, {css:{transform:"translateY(0px)"}}));
        tlContacts.push(TweenLite.fromTo('.reference-zone .logo', 1.5, {css:{transform:"translateY(60px)"}}, {css:{transform:"translateY(0px)"}}));
        tlContacts.push(TweenLite.fromTo('.location', 1.5, {css:{transform:"translateY(80px)"}}, {css:{transform:"translateY(0px)"}}));
        tlContacts.push(TweenLite.fromTo('.phone_list', 1.5, {css:{transform:"translateY(90px)"}}, {css:{transform:"translateY(0px)"}}));
    });
  },
  updated () {
    if(!this.canvasRendered && this.canvasBind && window.innerWidth > 1200) {
        setTimeout( () => {
          this.makeScene() 
        }, 200) 
      this.canvasRendered = true
    }
  },
  methods: {
    makeScene() {
      this.sceneMaker(
        'contacts-section-canvas',
                [
          {
            modelName: 'sphere',
            position: {
              x: 195,
              y: -60,
              z: 0
            },
            rotation: {
              axis: 'z',
              speed: 0.005,
            },
            color: this.colors.darkColor
          },
          {
            modelName: 'wave',
            position: {
              x: -30,
              y: 70,
              z: 0
            },
            rotation: {
              axis: 'static',
              speed: 0.005,
            },
            color:  this.colors.darkColor
                    },
                    {
            modelName: 'pyramid',
            position: {
              x: 130,
              y: 80,
              z: 0
            },
            rotation: {
              axis: 'y',
              speed: 0.005,
            },
            color: this.colors.darkColor
                    },
                ],
                {   
                  height: 700
                },
                this.rendererContacts
            )
        },
        onSubmit(e) {
          e.preventDefault()
          console.log('Дані, що відправляються:')
          console.log(this.form)
          console.log('stringify:')
          console.log(querystring.stringify(this.form))
             axios.post(
                 "https://rivo.agency/test.php",
                  querystring.stringify(this.form), 
                  {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
             )
             .then(res => {
               console.log('Респонс')
               console.log(res)
             });
        },
        onChangeFileUpload(){
          this.form.fileAttach = this.$refs.file.files[0];
          let uploadText = document.getElementById('upload_text');
          uploadText.innerHTML += this.form.fileAttach.name
          if(this.uploadText != '') {
              document.getElementById("fileUpload_wrap").classList.add('hide_label');
          }
        },
    },
    beforeDestroy() {
      this.rendererContacts.forceContextLoss()
      this.animateCaller('', '', true)
      this.animateCaller = ''
    },
    mixins: [animateCaller, sceneMaker],
    props: ['pivot', 'colors']
}
</script>

