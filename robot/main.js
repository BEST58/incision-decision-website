import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#ffffff');
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry1 = new THREE.BoxGeometry( 1, 1, 1);
const material1 = new THREE.MeshBasicMaterial( { color: "red" } );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );

const geometry2 = new THREE.BoxGeometry( 1, 1, 1);
const material2 = new THREE.MeshBasicMaterial( { color: "blue" } );
const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );

const geometry3 = new THREE.BoxGeometry( 1, 1, 1);
const material3 = new THREE.MeshBasicMaterial( { color: "green" } );
const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );

camera.position.z = 5;

cube1.rotation.y = -0.5;

cube2.rotation.y = -0.5;
cube2.position.y = -1.5;

cube3.rotation.y = -0.5;
cube3.position.y = 1.5;



function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
console.log(THREE);

animate();