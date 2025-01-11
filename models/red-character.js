import * as THREE from 'three';
import { createBaseCharacter } from './base-character.js';

export function createRedCharacter() {
    const color = new THREE.Color(0xFF0000).convertSRGBToLinear();
    const group = createBaseCharacter(color);

    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 150,
        specular: 0xFFFFFF,
        emissive: 0x330000,
        emissiveIntensity: 0.3
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);

    const crownGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.3, 5);
    const crownMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
    const crown = new THREE.Mesh(crownGeometry, crownMaterial);
    crown.position.y = 0.4;
    head.add(crown);

    return group;
} 