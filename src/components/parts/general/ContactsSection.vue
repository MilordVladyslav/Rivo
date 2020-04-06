<template>
    <section id="contacts" class="contacts-content">
        <div class="contacts-section-container canvas-container" id="contacts-section-container">
			<div class="contacts-section-canvas-wrapper canvas-wrapper" id="contacts-section-canvas-wrapper"></div>
		</div> 
        <div class="container contacts-block" id="contacts">
            <div class="triangle-figure view_triangle-contacts-right"></div>
            <div class="reference-zone">
                <h2 class="large_h contacts-title">Contacts</h2>
                <div class="triangle-figure view_triangle-contacts-left"></div>
                <a class="logo-link"><img src="~@/assets/svg-icon/logo.svg" class="logo"></a>
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
            <div class="snake-figure view_snake-contacts-middle">
      			<img src="~@/assets/svg-icon/snake-copy.svg" alt="" />
      		</div>
            <div class="snake-figure view_snake-contacts">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
            <div class="contacts-form">
                <div class="fill_form" v-if="$v.form.$error">
                  Fill form correctly!
                </div>
                <form method="POST" action="javascript:void(null);" @submit.prevent="submit">
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
                                    :class="{ 'hasError': $v.form.email.$error }"
                                    name="Name" 
                                    @keyup.enter="cleanForm()"
                                />
                               <label for="name_client" :class="{'hide-visibility': form.name}">Name</label>
                               <span class="golden_line"></span>
                            </span>
                        </p>
                        <p>
                            <span class="field">
                               <input 
                                    v-model="form.text"
                                    type="text" id="company_form"
                                    class="head-field"
                                    :class="{ 'hasError': $v.form.email.$error }"
                                    name="Company"
                                    placeholder=""
                                />
                               <label for="company_form" :class="{'hide-visibility': form.text}">Company</label>
                               <span class="golden_line"></span>
                            </span>
                        </p>
                        <p>
                            <span class="field" :class="{ 'hasError': $v.form.email.$error }">
                               <input
                                    v-model="form.email"
                                    type="email" id="email_form"
                                    class="head-field"
                                    :class="{ 'hasError': $v.form.email.$error }"
                                    name="email"
                                    title="email@domain.com"
                                    pattern="^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$"
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
                                    :class="{ 'hasError': $v.form.email.$error }"
                                    name="Country"
                                />
                                <label for="country_form" :class="{'hide-visibility': form.country}">Country</label>
                                <span class="golden_line"></span>
                            </span>
                        </p>
                        <p class="attach-file">
                            <span>
                                <input type="file" class="file"/>
                                <div class="label-wrapper">
                                    <img src="~@/assets/svg-icon/attach-icon.svg">
                                    <label>Attach file</label>
                                </div>
                            </span>
                        </p> 
                    </div>  
                    <input type="hidden" class="pacet" name="type form" value="Standard form">
                    <button class="common_btn" type="submit">Send mail</button>
                </form>
            </div>
            <div class="plus_bit view_plus-contacts">
	      		<span></span>
	      		<span></span>
	      	</div>
            <div class="circle-figure contacts_circle"></div>
        </div>
    </section>
</template>

<script>

import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
import animateCaller from '../../../mixins/animateCaller'
import { required, email, minLength } from "vuelidate/lib/validators"
import sceneMaker from '../../../mixins/sceneMaker'
import VueScrollTo from 'vue-scrollto'
export default {
    name:'ContactsSection',
    data: function () {
        return {
          form: {
            name: "",
            company: "",
            email: "",
            text: "",
            country: "",
          },
          renderer: new THREE.WebGLRenderer({alpha: true})
        }
    },
	watch: {
		pivot: function () {
            this.makeScene()
		}
	},
    mounted () {
	  if(this.pivot.length) {
		this.makeScene()
	  }
        TweenLite.to(['.reference-zone', '.contacts-form'], 0, {opacity:0});
        VueScrollTo.scrollTo(this.$route.params.scrollTo) 
        this.animateCaller('contacts', () => {
            let tlContacts = [] 
            tlContacts.push(TweenLite.fromTo(".head-field", 1.5, {width: 0}, {width: 100 + '%'} ));
            tlContacts.push(TweenLite.fromTo([".reference-zone", ".contacts-form"], 1.5, {opacity: 0}, {opacity: 1} ));
            tlContacts.push(TweenLite.fromTo('.contacts-title', 1.5, {css:{transform:"translateY(50px)"}}, {css:{transform:"translateY(0px)"}}));
            tlContacts.push(TweenLite.fromTo('.reference-zone .logo', 1.5, {css:{transform:"translateY(60px)"}}, {css:{transform:"translateY(0px)"}}));
            tlContacts.push(TweenLite.fromTo('.location', 1.5, {css:{transform:"translateY(80px)"}}, {css:{transform:"translateY(0px)"}}));
            tlContacts.push(TweenLite.fromTo('.phone_list', 1.5, {css:{transform:"translateY(90px)"}}, {css:{transform:"translateY(0px)"}}));
        })
    },
    validations: {
        form: {
          name: { required, min: minLength(2) },
          email: { required, email }
        }
    },
    methods: {
        submit() {
            this.$v.form.$touch();
            if(this.$v.form.$error) return 
            window.location.href = window.location.origin + '/success/';
        },
        makeScene() {
			this.sceneMaker(
				'contacts-section-canvas',
                [
					{
						modelName: 'sphere',
						position: {
							x: 195,
							y: -50,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
                    },
					{
						modelName: 'plus',
						position: {
							x: 205,
							y: -40,
							z: 20
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
                    },
					{
						modelName: 'wave',
						position: {
							x: -130,
							y: -65,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.lightColor
                    },
					{
						modelName: 'wave',
						position: {
							x: -30,
							y: 35,
							z: 0
						},
						rotation: {
							axis: 'x',
							speed: 0.005,
						},
						color: this.colors.darkColor
                    },
                    {
						modelName: 'pyramid',
						position: {
							x: 230,
							y: 90,
							z: 0
						},
						rotation: {
							axis: 'z',
							speed: 0.005,
						},
						color: this.colors.darkColor
                    },
                ],
                {
                    height: 700
                }
            )
        }
    },
    mounted () {
		if(this.pivot.length) {
			this.makeScene()
		}
    },
	beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
	},    
    mixins: [animateCaller, sceneMaker],
    props: ['pivot', 'colors']
}
</script>

<style>

</style>

