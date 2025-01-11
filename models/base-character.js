import * as THREE from 'three';

export function createBaseCharacter(color) {
    const group = new THREE.Group();
    
    const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 100,
        specular: 0x444444,
        emissive: color,
        emissiveIntensity: 0.1
    });

    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    group.add(body);

    const legGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.5, 8);
    const legMaterial = new THREE.MeshPhongMaterial({ color: color });

    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, 0.25, 0);
    group.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, 0.25, 0);
    group.add(rightLeg);

    const circleGeometry = new THREE.CircleGeometry(0.5, 32);
    const circleMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.rotation.x = -Math.PI / 2;
    circle.position.y = 0;
    group.add(circle);

    return group;
} 