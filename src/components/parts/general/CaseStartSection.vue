<template>
    <section class="first-content case-start-section">
        <div class="back_image">
            <img src="~@/assets/images/case/backcase.jpg" alt="" />
        </div>
        <div class="container">
            <div class="bottom_zone">
                <div class="topic_case">Rivo CRM</div>
                <h2 class="name_case">Title</h2>
                <a href="#second-screen" class="look_case" v-scroll-to="'#second-screen'">
                    <span class="shape_circle">
                        <img src="~@/assets/svg-icon/combined-shape-2.svg" alt="" />
                    </span>
                    <span>Explore</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CaseStartSection"
}
</script>

<style>

</style>