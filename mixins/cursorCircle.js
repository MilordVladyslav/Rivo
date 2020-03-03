let cursorCircle = {
	methods: {
		cursorCircle() {
			const updateProperties = (elem, state) => {
	            elem.style.setProperty('--x', `${ state.x }px`)
	            elem.style.setProperty('--y', `${ state.y }px`)
	            elem.style.setProperty('--width', '36px')
	            elem.style.setProperty('--height', '36px')
	            elem.style.setProperty('--radius', state.radius)
	            elem.style.setProperty('--scale', state.scale)
	        }
	        document.querySelectorAll('.cursor').forEach((cursor) => {
	            let onElement
	            const createState = (e) => {    
	                const defaultState = {
	                    x: e.clientX,
	                    y: e.clientY,
	                    width: 36,
	                    height: 36,
	                    radius: '100px',
	                    scale: 1
	                }
	                const computedState = {}
	                if (onElement != null) {
	                    const { top, left, width, height } = onElement.getBoundingClientRect()
	                    const radius = '100px'
	                    const scale = 1.5
	                    computedState.x = left + width / 2
	                    computedState.y = top + height / 2
	                    computedState.width = width
	                    computedState.height = height
	                    computedState.radius = radius
	                    computedState.scale = scale
	                }
	                return {
	                    ...defaultState,
	                    ...computedState
	                }
	            }
	            document.addEventListener('mousemove', (e) => {
	                const state = createState(e)
	                updateProperties(cursor, state)
	            })
	            document.querySelectorAll('.nav_list li a, .btn_coop').forEach((elem) => {
	                elem.addEventListener('mouseenter', () => onElement = elem)
	                elem.addEventListener('mouseleave', () => onElement = undefined)
	            })
	        })
		}
	}
}


export default cursorCircle


