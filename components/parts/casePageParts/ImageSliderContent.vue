<template>
    <div class="image-slider-content" v-if="!!this.casesData">
        <div class="image-slider-block">
            <div class="slider_zone">	
                <hooper :settings="hooperSettingsImage">
                    <slide
                        v-for="(item, index) in casesData.ACF.discovery_section.images"
                        :key="index"
                    >
                        <div class="img_size">
                            <img :src="item.image" alt="" />
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
            hooperSettingsImage: {
    			wheelControl: false,
    			infiniteScroll: true,
    			itemsToShow: 1,
    			itemsToSlide: 1,
		    	breakpoints: {
		          	1600: {
		            	itemsToShow: 2,
		          	},
		          	1450: {
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
    props:['casesData']
}
</script>

<style>
</style>