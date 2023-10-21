import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

const canvas = document.getElementById('canvas');


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer( { canvas : document.getElementById('canvas'), alpha: true } );
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

var light1 = new THREE.DirectionalLight(0xFFFFFF, 1);
light1.position.set(0, 1, 0);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xFFFFFF, 0.75);
light2.position.set(1, 1, 1);
scene.add(light2);

const loader = new GLTFLoader()

loader.load('../assets/robot.glb', function(glb){
    const model = glb.scene;
    model.scale.set(0.005, 0.005, 0.005);
    model.rotation.y = 5;
    model.position.set(0, -3, 0);
    scene.add(model);
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% Loaded")
});




function animate() {
    renderer.render(scene, camera);

    

    requestAnimationFrame(animate);
}

animate();


// const scene = new THREE.Scene();


// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize( sizes.width / sizes.height );
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     renderer.setClearColor( 0x000000, 0 );
// })

// const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.1, 1000)


// //animationContainer.classList.add('animate');

// const renderer = new THREE.WebGLRenderer( { alpha: true } );
// renderer.setSize( sizes.width, sizes.height );
// document.body.appendChild( renderer.domElement );

// const geometry1 = new THREE.BoxGeometry( 2, 2, 2);
// const material1 = new THREE.MeshBasicMaterial( { color: "lightblue" } );
// const cube1 = new THREE.Mesh( geometry1, material1 );
// scene.add( cube1 );

// const geometry2 = new THREE.BoxGeometry( 2, 2, 2);
// const material2 = new THREE.MeshBasicMaterial( { color: "blue" } );
// const cube2 = new THREE.Mesh( geometry2, material2 );
// scene.add( cube2 );

// const geometry3 = new THREE.BoxGeometry( 2, 2, 2);
// const material3 = new THREE.MeshBasicMaterial( { color: "lightgreen" } );
// const cube3 = new THREE.Mesh( geometry3, material3 );
// scene.add( cube3 );

// camera.position.z = 8;

// cube1.rotation.y = 0;
// cube1.position.x = 0;
// cube1.position.y = 2;

// cube2.rotation.y = 0;
// cube2.position.x = 0;
// cube2.position.y = 0;


// cube3.rotation.y = 0;
// cube3.position.x = 0;
// cube3.position.y = -2;



// function animate() {
// 	requestAnimationFrame( animate );

//     // cube1.rotation.x += 0.05;
//     // cube1.rotation.y += 0.05;
//     // cube1.position.y += 0.05;

// 	renderer.render( scene, camera );
// }
// //console.log(THREE);

// animate();