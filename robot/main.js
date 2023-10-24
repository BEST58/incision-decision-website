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
renderer.setPixelRatio( window.devicePixelRatio );

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
    model.rotation.set(0, 0, 0);
    model.position.set(4, -3, -1);
    desktopAnimation();
}

const desktopAnimation = () => {
    const sectionAnimations = [
        // Section 0 animations
        {
            target: model.rotation,
            values: { x: 0, z: 0, y: 0 },
            target2: model.position,
            values2: { x: 4, y: -3, z: -1 },
        },
        // Section 1 animations
        {
            target: model.rotation,
            values: { x: -1, z: 0, y: 0 },
            target2: model.position,
            values2: { x: 4, y: 0, z: -1 },
        },
        // Section 2 animations
        {
            target: model.rotation,
            values: { x: 0, z: 0, y: 0 },
            target2: model.position,
            values2: { x: 4, y: -3, z: -1 },
			target3: model.scale,
            values3: { x: 1, z: 1, y: 1 },
        },
        // Section 3 animations
        {
            target: model.scale,
            values: { x: 2, z: 2, y: 2 },
            target2: model.position,
            values2: { x: 4, z: -1, y: -5 }
        },
        // Section 4 animations
        {
            target: model.scale,
            values: { x: 1, z: 1, y: 1 },
            target2: model.position,
            values2: { x: 4, z: -1, y: -3 },
            target3: model.rotation,
            values3: { x: 0, z: 0, y: 1.5 }
        },
        // Section 5 animations
        {
            target: model.rotation,
            values: { x: 0, z: 0, y: -2 }
        }
    ];

    sectionAnimations.forEach((animation, sectionIndex) => {
        gsap.to(animation.target, {
            ...animation.values,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: `.section:nth-child(${sectionIndex + 1})`,
                start: "top center",
                end: `.section:nth-child(${sectionIndex + 2})`,
                scrub: 0.1,
            }
        });

        if (animation.target2) {
            gsap.to(animation.target2, {
                ...animation.values2,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: `.section:nth-child(${sectionIndex + 1})`,
                    start: "top center",
                    end: `.section:nth-child(${sectionIndex + 2})`,
                    scrub: 0.1,
                }
            });
        }

        if (animation.target3) {
            gsap.to(animation.target3, {
                ...animation.values3,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: `.section:nth-child(${sectionIndex + 1})`,
                    start: "top center",
                    end: `.section:nth-child(${sectionIndex + 2})`,
                    scrub: 0.1,
                }
            });
        }
    });
};

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
