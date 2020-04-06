<template>
    <section class="partners-content">
    <div class="container partners-block" id="partners-block">
        <h2 class="large_h tc">Partners</h2>
        <ul class="partners_list">
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/nike.svg" alt="" />
                </div>
            </li>
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/microsoft.svg" alt="" />
                </div>
            </li>
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/samsung.svg" alt="" />
                </div>
            </li>
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/audi.svg" alt="" />
                </div>
            </li>
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/pepsi.svg" alt="" />
                </div>
            </li>
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/air-bnb.svg" alt="" />
                </div>
            </li>
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/uber.svg" alt="" />
                </div>
            </li>
            <li>
                <div class="img_size partners-items">
                    <img src="~@/assets/svg-icon/adobe.svg" alt="" />
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
    mixins: [animateCaller],
}
</script>

<style>

</style>