<template>
    <div class="modal_content">
        <ul class="nav_list_md">
            <li>
                <a 
                    href="#home"
                    class="link_md"
                    @click="$modal.hide('menu')"
                    v-scroll-to="'#home'">
                    Home
                </a>
            </li>
            <li>
                <a 
                    href="#development"
                    class="link_md"
                    @click="$modal.hide('menu')"
                    v-scroll-to="'#development'">
                    Services
                </a>
            </li>
            <!-- <li>
                <a 
                    href="#portfolio"
                    class="link_md"
                    @click="$modal.hide('menu')"
                    v-scroll-to="'#portfolio'">
                    Portfolio
                </a>
            </li> -->
            <!-- <li>
                <a 
                    href="#team-content"
                    class="link_md"
                    @click="$modal.hide('menu')"
                    v-scroll-to="'#team-content'">
                    Our team
                </a>
            </li> -->
            <li>
                <a 
                    href="#contacts"
                    class="link_md"
                    @click="$modal.hide('menu')"
                    v-scroll-to="'#contacts'">
                    Contacts
                </a>
            </li>
            <li>
                <a 
                    href="#blog"
                    class="link_md"
                    @click="$modal.hide('menu')"
                    v-scroll-to="'#blog'">
                    Blog
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
import NavHelp from '../modals/NavHelp' 

export default {
    name: 'NavList',
    components: {
        NavHelp,
    },    
    data() {
        return {

        }
    },
}    

</script>




