import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const DisplayContainer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        //const containerWidth = containerRef.current?.parentElement?.clientWidth;
        //console.log(containerWidth);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer( { alpha: true } );

        renderer.setSize(500, 500);
        console.log(renderer.domElement)
        containerRef.current?.appendChild(renderer.domElement);
        camera.position.z = 5;
        const light = new THREE.DirectionalLight( 0xffffff, 1 );
        light.position.set( 0, 1, 3 ); //default; light shining from top
        light.castShadow = true; // default false
        scene.add( light );

        const geometry = new THREE.BoxGeometry(3,2,1);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        cube.receiveShadow = true;

        scene.add(cube);

        const renderScene = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
        };

        renderScene();
    }, []);

    return (<>
    <div>
    {/* <img src="https://www.discovercontainers.com/wp-content/uploads/20-GP-dimensions.png" alt="Video Feed" /> */}
    </div>
    </>);
};
