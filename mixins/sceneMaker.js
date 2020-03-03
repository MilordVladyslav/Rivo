let sceneMaker = {
    methods: {
        sceneMaker (canvasClassName, arrayWithParams, size = false, renderer) {
            // console.log(renderer)
            if(window.innerWidth > 1200) { 
            let canvawrapper = document.getElementsByClassName('canvas-container')
            // console.log(canvawrapper)
            if(canvasClassName === 'case-content-canvas') {
                canvawrapper = document.getElementsByClassName('case-content-section-container')
            }
            // if(canvasClassName === 'second-screen-canvas') {
            //     console.log(canvawrapper[0])
            // }
            if(canvasClassName === 'contacts-section-canvas') {
                canvawrapper = document.getElementsByClassName('contacts-section-container')
            }
            
            var scene = new THREE.Scene();
            let width = size.width ? size.width / 3.4 : canvawrapper[0].offsetWidth / 3.4
            let height = size.height ? size.height / 3.4 : window.innerHeight / 3.4
            let body = document.querySelector('body')
            var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2);
            camera.position.z = 200;
            camera.zoom = 1
            scene.add( camera );

            let rendererWidth = size.width ? size.width : canvawrapper[0].offsetWidth
            let rendererHeight = size.height ? size.height : window.innerHeight
            // var renderer = new THREE.WebGLRenderer({alpha: true});
            
            renderer.setSize(rendererWidth, rendererHeight );
 
            let canvaBlock = renderer.domElement
            canvaBlock.classList.add(canvasClassName)
            canvaBlock.id = canvasClassName
            canvaBlock.removeAttribute("style")
            

            document.getElementById(`${canvasClassName}-wrapper`).appendChild( canvaBlock );


			var keyLight = new THREE.HemisphereLight(new THREE.Color('hsl(4, 0%, 100%)'), 1);
			keyLight.position.set(-100, 0, 100);

			var fillLight = new THREE.HemisphereLight(new THREE.Color('hsl(4, 0%, 100%)'), 0.5);
			fillLight.position.set(100, 0, 100);

            var backLight = new THREE.HemisphereLight(0xffffff, 1.0);
            //  var backLight = new THREE.HemisphereLight(0xffffff, 1.0);
			backLight.position.set(100, 0, -100).normalize();

			scene.add(keyLight);
			scene.add(fillLight);
            scene.add(backLight);
            window.addEventListener('resize', () => {
                canvawrapper = document.getElementsByClassName('canvas-container')
                if(window.innerWidth < 1200) {
                    document.getElementById(`${canvasClassName}-wrapper`).style.display = 'none'
                } else document.getElementById(`${canvasClassName}-wrapper`).style.display = 'block'
                
                rendererWidth = size.width ? size.width : canvawrapper[0].offsetWidth
                rendererHeight = size.height ? size.height : window.innerHeight
                renderer.setSize(rendererWidth, rendererHeight)
                width = size.width ? size.width / 3.4 : canvawrapper[0].offsetWidth / 3.4
                height = size.height ? size.height / 3.4 : window.innerHeight / 3.4
                camera.left = width / - 2
                camera.right = width / 2
                camera.top = height / 2
                camera.bottom = height / - 2
                camera.updateProjectionMatrix();
            })
			
			function drawModels (arrayWithParams, pivot, renderer) {

                var animate = function () {
                    requestAnimationFrame( animate );
                    for( let i = 0; i<sceneModels.children.length; i++ ) {
                        if(sceneModels.children[i].rotationParams.axis === 'static') continue;
                        if(sceneModels.children[i].rotationParams.direction === 'forward') { 
                            sceneModels.children[i].rotation[sceneModels.children[i].rotationParams.axis] += sceneModels.children[i].rotationParams.speed
                        } else sceneModels.children[i].rotation[sceneModels.children[i].rotationParams.axis] -= sceneModels.children[i].rotationParams.speed
                    }
                    // sceneModels.children.map((item) => {
                    //     if(item.rotationParams.axis === 'static') continue;
                    //     if(item.rotationParams.direction === 'forward') { 
                    //         item.rotation[item.rotationParams.axis] += item.rotationParams.speed
                    //     } else item.rotation[item.rotationParams.axis] -= item.rotationParams.speed
                    // })
                    renderer.render(scene, camera);
                };
                let sceneModels = new THREE.Group();

                let digit = 0;
                if (canvawrapper[0].offsetWidth <  1750) {
                    digit = (1750 - canvawrapper[0].offsetWidth) / 10
                }
                for(let i = 0; i < pivot.children.length; i++) {
                    for(let j = 0; j < arrayWithParams.length; j++) {
                        if(pivot.children[i].modelName === arrayWithParams[j].modelName ) {
                            if(body.classList.contains('white-theme') && arrayWithParams[j].color === 0x161616) {
                                continue;
                            }
                            let modelClone = pivot.children[i].clone()
                            let modelCloneMaterial = pivot.children[i].children[0].material.clone()
                            modelClone.children[0].material = modelCloneMaterial
                            modelClone.children[0].material.color.setHex(arrayWithParams[j].color)
                            modelClone.position.x = arrayWithParams[j].position.x   > 0  ? modelClone.position.x = arrayWithParams[j].position.x - digit :  modelClone.position.x = arrayWithParams[j].position.x + digit
                
                            modelClone.position.y = arrayWithParams[j].position.y
                            modelClone.position.z = arrayWithParams[j].position.z
                            modelClone.rotationParams = arrayWithParams[j].rotation
                            sceneModels.children.push(modelClone)
                        }
                    }
                }
                scene.add(sceneModels)
                animate()
                // let rotateModels = function(){
                    
                //     sceneModels.children.map((item) => {
                //         if(item.rotationParams.direction === 'forward') { 
                //             item.rotation[item.rotationParams.axis] += 0.05
                //         } else item.rotation[item.rotationParams.axis] -= 0.05
                //     })
                //     renderer.render(scene, camera);
                // }
                renderer.render(scene, camera); 
                // window.addEventListener('scroll', rotateModels)
                // console.log
                
			}
			drawModels (
                arrayWithParams,
                this.pivot[0],
                renderer
			)
        }
        }       
    }
}

export default sceneMaker