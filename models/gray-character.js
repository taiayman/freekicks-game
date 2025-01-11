import * as THREE from 'three';
import { createBaseCharacter } from './base-character.js';

export function createGrayCharacter() {
    const color = new THREE.Color(0x808080).convertSRGBToLinear();
    const group = createBaseCharacter(color);

    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 120,
        specular: 0x666666,
        emissive: 0x222222,
        emissiveIntensity: 0.1
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);

    const propellerGeometry = new THREE.BoxGeometry(0.8, 0.05, 0.1);
    const propellerMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });
    const propeller = new THREE.Mesh(propellerGeometry, propellerMaterial);
    propeller.position.y = 0.4;
    head.add(propeller);

    return group;
} 