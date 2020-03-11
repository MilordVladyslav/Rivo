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
        <FeedbackForm />
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
import FeedbackForm from '@/components/parts/general/FeedbackForm'
export default {
    components: {
        FeedbackForm
    },
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
}

</script>
