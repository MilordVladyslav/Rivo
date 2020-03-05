<template>
    <header>
        <div class="container-large flex_header">
            <div class="cursor"></div>
            <div class="logo_nav">
                <div class="logo">
                    <router-link to="/">
                        <img src="~@/assets/svg-icon/logo.svg" alt="" />
                    </router-link>
                </div>
                <ul class="nav_list" v-if="isMainPage">
                    <li>
                        <a href="#home" v-scroll-to="'#home'">Home</a>
                    </li>
                    <li>
                        <a href="#development" v-scroll-to="'#development'">Services</a>
                    </li>
                    <!-- <li>    
                        <a href="#portfolio" v-scroll-to="'#portfolio'">Portfolio</a>
                    </li>
                    <li>
                        <a href="#team-content" v-scroll-to="'#team-content'">Our team</a>
                    </li> -->
                    <li>
                        <a href="#contacts" v-scroll-to="'#contacts'">Contacts</a>
                    </li>
                    <li>
                        <a href="#blog" v-scroll-to="'#blog'">Blog</a>
                    </li>
                    <li>
                        <a href="tel:+13477057935">+1.347.705.79.35</a>
                    </li>
                </ul>
                <div v-else>
                    <NavHelp />
                </div>
            </div>
            <div class="estimate_menu">
                <a href="/" class="btn_header t-up" @click.prevent="$modal.show('estimate')">
                    <span class="link_circle"></span>
                    <span class="link_text">Get free estimation</span>
                </a>
                <a href="/" class="menu_box" @click.prevent="$modal.show('menu')">
                    <div class="line_menu"> 
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span class="menu_word">Menu</span>
                </a>
            </div>
        </div>
        <modal
             name="estimate"
             :adaptive="true"
             :scrollable="true"
             width="100%"
             height="auto"
             :class="['v--modal']"
             transition="nice-modal-fade">
            <div class="container"> 
                <div class="close_btn" @click="$modal.hide('estimate')">
                    Close
                </div>
                <FormSend />
            </div>
        </modal>            
        <modal
             name="menu"
             :adaptive="true"
             :scrollable="true"
             width="100%"
             height="auto"
             :class="['v--modal']"
             transition="nice-modal-fade">
            <div class="container"> 
                <div class="close_btn" @click="$modal.hide('menu')">
                    Close
                </div>
                <div class="modal_box">
                    <NavList v-if="isMainPage" />
                    <NavHelp v-else />
                    <ul class="social_list">
                        <li>
                            <a href="" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href="" target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href="" target="_blank">Linkedin</a>
                        </li>
                        <li>
                            <a href="tel:+13477057935" class="link_md">+1.347.705.79.35</a>
                        </li>
                    </ul>
                </div>
            </div>
        </modal>
    </header>
</template>

<script>
import { TweenMax, TimelineMax, Power3, TweenLite, } from 'gsap'
import NavList from '../../modals/NavList'
import FormSend from '../../modals/FormSend'
import NavHelp from '../../modals/NavHelp'
import VueScrollTo from 'vue-scrollto'
import cursorCircle from '../../../mixins/cursorCircle'

export default {
    name: "Header",
    components: {
        NavList,
        FormSend,
        NavHelp,
    },
    data() {
        return {
            payload: false
        }
    },
    watch: {
        pagesData () {
            this.payload = true
        }   
    },
    mounted() {
        let currentHour = new Date().getHours()
        this.cursorCircle();
    	TweenMax.staggerFromTo(('.nav_list li, .nav_list_md li'), 0.5, {y: "-50px", opacity: 0, rotation: "-15%"}, {y: "0%", opacity: 1, rotation: "0"}, 0.1);
    },
    updated () {

    },
    props: ['isMainPage', 'pagesData'],
    mixins: [cursorCircle],
}
</script>












