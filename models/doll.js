import * as THREE from 'three';

export function createDoll() {
  const dollGroup = new THREE.Group();

  // ---------------------------------------------------------
  // HEAD
  // ---------------------------------------------------------
  const headGeometry = new THREE.SphereGeometry(1.2, 64, 64);
  const headMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 100,
    specular: 0x555555,
    emissive: 0xff0000,
    emissiveIntensity: 0.2,
    flatShading: false
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 2.5; // Place head above origin
  dollGroup.add(head);

  // ---------------------------------------------------------
  // EYES
  // ---------------------------------------------------------
  const eyeWhiteGeometry = new THREE.SphereGeometry(0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI);
  const eyeWhiteMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess: 50
  });

  // Left eye group
  const leftEyeGroup = new THREE.Group();
  leftEyeGroup.position.set(-0.5, 2.6, 1.1);
  leftEyeGroup.rotation.x = Math.PI * 0.1;
  const leftEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
  leftEyeGroup.add(leftEyeWhite);

  // Right eye group
  const rightEyeGroup = new THREE.Group();
  rightEyeGroup.position.set(0.5, 2.6, 1.1);
  rightEyeGroup.rotation.x = Math.PI * 0.1;
  const rightEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
  rightEyeGroup.add(rightEyeWhite);

  // Add pupils
  const pupilGeometry = new THREE.CircleGeometry(0.15, 32, 0, Math.PI); 
  const pupilMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide
  });

  // Left pupil
  const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  leftPupil.position.z = 0.41;
  leftPupil.rotation.y = Math.PI;
  leftPupil.rotation.z = Math.PI; 
  leftEyeGroup.add(leftPupil);

  // Right pupil
  const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  rightPupil.position.z = 0.41;
  rightPupil.rotation.y = Math.PI;
  rightPupil.rotation.z = Math.PI; 
  rightEyeGroup.add(rightPupil);

  // Eyelids
  const eyelidGeometry = new THREE.SphereGeometry(0.41, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5);
  const eyelidMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
    flatShading: false
  });

  const leftEyelid = new THREE.Mesh(eyelidGeometry, eyelidMaterial);
  leftEyelid.position.z = 0.01;
  leftEyeGroup.add(leftEyelid);

  const rightEyelid = new THREE.Mesh(eyelidGeometry, eyelidMaterial);
  rightEyelid.position.z = 0.01;
  rightEyeGroup.add(rightEyelid);

  // Add eyes to the dollGroup (not to the head)
  dollGroup.add(leftEyeGroup);
  dollGroup.add(rightEyeGroup);

  // ---------------------------------------------------------
  // MOUTH
  // ---------------------------------------------------------
  const mouthGeometry = new THREE.BoxGeometry(0.6, 0.08, 0.1);
  const mouthMaterial = new THREE.MeshPhongMaterial({
    color: 0x000000,
    flatShading: false
  });
  const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
  mouth.position.set(0, 2.1, 1.15);
  mouth.rotation.x = Math.PI * 0.02;
  dollGroup.add(mouth);

  // ---------------------------------------------------------
  // HORNS
  // ---------------------------------------------------------
  const hornGeometry = new THREE.ConeGeometry(0.3, 1, 32);
  const hornMaterial = new THREE.MeshPhongMaterial({
    color: 0x8B0000,
    shininess: 70,
    specular: 0x555555
  });

  // Create groups for horns to control their pivot point
  const leftHornGroup = new THREE.Group();
  leftHornGroup.position.set(-0.7, 3.5, 0); // Position the group at the base of the horn
  dollGroup.add(leftHornGroup);

  const rightHornGroup = new THREE.Group();
  rightHornGroup.position.set(0.7, 3.5, 0); // Position the group at the base of the horn
  dollGroup.add(rightHornGroup);

  // Left horn - angled outward from the head surface
  const leftHorn = new THREE.Mesh(hornGeometry, hornMaterial);
  leftHorn.position.y = -0.5; // Move the horn down so its base is at the group's origin
  // Rotate so it points outward/up/back a bit
  leftHorn.rotation.set(
    -Math.PI * 0.35,
    -Math.PI * 0.25,
    Math.PI * 0.3
  );
  leftHornGroup.add(leftHorn);

  // Right horn - angled outward from the head surface
  const rightHorn = new THREE.Mesh(hornGeometry, hornMaterial);
  rightHorn.position.y = -0.5; // Move the horn down so its base is at the group's origin
  // Rotate so it points outward/up/back a bit (mirroring the left horn)
  rightHorn.rotation.set(
    -Math.PI * 0.35,
    Math.PI * 0.25,
    -Math.PI * 0.3
  );
  rightHornGroup.add(rightHorn);

  // ---------------------------------------------------------
  // BODY (Triangular prism)
  // ---------------------------------------------------------
  const bodyGeometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    // Front face
    -0.3,  2,  0.3,   // top left
     0.3,  2,  0.3,   // top right
    -1.5, -2,  0.3,   // bottom left
     1.5, -2,  0.3,   // bottom right

    // Back face
    -0.3,  2, -0.3,   // top left
     0.3,  2, -0.3,   // top right
    -1.5, -2, -0.3,   // bottom left
     1.5, -2, -0.3    // bottom right
  ]);

  const indices = new Uint16Array([
    0, 1, 2, 1, 3, 2,       // front
    4, 6, 5, 5, 6, 7,       // back
    0, 2, 4, 4, 2, 6,       // left
    1, 5, 7, 1, 7, 3,       // right
    0, 4, 1, 1, 4, 5,       // top
    2, 3, 6, 3, 7, 6        // bottom
  ]);

  bodyGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  bodyGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
  bodyGeometry.computeVertexNormals();

  const bodyMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 100,
    specular: 0x555555,
    emissive: 0xff0000,
    emissiveIntensity: 0.2,
    flatShading: false
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.y = 0;
  dollGroup.add(body);

  // ---------------------------------------------------------
  // NECK
  // ---------------------------------------------------------
  const neckGeometry = new THREE.CylinderGeometry(0.6, 0.3, 0.5, 32);
  const neck = new THREE.Mesh(neckGeometry, bodyMaterial);
  neck.position.y = 1.8;
  dollGroup.add(neck);

  // ---------------------------------------------------------
  // FINAL TRANSFORM
  // ---------------------------------------------------------
  dollGroup.scale.set(8.5, 8.5, 8.5);
  dollGroup.position.set(0, 3, 145);
  dollGroup.rotation.x = -Math.PI * 0.01;

  return dollGroup;
}