let animateCaller = {
	methods: {
		animateCaller: function (domElementId, animations) {
			let isPlayed = false
			let domRect = ''
			document.addEventListener('scroll', () => {
				if(!isPlayed) {
					domRect = document.getElementById(domElementId).getBoundingClientRect();
					if(domRect.top <= window.innerHeight / 3 * 2) {
						animations()
						isPlayed = true
					}
				}
			})
		}
	}
}
// all i see is you jewelz and sparks
// Chris Isaac - Wicked Game (ft. Seren) (Chillion Remix)
export default animateCaller