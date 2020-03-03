let animateCaller = {
	methods: {
		animateCaller: function (domElementId, animations, removeListener) {
			let isPlayed = false
			let domRect = ''
			if(removeListener) {
				document.removeEventListener('scroll', caculate)

				return false
			}
			document.addEventListener('scroll', caculate)
			function caculate () {
				if(!isPlayed) {
					try{
						domRect = document.getElementById(domElementId).getBoundingClientRect();
					} catch (err) {
						''
					}
					if(domRect.top <= window.innerHeight / 3 * 2) {
						animations()
						isPlayed = true
					}
				}
			}
		}
	}
}
export default animateCaller