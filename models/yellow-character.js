import * as THREE from 'three';

export function createYellowCharacter() {
    const group = new THREE.Group();
    const color = 0xFFD700;

    const robotHeadGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const robotHeadMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 100
    });
    const robotHead = new THREE.Mesh(robotHeadGeometry, robotHeadMaterial);
    robotHead.position.y = 1.3;

    const neckGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.2, 32);
    const neckMaterial = new THREE.MeshPhongMaterial({ color: color });
    const neck = new THREE.Mesh(neckGeometry, neckMaterial);
    neck.position.y = -0.2;
    robotHead.add(neck);
    group.add(robotHead);

    // Eyes
    const eyeOuterGeometry = new THREE.CircleGeometry(0.2, 32);
    const eyeOuterMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const eyeInnerGeometry = new THREE.CircleGeometry(0.15, 32);
    const eyeInnerMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });

    const leftEyeOuter = new THREE.Mesh(eyeOuterGeometry, eyeOuterMaterial);
    const leftEyeInner = new THREE.Mesh(eyeInnerGeometry, eyeInnerMaterial);
    leftEyeOuter.position.set(-0.25, 0.1, 0.5);
    leftEyeInner.position.set(-0.25, 0.1, 0.51);
    robotHead.add(leftEyeOuter);
    robotHead.add(leftEyeInner);

    const rightEyeOuter = new THREE.Mesh(eyeOuterGeometry, eyeOuterMaterial);
    const rightEyeInner = new THREE.Mesh(eyeInnerGeometry, eyeInnerMaterial);
    rightEyeOuter.position.set(0.25, 0.1, 0.5);
    rightEyeInner.position.set(0.25, 0.1, 0.51);
    robotHead.add(rightEyeOuter);
    robotHead.add(rightEyeInner);

    // Smile
    const smileGeometry = new THREE.TorusGeometry(0.2, 0.03, 16, 32, Math.PI);
    const smileMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, -0.1, 0.5);
    smile.rotation.x = Math.PI / 2;
    robotHead.add(smile);

    // Spikes
    const robotSpikeGeometry = new THREE.ConeGeometry(0.1, 0.2, 32);
    const robotSpikeMaterial = new THREE.MeshPhongMaterial({ color: color });
    const leftSpike = new THREE.Mesh(robotSpikeGeometry, robotSpikeMaterial);
    leftSpike.position.set(-0.5, 0, 0);
    leftSpike.rotation.z = Math.PI / 2;
    robotHead.add(leftSpike);
    const rightSpike = new THREE.Mesh(robotSpikeGeometry, robotSpikeMaterial);
    rightSpike.position.set(0.5, 0, 0);
    rightSpike.rotation.z = -Math.PI / 2;
    robotHead.add(rightSpike);

    // Antennae
    const poleGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.4, 16);
    const poleMaterial = new THREE.MeshPhongMaterial({ color: color });
    const leftPole = new THREE.Mesh(poleGeometry, poleMaterial);
    leftPole.position.set(-0.3, 0.5, 0);
    robotHead.add(leftPole);
    const leftBallGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const leftBall = new THREE.Mesh(leftBallGeometry, poleMaterial);
    leftBall.position.set(-0.3, 0.7, 0);
    robotHead.add(leftBall);
    const rightPole = new THREE.Mesh(poleGeometry, poleMaterial);
    rightPole.position.set(0.3, 0.5, 0);
    robotHead.add(rightPole);
    const rightBallGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const rightBall = new THREE.Mesh(rightBallGeometry, poleMaterial);
    rightBall.position.set(0.3, 0.7, 0);
    robotHead.add(rightBall);

    // Body
    const bodyHeight = 1.5;
    const bodyTop = new THREE.CylinderGeometry(0.2, 0.3, bodyHeight * 0.2, 32);
    const bodyMiddle = new THREE.CylinderGeometry(0.3, 0.45, bodyHeight * 0.5, 32);
    const bodyBottom = new THREE.CylinderGeometry(0.45, 0.5, bodyHeight * 0.3, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        shininess: 80
    });
    const topSection = new THREE.Mesh(bodyTop, bodyMaterial);
    topSection.position.y = bodyHeight * 0.5;
    group.add(topSection);
    const middleSection = new THREE.Mesh(bodyMiddle, bodyMaterial);
    middleSection.position.y = bodyHeight * 0.15;
    group.add(middleSection);
    const bottomSection = new THREE.Mesh(bodyBottom, bodyMaterial);
    bottomSection.position.y = bodyHeight * -0.2;
    group.add(bottomSection);

    // Shadow circle
    const circleGeometry = new THREE.CircleGeometry(0.5, 32);
    const circleMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.rotation.x = -Math.PI / 2;
    circle.position.y = bodyHeight * -0.6;
    group.add(circle);

    return group;
} 