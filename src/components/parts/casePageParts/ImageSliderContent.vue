<template>
        <div class="image-slider-content">
            <div class="image-slider-block container">
                <div class="slider_zone">	
                    <hooper :settings="hooperSettingsImage">
                        <slide v-for="(item,index) in items" :key="index">
                            <div class="img_size">
                                <img
                                    src="~@/assets/images/case/image-slider.png"
                                    srcset="~@/assets/images/case/image-slider@2x.png 2x"
                                    alt=""
                                />
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>			
                </div>
            </div>
        </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import fetchData from '../../../data/case.json'
export default { 
    name: 'ImageSliderContent',
    data: function () {
        return {
            items: fetchData,
            hooperSettingsImage: {
    			wheelControl: false,
    			infiniteScroll: false,
    			itemsToShow: 1,
    			itemsToSlide: 1,
		    	breakpoints: {
		          	1600: {
		            	itemsToShow: 1.3,
		          	},
		          	1440: {
						itemsToShow: 1,
		          	},
		          	768: {
						itemsToShow: 2,
		          	},
		        } 			
    		},
        }
    },
    components: {
	    Hooper,
	    Slide,
		HooperNavigation,
	},
}
</script>

<style>

</style>