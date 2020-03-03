<template>
    <section class="partners-content" v-if="this.payload">
    <div class="container partners-block" id="partners-block">
        <h2 class="large_h tc">{{ pagesData.partners_heading }}</h2>
        <ul class="partners_list">
            <li v-for="(partner, index) in pagesData.partners_logo" :key="index">
                <div class="img_size partners-items">
                    <img :src="partner.image" alt="" />
                </div> 
            </li>
        </ul>
    </div>
    </section>
</template>

<script>
import animateCaller from "../../../mixins/animateCaller"

export default {
    name: 'PartnersSection',
    data() {
        return {
            payload: false,
        }
    },
    watch: {
        pagesData: function () {
            this.payload = true
            this.$emit('update-mounted-components', 'PartnersSection')
        },
    },
    mounted () {
        
        let partnersItems = document.getElementsByClassName('partners-items')
        
        TweenLite.to('.partners-items', 0, {opacity: 0})
        function shuffle(arr){
            let j, temp;
            for(let i = arr.length - 1; i > 0; i--){
                j = Math.floor(Math.random()*(i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            return arr;
        }
        let shuffledPartnersIndexes = shuffle([0,1,2,3,4,5,6,7])
        this.animateCaller('partners-block', () => { 
            let partnersItems = document.getElementsByClassName('partners-items')
            let tlPartners = []
            for(let i = 0; i < shuffledPartnersIndexes.length; i++) {   
                tlPartners.push(TweenLite.fromTo(partnersItems[shuffledPartnersIndexes[i]], 1.5, {opacity: 0}, {opacity: 1} ).delay(i / 8))
            }
        })
    },
    beforeDestroy() {
        this.animateCaller('', '', true)
        this.animateCaller = ''
    },
    mixins: [animateCaller],
    props: ['pagesData']
}
</script>

<style>

</style>