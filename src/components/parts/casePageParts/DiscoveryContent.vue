<template>
    <section class="discovery-content">
        <div class="discovery-content-section-container canvas-container">
            <div class="discovery-content-canvas-wrapper canvas-wrapper" id="discovery-content-canvas-wrapper"></div>
        </div>
        <div class="discovery-block container">
            <div class="circle-figure case_discovery_circle"></div>
            <div class="disc_zone">
                <h4>Discovery & planning</h4>
                <div class="text_bit">
                    <p>A meal just isn’t complete without dessert. But instead of reaching for store-bought sweets or those unimaginative brownies from a box, get more mileage out of your grill by grilling your next dessert.</p>
                    <p>“Years ago, even the most inventive cooks treated the idea of making desserts on a grill with skepticism, but now you can’t claim to be a master griller unless you have at least a couple desserts in your repertoire,”.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import sceneMaker from '../../../mixins/sceneMaker'
export default {
    name: 'DiscoveryContent',
    data: function () {
        return {
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
    },
    methods: {
        makeScene() {
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
                    }
                )
        }
    },
    beforeDestroy() {
		this.renderer.forceContextLoss()
		// this.renderer.context = null
		// this.renderer.domElement = null
		// this.renderer = null
		// console.log(this.renderer)
	},
    mixins: [sceneMaker],
    props: ['pivot', 'colors']
}
</script>

<style>

</style>