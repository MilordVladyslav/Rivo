<template>
    <section class="discovery-content">
        <div class="discovery-content-section-container canvas-container">
            <div class="discovery-content-canvas-wrapper canvas-wrapper" id="discovery-content-canvas-wrapper" v-if="this.canvasWrapper"></div>
        </div>
        <div class="discovery-block container" v-if="!!this.casesData">
            <div class="circle-figure case_discovery_circle"></div>
            <div class="disc_zone">
                <h4>{{ casesData.ACF.discovery_section.heading }}</h4>
                <div class="text_bit">
                    <p>{{ casesData.ACF.discovery_section.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker';
export default {
    name: "DescContent",
    data: function () {
        return {
            canvasWrapper: false,
            canvasRendered: false
        }
    },
    computed: {
        discoveryContentCanvas: function () {
            return new THREE.WebGLRenderer({alpha: true})
        }
    },
    methods: {
        makeScene () {
            this.sceneMaker(
                    'discovery-content-canvas',
                    [
                        {
                            modelName: 'sphere',
                            position: {
                                x: 265,
                                y: -55,
                                z: 10
                            },
                            rotation: {
                                axis: 'z',
                                speed: 0.005
                            },
                            color: this.colors.darkColor
                        },
                    
                    ],
                    {
                        width: 1910,
                        height: 540
                    },
                    this.discoveryContentCanvas
                )
        }
    },
	watch: {
		pivot: function () {
			this.canvasWrapper = true
		}
	},
    beforeDestroy() {
        this.discoveryContentCanvas.forceContextLoss()
    },
    mixins: [sceneMaker],
    props: ['casesData', 'pivot', 'colors']
}
</script>

<style>

</style>