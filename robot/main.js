import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('canvas');


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer( { canvas : document.getElementById('canvas'), alpha: true, antialias:true } );
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

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

}

const setupAnimation = () => {
    model.rotation.set(0, 0, 0);
    model.position.set(4, -3, -1);
    ScrollTrigger.matchMedia({"(max-width: 799px)": mobileAnimation});
    ScrollTrigger.matchMedia({"(min-width: 800px)": desktopAnimation});
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
            values: { x: 0.15, z: -0.5, y: 1.25 },
            target2: model.position,
            values2: { x: 4, y: -2, z: -1 },
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
            values: { x: 0, z: 0, y: -2 },
            target2: model.scale,
            values2: { x: 1.25, z: 1.25, y: 1.25 },
        }
    ];

    sectionAnimations.forEach((animation, sectionIndex) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.section:nth-child(${(sectionIndex*2) + 1})`,
				start: "top center",
				end: `.section:nth-child(${((sectionIndex + 1)*2) + 1})`,
				scrub: 0.1,
			}
		});

        tl.to(animation.target, {
            ...animation.values,
            duration: 1,
        });

        if (animation.target2) {
            tl.to(animation.target2, {
                ...animation.values2,
                duration: 1,
				delay: -1,
            });
        }

        if (animation.target3) {
            tl.to(animation.target3, {
                ...animation.values3,
                duration: 1,
				delay: -1,
            });
        }
    });
};

const mobileAnimation = () => {
    model.scale.set(0.6, 0.6, 0.6);

    model.position.set(0, -3, -1);
    model.rotation.set(0, 0, 0);

    // Define animations for the spacers
    const spacerAnimations = [
        // Spacer 0 animations (initial position on the screen)
        {
            target: model.position,
            values: { x: 0, y: 0, z: -1 },
            target2: model.rotation,
            values2: { x: 0, y: 0, z: 0 },
            scrub: 0.5, // Adjust the scrub speed
        },
        // Spacer 1 animations (move the model out of the screen)
        {
            target: model.position,
            values: { x: 0, y: 2, z: -1 }, // Move the model out of view
            target2: model.rotation,
            values2: { x: -2, y: 0, z: 0 }, // Rotates the model 180 degrees
            scrub: 0.5, // Adjust the scrub speed
        },
        // Spacer 2 animations (model stays outside the screen)
        {
            target: model.position,
            values: { x: 0, y: 0, z: -1 },
            target2: model.rotation,
            values2: { x: 0, y: 0.5, z: 0 }, // Model continues to stay rotated
            scrub: 0.5, // Adjust the scrub speed
        },
        // Spacer 3 animations (move the model back into the screen under the text)
        {
            target: model.position,
            values: { x: 0, y: -0.5, z: 1 },
            target2: model.rotation,
            values2: { x: 0, y: 1, z: 0 },
            scrub: 0.5, // Adjust the scrub speed
        },
        // Spacer 4 animations (model stays on the screen)
        {
            target: model.position,
            values: { x: 0, y: 0, z: -1 },
            target2: model.rotation,
            values2: { x: 0, y: 1, z: 0.5 }, // Model continues to stay in the original orientation
            scrub: 0.5, // Adjust the scrub speed
        },

        // Spacer 5 animations (model stays on the screen)
        {
            target: model.position,
            values: { x: 0, y: 0, z: -1 },
            target2: model.rotation,
            values2: { x: 1, y: Math.PI, z: 0 }, // Model continues to stay in the original orientation
            scrub: 0.5, // Adjust the scrub speed
        },
    ];

    // Define animations for the sections (hide the model within sections)
    const sectionAnimations = [
        // Section 0 animations (move the model out of the section)
        {
            target: model.position,
            values: { x: 5, y: 0, z: -1 }, // Move the model out of view
            target2: model.rotation,
            values2: { x: 0, y: 0, z: 0 }, // Rotates the model 180 degrees
        },
        // Section 1 animations (move the model out of the section)
        {
            target: model.position,
            values: { x: 5, y: 0, z: -1 }, // Move the model out of view
            target2: model.rotation,
            values2: { x: 0, y: 0, z: 0 }, // Rotates the model 180 degrees
        },
        // Section 2 animations (move the model out of the section)
        {
            target: model.position,
            values: { x: 5, y: 0, z: -1 }, // Move the model out of view
            target2: model.rotation,
            values2: { x: 0, y: 0, z: 0 }, // Rotates the model 180 degrees
        },
        // Section 3 animations (move the model out of the section)
        {
            target: model.position,
            values: { x: 5, y: 0, z: -1 }, // Move the model out of view
            target2: model.rotation,
            values2: { x: 0, y: 0, z: 0 }, // Rotates the model 180 degrees
        },
        // Section 4 animations (move the model out of the section)
        {
            target: model.position,
            values: { x: 5, y: 0, z: -1 }, // Move the model out of view
            target2: model.rotation,
            values2: { x: 0, y: 0, z: 0 }, // Rotates the model 180 degrees
        },
    ];

    const mobileAnims = [];
    for (let i = 0; i < spacerAnimations.length; i++) {
        mobileAnims.push(spacerAnimations[i])
        mobileAnims.push(sectionAnimations[i])
    }

    mobileAnims.forEach((animation, sectionIndex) => {
        console.log((sectionIndex % 2 == 0 ?
            `.spacer:nth-child(${Math.floor(sectionIndex) + 2})` :
            `.section:nth-child(${Math.floor(sectionIndex) + 2})`));

        const triggerElement = (sectionIndex % 2 == 0 ?
            document.querySelector(`.spacer:nth-child(${Math.floor(sectionIndex + 2)})`) :
            document.querySelector(`.section:nth-child(${Math.floor(sectionIndex) + 2})`));

        console.log(triggerElement);

        if (triggerElement) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement, // Trigger on sections
                    start: "top center",
                    end: `.section:nth-child(${sectionIndex + 2})`, // End animation when reaching the next section
                    scrub: 0.1,
                },
            });

            tl.to(animation.target, {
                ...animation.values,
                duration: 1,
            });

            if (animation.target2) {
                tl.to(animation.target2, {
                    ...animation.values2,
                    duration: 1,
                    delay: -1,
                });
            }
        }
    });
    // setInterval(() => console.log(model.position), 500);
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
