import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

interface SimulationProps {
container: THREE.Vector3;
items: {position: THREE.Vector3, size: THREE.Vector3}[];
}


export const Simulation = (props: SimulationProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 700 / 500, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer( { alpha: true } );

        renderer.setSize(700, 500);
        console.log(renderer.domElement)
        containerRef.current?.appendChild(renderer.domElement);


        const controls = new OrbitControls( camera, renderer.domElement );

        camera.position.z = 50;
        camera.position.y = 10;
        camera.position.x = -20;

        controls.update();

        const light = new THREE.DirectionalLight( 0xffffff, 1 );
        light.position.set( 0, 1, 3 ); //default; light shining from top
        light.castShadow = true; // default false
        scene.add( light );

const container = new THREE.BoxGeometry(props.container.x,props.container.y,props.container.z);

        //const geometry = new THREE.BoxGeometry(3,2,1);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, wireframe: true });
        const cube = new THREE.Mesh(container, material);
        const itemList: { itemMesh: THREE.Mesh, startTime: number, duration: number, startPosition: THREE.Vector3, endPosition: THREE.Vector3 }[] = [];
        props.items.forEach((item) => {
            const itemGeometry = new THREE.BoxGeometry(item.size.x, item.size.y, item.size.z);
            itemGeometry.translate(item.position.x, item.position.y, item.position.z);
            const itemMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const itemMesh = new THREE.Mesh(itemGeometry, itemMaterial);
            const startTime = Date.now();
            const duration = Math.random() * 1000 + 3000;
            const startPosition = item.position.clone().sub(new THREE.Vector3(0, Math.random()*200+30, 0));
            const endPosition = item.position;
            console.log("startPosition", startPosition)
            console.log("endPosition", endPosition)
            itemList.push({ itemMesh, startTime, duration, startPosition, endPosition });
            scene.add(itemMesh);
        });
        scene.add(cube);

        const getAnimationValue = (item: {startTime: number, duration: number, startPosition: THREE.Vector3, endPosition: THREE.Vector3}) => {
            const currentTime = Date.now() - item.startTime;
            const progress = currentTime / item.duration;
            if (progress >= 1) {
              return item.endPosition;
            }
            //console.log("progress", progress)
            const easedProgress = easeInOutSine(progress);
            //console.log("easedProgress", easedProgress)
            const temp = item.endPosition.sub(item.startPosition).multiplyScalar(easedProgress);
            //console.log("temp", temp)
            const currentValue = item.startPosition.add(temp);
            return currentValue;
          }
        const easeInOutSine = (x: number) => {
            return -(Math.cos(Math.PI * x) - 1) / 2;
          }

        const animateItems = () => {
            itemList.forEach((item) => {
                const currentValue = getAnimationValue(item);

                //console.log(currentValue);
                item.itemMesh.position.set(currentValue.x, currentValue.y, currentValue.z);
                //item.itemMesh.trans = currentValue;
            })
        }

        const renderScene = () => {
            //cube.rotation.y += 0.01;
            //cube.rotation.y += 0.01;
            animateItems()
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
        };

        renderScene();
    }, [])
    return <div ref={containerRef} />;

}