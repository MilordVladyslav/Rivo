<template>
    <ul class="nav_list">
        <li>
            <router-link :to="{ name: 'mainPage', params: {scrollTo: '#home'} }"> 
                Home
            </router-link>      
        </li>
        <li>
            <router-link :to="{ name: 'mainPage', params: {scrollTo: '#development'} }"> 
                Services
            </router-link>                        
        </li>
        <li>
            <router-link :to="{ name: 'mainPage', params: {scrollTo: '#portfolio'} }"> 
                Portfolio
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'mainPage', params: {scrollTo: '#team-content'} }"> 
                Our team
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'mainPage', params: {scrollTo: '#contacts'} }"> 
                Contacts
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'mainPage', params: {scrollTo: '#blog'} }"> 
                Blog
            </router-link>
        </li>
        <li>
            <a href="tel:+13477057935">+1.347.705.79.35</a>
        </li>
    </ul>
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


