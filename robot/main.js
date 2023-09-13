import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "#FFFFFF" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
camera.rotation.x = -2

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
console.log(THREE);

animate();