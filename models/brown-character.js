import * as THREE from 'three';
import { createBaseCharacter } from './base-character.js';

export function createBrownCharacter() {
    const color = new THREE.Color(0x8B4513).convertSRGBToLinear();
    const group = createBaseCharacter(color);

    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 90,
        specular: 0x442211,
        emissive: 0x221100,
        emissiveIntensity: 0.15
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);

    const fezGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 16);
    const fezMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
    const fez = new THREE.Mesh(fezGeometry, fezMaterial);
    fez.position.y = 0.4;
    head.add(fez);

    return group;
} 