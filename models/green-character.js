import * as THREE from 'three';
import { createBaseCharacter } from './base-character.js';

export function createGreenCharacter() {
    const color = new THREE.Color(0x00FF00).convertSRGBToLinear();
    const group = createBaseCharacter(color);

    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 130,
        specular: 0x66FF66,
        emissive: 0x003300,
        emissiveIntensity: 0.2
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);

    const flowerPositions = [
        { x: 0.3, y: 0.3, z: 0 },
        { x: -0.3, y: 0.3, z: 0 },
        { x: 0, y: 0.5, z: 0 }
    ];
    flowerPositions.forEach(pos => {
        const flowerGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const flowerMaterial = new THREE.MeshPhongMaterial({ color: 0xFF69B4 });
        const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);
        flower.position.set(pos.x, pos.y, pos.z);
        head.add(flower);
    });

    return group;
} 