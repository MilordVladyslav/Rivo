<template>
	<div class="modal_content contacts-content">
		<h2 class="large_h contacts-title hide_h">Get free estimation</h2>
	    <div class="reference-zone">
            <h2 class="large_h contacts-title">Get free estimation</h2>
            <div class="triangle-figure view_triangle-contacts-left"></div>
            <div class="triangle-figure view_triangle-contacts-right"></div>
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
            <div class="snake-figure view_snake-contacts-middle">
      			<img src="~@/assets/svg-icon/snake-copy.svg" alt="" />
      		</div>
            <div class="snake-figure view_snake-contacts">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
        </div>
		<div class="contacts-form">
			<div class="fill_form" v-if="$v.form.$error">
                Fill form correctly!
            </div>
	        <form class="" method="POST" action="javascript:void(null);" @submit.prevent="submit">
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
	            <input type="hidden" class="pacet" name="type form" value="Modal window">
	            <button class="common_btn" type="submit">Send mail</button>
	        </form>
        </div>
		<div class="circle-plus-figure case_desc_circle_plus">
			<div class="circle-figure view_circle"></div> 
			<div class="plus_bit case_second_plus">
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators"
	
export default {
	name: 'FormSend',
	data() {
		return {
          form: {
            name: "",
            company: "",
            email: "",
            text: "",
            country: "",
          },
		}
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
            window.location.href = '/success/';
        },
    }
}

</script>