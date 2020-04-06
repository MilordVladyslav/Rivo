<template>
  	  <p class="theme-checker" @click="switchTheme">
		  switch
	  </p>
</template>

<script>
export default {
    name: 'ThemeChecker',
    data: function () {
        return {
            whiteTheme: false
        }
    },
    methods: {
        switchTheme () {
		  
		  this.whiteTheme = !this.whiteTheme

		  localStorage.whiteTheme = this.whiteTheme;
		  this.whiteTheme ? document.querySelector('body').classList.add('white-theme') : document.querySelector('body').classList.remove('white-theme')
	    },
    },
    mounted() {
        localStorage.whiteTheme === 'true' 
            ? document.querySelector('body').classList.add('white-theme')
            : document.querySelector('body').classList.remove('white-theme')
    }
}
</script>

<style>

</style>