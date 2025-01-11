import * as THREE from 'three';
import { createBaseCharacter } from './base-character.js';

export function createOrangeCharacter() {
    const color = new THREE.Color(0xFF4500).convertSRGBToLinear();
    const group = createBaseCharacter(color);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 140,
        specular: 0xFFAA88,
        emissive: 0x441100,
        emissiveIntensity: 0.2
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);

    // Eyes
    const eyeGroup = new THREE.Group();
    eyeGroup.position.set(0, 0.1, 0.4);

    const eyeWhiteGeometry = new THREE.PlaneGeometry(0.2, 0.1);
    const eyeWhiteMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xFFFFFF,
        side: THREE.DoubleSide 
    });
    const leftEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
    leftEyeWhite.position.x = -0.15;
    const rightEyeWhite = leftEyeWhite.clone();
    rightEyeWhite.position.x = 0.15;

    const eyeBlackGeometry = new THREE.PlaneGeometry(0.2, 0.05);
    const eyeBlackMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x000000,
        side: THREE.DoubleSide 
    });
    const leftEyeBlack = new THREE.Mesh(eyeBlackGeometry, eyeBlackMaterial);
    leftEyeBlack.position.set(-0.15, -0.025, 0.01);
    const rightEyeBlack = leftEyeBlack.clone();
    rightEyeBlack.position.x = 0.15;

    eyeGroup.add(leftEyeWhite, rightEyeWhite, leftEyeBlack, rightEyeBlack);
    head.add(eyeGroup);

    // Mouth
    const mouthGeometry = new THREE.PlaneGeometry(0.25, 0.05);
    const mouthMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x000000,
        side: THREE.DoubleSide 
    });
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, -0.1, 0.4);
    head.add(mouth);

    // Headphones
    const headphonesGroup = new THREE.Group();

    const headbandGeometry = new THREE.TorusGeometry(0.55, 0.04, 16, 32, Math.PI);
    const headphonesMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFF6B00,
        shininess: 80
    });
    const headband = new THREE.Mesh(headbandGeometry, headphonesMaterial);
    headband.rotation.x = Math.PI / 2;
    headphonesGroup.add(headband);

    const earPieceGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.1, 32);
    const leftEarPiece = new THREE.Mesh(earPieceGeometry, headphonesMaterial);
    leftEarPiece.position.x = -0.55;
    leftEarPiece.rotation.z = Math.PI / 2;
    const rightEarPiece = leftEarPiece.clone();
    rightEarPiece.position.x = 0.55;
    headphonesGroup.add(leftEarPiece, rightEarPiece);

    head.add(headphonesGroup);

    // Antennae
    const antennaStemGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.25, 32);
    const antennaTipGeometry = new THREE.SphereGeometry(0.075, 32, 32);
    const antennaMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 100
    });

    const leftAntenna = new THREE.Group();
    const leftAntennaStem = new THREE.Mesh(antennaStemGeometry, antennaMaterial);
    const leftAntennaTip = new THREE.Mesh(antennaTipGeometry, antennaMaterial);
    leftAntennaTip.position.y = 0.15;
    leftAntenna.add(leftAntennaStem);
    leftAntenna.add(leftAntennaTip);
    leftAntenna.position.set(-0.25, 0.6, 0);
    leftAntenna.rotation.z = 0.3;
    head.add(leftAntenna);

    const rightAntenna = leftAntenna.clone();
    rightAntenna.position.set(0.25, 0.6, 0);
    rightAntenna.rotation.z = -0.3;
    head.add(rightAntenna);

    return group;
}
