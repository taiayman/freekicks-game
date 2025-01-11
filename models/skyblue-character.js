import * as THREE from 'three';
import { createBaseCharacter } from './base-character.js';

export function createSkyblueCharacter() {
    const color = new THREE.Color(0x87CEEB).convertSRGBToLinear();
    const group = createBaseCharacter(color);

    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 160,
        specular: 0xADD8E6,
        emissive: 0x002244,
        emissiveIntensity: 0.2
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);

    const earGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const earMaterial = new THREE.MeshPhongMaterial({ color: color });
    const leftEar = new THREE.Mesh(earGeometry, earMaterial);
    const rightEar = new THREE.Mesh(earGeometry, earMaterial);
    leftEar.position.set(-0.4, 0.3, 0);
    rightEar.position.set(0.4, 0.3, 0);
    head.add(leftEar);
    head.add(rightEar);

    return group;
} 