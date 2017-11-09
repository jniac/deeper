
import * as physic from './physic.js'
export { physic }

export let scene = new THREE.Scene()
export let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
export let renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z = 10





export let cubeA = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1))
export let cubeB = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1))
scene.add(cubeA)
scene.add(cubeB)








function frame() {

	renderer.render(scene, camera)

	cubeA.position.x = physic.boxA.position.x * physic.SCALE
	cubeA.position.y = -physic.boxA.position.y * physic.SCALE
	cubeA.rotation.z = -physic.boxA.angle

	cubeB.position.x = physic.boxB.position.x * physic.SCALE
	cubeB.position.y = -physic.boxB.position.y * physic.SCALE
	cubeB.rotation.z = -physic.boxB.angle

	requestAnimationFrame(frame)

}
frame()
