<template>
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
                      <label id="fileUpload_wrap" class="label-wrapper"  v-if="!form.fileAttach.name">
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
                      <div id="upload_text" class="text_added">
                        {{form.fileAttach.name}}
                      </div>
                  </div>
              </div> 
          </div>  
          <input type="hidden" class="pacet" name="type form" value="Standard form">
          <button class="common_btn" type="submit">Send mail</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
const querystring = require("querystring");
export default {
  data() {
    return {
      form: {
          name: "",
          country: "",
          company: "",
          email: "",
          fileAttach: "",
      },
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      let formData = new FormData();
      for(let key in this.form) {
        formData.append(key, this.form[key])
      }
      console.log('дані, що відправляються:')
      for (var key of formData.keys()) {
        console.log(key + ': ' + formData.get(key)); 
      }

          axios.post(
              "https://rivo.agency/test.php",
              formData, 
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
    onChangeFileUpload(file){
      this.form.fileAttach = this.$refs.file.files[0];
    },
  }
}
</script>

<style>

</style>