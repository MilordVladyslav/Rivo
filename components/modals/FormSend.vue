<template>
	<div class="modal_content contacts-content">
		<h2 class="large_h contacts-title hide_h">Get free estimation</h2>
	    <div class="reference-zone">
            <h2 class="large_h contacts-title">Get free estimation</h2>
            <div class="triangle-figure view_triangle-contacts-left"></div>
            <div class="triangle-figure view_triangle-contacts-right"></div>
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
            <div class="snake-figure view_snake-contacts-middle">
        			  <img src="~@/assets/svg-icon/snake-copy.svg" alt="" />
        		</div>
            <div class="snake-figure view_snake-contacts">
                <img src="~@/assets/svg-icon/snake.svg" alt="" />
            </div>
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
                              name="name" 
                              @keyup.enter="cleanForm()"
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
                              type="email" id="form.email_form"
                              class="head-field"
                              name="email"
                              title="email@domain.com"
                              required=""
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
                              name="country"
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
import axios from 'axios'
const querystring = require("querystring");
	
export default {
	name: 'FormSend',
	data() {
		return {
      form: {
          name: "",
          country: "",
          company: "",
          email: "",
      }
		}
	},
  methods: {
      onSubmit(e) {
          e.preventDefault();
             axios.post(
                 "http://test.campeao.pro/mail.php",
                  querystring.stringify(this.form)
             )
             .then(res => {
                 window.location.href = window.location.origin + '/success';
             });
      },
      onChangeFileUpload(){
          this.file = this.$refs.file.files[0];
          let uploadText = document.getElementById('upload_text');
          uploadText.innerHTML += this.file.name;
          if(this.uploadText != '') {
              document.getElementById("fileUpload_wrap").classList.add('hide_label');
          }
      },
  }
}

</script>








