import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('canvas');


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

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
light3.position.set(0, -2, 3);
scene.add(light3);

var mode;

var group = new THREE.Group();

var model;

const setupAnimation = () => {
    model.rotation.set(-2, -2, 1);
    model.position.set(4, -3, -1);
    desktopAnimation();
}

const desktopAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".wrap",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

    tl.to(model.rotation, {
        x: 3.14,
        z: 0,
        y: 0,
        ease: "none",
        duration: 1,
        scrollTrigger: {
            trigger: ".section:nth-child(1)",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
        }
    });

    tl.to(model.rotation, {
        x: 0,
        y: 0,
        z: 0,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
            trigger: ".section:nth-child(2)",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });

    tl.to(model.scale, {
        x: 1.25,
        y: 1.25,
        z: 1.25,
        ease: "power2.in",
        duration: 1,
        scrollTrigger: {
            trigger: ".section:nth-child(3)",
            start: "top center",
            end: "bottom center",
            endTrigger: ".section:nth-child(4)",
            scrub: 1
        }
    });
    
    tl.to(model.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1,
        scrollTrigger: {
            trigger: ".section:nth-child(4)",
            start: "top top",
            endTrigger: ".section:nth-child(5)",
            scrub: 1
        }
    });
}



const LoadingManager = new THREE.LoadingManager(() => {
    setupAnimation();
})

const loader = new GLTFLoader(LoadingManager)

loader.load('../assets/robot.glb', function(glb){
    mode = glb.scene;
    mode.scale.set(0.006, 0.006, 0.006);
    group.add(mode);
    scene.add(group);
    model = group;
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% Loaded")
});




animate();


function animate() {
    renderer.render(scene, camera);

    

    requestAnimationFrame(animate);
}
