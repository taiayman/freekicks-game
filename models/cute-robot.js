import * as THREE from 'three';

export async function createCuteRobot() {
    const robotGroup = new THREE.Group();

    // Table (New Addition)
    const table = createTable();
    table.position.y = 1;
    robotGroup.add(table);

    // Computer Head (Monitor)
    const computerHead = createComputerHead();
    computerHead.position.y = 2.0;
    robotGroup.add(computerHead);

    // Rainbow Cap
    const { capGroup, propellerGroup } = createRainbowCap();
    capGroup.position.y = 2.8;
    robotGroup.add(capGroup);

    // Power Cable
    const cable = createCable();
    cable.position.y = 2.0;
    robotGroup.add(cable);

    // Add animation property
    robotGroup.propeller = propellerGroup;

    return robotGroup;
}

function createTable() {
    const tableGroup = new THREE.Group();
    
    // Table top with wood grain material
    const tableTopGeometry = new THREE.BoxGeometry(3, 0.2, 1.5);
    const tableTopMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8B4513,
        specular: 0x222222,
        shininess: 10
    });
    const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
    
    // Table legs
    const legGeometry = new THREE.BoxGeometry(0.2, 2, 0.2);
    const legMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8B4513,
        specular: 0x222222,
        shininess: 10
    });
    
    // Create four legs with positions
    const positions = [
        [-1.3, -1, 0.6],
        [1.3, -1, 0.6],
        [-1.3, -1, -0.6],
        [1.3, -1, -0.6]
    ];
    
    positions.forEach(pos => {
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.position.set(...pos);
        tableGroup.add(leg);
    });
    
    tableGroup.add(tableTop);
    return tableGroup;
}

function createComputerHead() {
    const computerGroup = new THREE.Group();
    
    // Main monitor body
    const monitorGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.3);
    const monitorMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x000000,
        specular: 0x444444,
        shininess: 30
    });
    const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
    
    // Screen frame
    const frameGeometry = new THREE.BoxGeometry(1.3, 1.3, 0.28);
    const frameMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xCCCCCC,
        specular: 0xFFFFFF,
        shininess: 50
    });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.z = 0.01;
    
    // Eyes
    const eyeGeometry = new THREE.CircleGeometry(0.15, 32);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    
    leftEye.position.set(-0.3, 0.1, 0.16);
    rightEye.position.set(0.3, 0.1, 0.16);
    
    // Triangle mouth/beak
    const beakShape = new THREE.Shape();
    beakShape.moveTo(0, 0);
    beakShape.lineTo(-0.2, -0.2);
    beakShape.lineTo(0.2, -0.2);
    beakShape.lineTo(0, 0);
    
    const beakGeometry = new THREE.ShapeGeometry(beakShape);
    const beakMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const beak = new THREE.Mesh(beakGeometry, beakMaterial);
    beak.position.set(0, -0.2, 0.16);

    computerGroup.add(monitor, frame, leftEye, rightEye, beak);
    return computerGroup;
}

function createRainbowCap() {
    const capGroup = new THREE.Group();
    
    // Base of the cap
    const colors = [0xFF0000, 0xFFFF00, 0x0000FF, 0x00FF00]; // Red, Yellow, Blue, Green
    const segmentSize = Math.PI / 2;
    
    for(let i = 0; i < 4; i++) {
        const geometry = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 8, 1, true, i * segmentSize, segmentSize);
        const material = new THREE.MeshPhongMaterial({ 
            color: colors[i],
            specular: 0xFFFFFF,
            shininess: 30
        });
        const segment = new THREE.Mesh(geometry, material);
        capGroup.add(segment);
    }
    
    // Propeller
    const propellerGroup = new THREE.Group();
    
    // Center piece
    const centerGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 16);
    const centerMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
    const center = new THREE.Mesh(centerGeometry, centerMaterial);
    center.position.y = 0.2;
    
    // Blades
    const bladeGeometry = new THREE.BoxGeometry(0.6, 0.1, 0.1);
    const bladeMaterial = new THREE.MeshPhongMaterial({ color: 0x0000FF });
    
    const blade1 = new THREE.Mesh(bladeGeometry, bladeMaterial);
    const blade2 = new THREE.Mesh(bladeGeometry, bladeMaterial);
    
    blade1.position.y = 0.2;
    blade2.position.y = 0.2;
    blade2.rotation.y = Math.PI / 2;
    
    propellerGroup.add(center, blade1, blade2);
    capGroup.add(propellerGroup);
    
    return { capGroup, propellerGroup };
}

function createCable() {
    const points = [];
    const segments = 20;
    
    for(let i = 0; i <= segments; i++) {
        const y = -i / segments * 2;
        const x = Math.sin(i * 0.5) * 0.2;
        points.push(new THREE.Vector3(x, y, 0));
    }
    
    const cableGeometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        segments,
        0.05,
        16,
        false
    );
    
    const cableMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x000000,
        specular: 0x222222,
        shininess: 30
    });
    
    return new THREE.Mesh(cableGeometry, cableMaterial);
}

