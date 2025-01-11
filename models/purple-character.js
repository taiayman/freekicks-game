import * as THREE from 'three';

export function createPurpleCharacter() {
    const group = new THREE.Group();
    const color = 0x800080;

    const purpleHeadGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const purpleHeadMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 70
    });
    const purpleHead = new THREE.Mesh(purpleHeadGeometry, purpleHeadMaterial);
    purpleHead.position.y = 1.5;
    group.add(purpleHead);

    // Eyes
    const purpleEyeOuterGeometry = new THREE.CircleGeometry(0.15, 32);
    const purpleEyeOuterMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const purpleLeftEyeOuter = new THREE.Mesh(purpleEyeOuterGeometry, purpleEyeOuterMaterial);
    purpleLeftEyeOuter.position.set(-0.2, 0.1, 0.5);
    purpleLeftEyeOuter.rotation.x = -0.3;
    purpleHead.add(purpleLeftEyeOuter);
    const purpleRightEyeOuter = new THREE.Mesh(purpleEyeOuterGeometry, purpleEyeOuterMaterial);
    purpleRightEyeOuter.position.set(0.2, 0.1, 0.5);
    purpleRightEyeOuter.rotation.x = -0.3;
    purpleHead.add(purpleRightEyeOuter);

    const purpleEyeInnerGeometry = new THREE.CircleGeometry(0.1, 32);
    const purpleEyeInnerMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const purpleLeftEyeInner = new THREE.Mesh(purpleEyeInnerGeometry, purpleEyeInnerMaterial);
    purpleLeftEyeInner.position.set(-0.2, 0.1, 0.51);
    purpleLeftEyeInner.rotation.x = -0.3;
    purpleHead.add(purpleLeftEyeInner);
    const purpleRightEyeInner = new THREE.Mesh(purpleEyeInnerGeometry, purpleEyeInnerMaterial);
    purpleRightEyeInner.position.set(0.2, 0.1, 0.51);
    purpleRightEyeInner.rotation.x = -0.3;
    purpleHead.add(purpleRightEyeInner);

    // Horns
    const purpleHornGeometry = new THREE.ConeGeometry(0.08, 0.4, 16);
    const purpleHornMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 80
    });
    const purpleLeftHorn = new THREE.Mesh(purpleHornGeometry, purpleHornMaterial);
    purpleLeftHorn.position.set(-0.25, 0.5, 0);
    purpleLeftHorn.rotation.z = 0.2;
    purpleHead.add(purpleLeftHorn);
    const purpleRightHorn = new THREE.Mesh(purpleHornGeometry, purpleHornMaterial);
    purpleRightHorn.position.set(0.25, 0.5, 0);
    purpleRightHorn.rotation.z = -0.2;
    purpleHead.add(purpleRightHorn);

    // Fins
    const purpleFinGeometry = new THREE.ConeGeometry(0.2, 0.4, 4, 1);
    const purpleFinMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 70
    });
    const purpleLeftFin = new THREE.Mesh(purpleFinGeometry, purpleFinMaterial);
    purpleLeftFin.position.set(-0.5, 0, 0);
    purpleLeftFin.rotation.z = Math.PI / 2;
    purpleLeftFin.scale.set(1, 0.5, 1);
    purpleHead.add(purpleLeftFin);
    const purpleRightFin = new THREE.Mesh(purpleFinGeometry, purpleFinMaterial);
    purpleRightFin.position.set(0.5, 0, 0);
    purpleRightFin.rotation.z = -Math.PI / 2;
    purpleRightFin.scale.set(1, 0.5, 1);
    purpleHead.add(purpleRightFin);

    // Mouth
    const purpleMouthGeometry = new THREE.BoxGeometry(0.2, 0.03, 0.1);
    const purpleMouthMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    const purpleMouth = new THREE.Mesh(purpleMouthGeometry, purpleMouthMaterial);
    purpleMouth.position.set(0, -0.1, 0.5);
    purpleHead.add(purpleMouth);

    // Body
    const purpleBodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1.2, 32);
    const purpleBodyMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 70 
    });
    const purpleBody = new THREE.Mesh(purpleBodyGeometry, purpleBodyMaterial);
    purpleBody.position.y = 0.6;
    group.add(purpleBody);

    // Legs
    const purpleLegGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 16);
    const purpleLegMaterial = new THREE.MeshPhongMaterial({ color: color });
    const purpleLeftLeg = new THREE.Mesh(purpleLegGeometry, purpleLegMaterial);
    purpleLeftLeg.position.set(-0.2, 0.25, 0);
    group.add(purpleLeftLeg);
    const purpleRightLeg = new THREE.Mesh(purpleLegGeometry, purpleLegMaterial);
    purpleRightLeg.position.set(0.2, 0.25, 0);
    group.add(purpleRightLeg);

    // Shadow circle
    const purpleCircleGeometry = new THREE.CircleGeometry(0.5, 32);
    const purpleCircleMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });
    const purpleCircle = new THREE.Mesh(purpleCircleGeometry, purpleCircleMaterial);
    purpleCircle.rotation.x = -Math.PI / 2;
    purpleCircle.position.y = 0;
    group.add(purpleCircle);

    return group;
} 