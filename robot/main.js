import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

const canvas = document.getElementById('canvas');


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

scene.rotation.set(0, 0, 0);

const renderer = new THREE.WebGLRenderer( { canvas : document.getElementById('canvas'), alpha: true } );
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);

var light1 = new THREE.DirectionalLight(0xFFFFFF, 1);
light1.position.set(0, 1, 0);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xFFFFFF, 0.75);
light2.position.set(1, 1, 1);
scene.add(light2);

var light3 = new THREE.DirectionalLight(0xFFFFFF, 0.5);
light3.position.set(1, -5, 1);
scene.add(light3);

const loader = new GLTFLoader()

var model;

loader.load('../assets/robot.glb', function(glb){
    model = glb.scene;
    model.scale.set(0.005, 0.005, 0.005);
    model.rotation.y = 5;
    model.position.set(3, -3, 0);
    scene.add(model);
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% Loaded")
});

animate();


function animate() {
    renderer.render(scene, camera);

    

    requestAnimationFrame(animate);
}
