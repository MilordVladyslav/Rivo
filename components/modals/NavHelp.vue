<template>
    <div class="modal_content">
        <ul class="nav_list">
            <li>
                <nuxt-link to="/"> 
                    Home
                </nuxt-link>      
            </li>
            <li>
                <nuxt-link :to="{ name: 'index', params: {scrollTo: '#development'} }"> 
                    Services
                </nuxt-link>                        
            </li>
            <!-- <li>
                <nuxt-link :to="{ name: 'index', params: {scrollTo: '#portfolio'} }"> 
                    Portfolio
                </nuxt-link>
            </li> -->
            <!-- <li>
                <nuxt-link :to="{ name: 'index', params: {scrollTo: '#team-content'} }"> 
                    Our team
                </nuxt-link>
            </li> -->
            <li>
                <nuxt-link :to="{ name: 'index', params: {scrollTo: '#contacts'} }"> 
                    Contacts
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ name: 'index', params: {scrollTo: '#blog'} }"> 
                    Blog
                </nuxt-link>
            </li>
            <li>
                <a href="tel:+13477057935">+1.347.705.79.35</a>
            </li>
        </ul>
    </div>
</template>

<script>  

export default {
    name: 'NavHelp',
    data() {
        return {

        }
    },
}

</script>


