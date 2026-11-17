import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ProductCanvas({ scrollProgress = 0, colorFinish = 'titanium', activeHotspot = null }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const productGroupRef = useRef(null);
  const leftCupRef = useRef(null);
  const rightCupRef = useRef(null);
  const leftDriverRef = useRef(null);
  const rightDriverRef = useRef(null);
  const mouseLightRef = useRef(null);
  const materialsRef = useRef({});
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Luxury Metal & Material Profiles
  const finishes = {
    titanium: {
      cup: 0x18181c,
      cushion: 0x0c0c0e,
      steel: 0xd4a373, // Champagne titanium arms
      driver: 0xe5b887,
      driverEmissive: 0x3d2814,
      lightAccent: 0xf3d9b8,
      metalness: 0.94,
      roughness: 0.22,
    },
    champagne: {
      cup: 0x24201a,
      cushion: 0x12100d,
      steel: 0xdfb17b,
      driver: 0xf5cf98,
      driverEmissive: 0x472d11,
      lightAccent: 0xffe6c2,
      metalness: 0.95,
      roughness: 0.2,
    },
    starlight: {
      cup: 0xd2d0cb,
      cushion: 0x202024,
      steel: 0xf0efe8,
      driver: 0xfffcf5,
      driverEmissive: 0x403d38,
      lightAccent: 0xfffaed,
      metalness: 0.98,
      roughness: 0.12,
    },
    bronze: {
      cup: 0x1c1714,
      cushion: 0x0f0c0a,
      steel: 0xb88358,
      driver: 0xcc9262,
      driverEmissive: 0x381e0f,
      lightAccent: 0xebb58a,
      metalness: 0.92,
      roughness: 0.24,
    }
  };

  const currentTransform = useRef({
    posX: 0,
    posY: 0,
    posZ: 0,
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    explosion: 0,
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup with warm dark fog
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x070709, 0.05);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.2);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Warm Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xf5eedc, 0.9);
    scene.add(ambientLight);

    // Key Light: 3400K Warm Tungsten Studio light
    const keyLight = new THREE.DirectionalLight(0xfff5ea, 3.2);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);

    // Soft Alabaster Fill Light
    const fillLight = new THREE.DirectionalLight(0xe8e2d8, 2.0);
    fillLight.position.set(-6, -3, 3);
    scene.add(fillLight);

    // Crisp Starlight Rim Light
    const backLight = new THREE.DirectionalLight(0xfffaed, 3.0);
    backLight.position.set(0, 4, -7);
    scene.add(backLight);

    // Subtle warm mouse light
    const mouseLight = new THREE.PointLight(0xf3d9b8, 3.2, 12);
    mouseLight.position.set(0, 0, 4);
    scene.add(mouseLight);
    mouseLightRef.current = mouseLight;

    // 5. Build Model
    const initialFinish = finishes[colorFinish] || finishes.titanium;

    const titaniumMaterial = new THREE.MeshPhysicalMaterial({
      color: initialFinish.cup,
      metalness: initialFinish.metalness,
      roughness: initialFinish.roughness,
      clearcoat: 0.92,
      clearcoatRoughness: 0.12,
    });

    const steelMaterial = new THREE.MeshStandardMaterial({
      color: initialFinish.steel,
      metalness: 0.98,
      roughness: 0.12,
    });

    const cushionMaterial = new THREE.MeshStandardMaterial({
      color: initialFinish.cushion,
      roughness: 0.94,
      metalness: 0.03,
    });

    const driverMaterial = new THREE.MeshPhysicalMaterial({
      color: initialFinish.driver,
      emissive: initialFinish.driverEmissive,
      emissiveIntensity: 0.8,
      metalness: 0.92,
      roughness: 0.2,
    });

    materialsRef.current = {
      titanium: titaniumMaterial,
      steel: steelMaterial,
      cushion: cushionMaterial,
      driver: driverMaterial,
    };

    const productGroup = new THREE.Group();
    productGroupRef.current = productGroup;
    scene.add(productGroup);

    // Headband curves
    const headbandCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-1.4, 0.4, 0),
      new THREE.Vector3(0, 1.85, 0),
      new THREE.Vector3(1.4, 0.4, 0)
    );
    const headbandGeo = new THREE.TubeGeometry(headbandCurve, 64, 0.08, 16, false);
    const headbandMesh = new THREE.Mesh(headbandGeo, steelMaterial);
    productGroup.add(headbandMesh);

    const canopyCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-1.0, 0.9, 0),
      new THREE.Vector3(0, 1.95, 0),
      new THREE.Vector3(1.0, 0.9, 0)
    );
    const canopyGeo = new THREE.TubeGeometry(canopyCurve, 40, 0.14, 16, false);
    const canopyMesh = new THREE.Mesh(canopyGeo, cushionMaterial);
    productGroup.add(canopyMesh);

    // Ear Cups
    function createEarCup(isLeft) {
      const cupGroup = new THREE.Group();
      const sideMultiplier = isLeft ? -1 : 1;

      const stemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 16);
      const stemMesh = new THREE.Mesh(stemGeo, steelMaterial);
      stemMesh.position.set(0, 0.35, 0);
      cupGroup.add(stemMesh);

      const cupGeo = new THREE.CylinderGeometry(0.82, 0.78, 0.45, 48);
      cupGeo.rotateZ(Math.PI / 2);
      const cupMesh = new THREE.Mesh(cupGeo, titaniumMaterial);
      cupGroup.add(cupMesh);

      const dialGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.12, 24);
      dialGeo.rotateZ(Math.PI / 2);
      const dialMesh = new THREE.Mesh(dialGeo, steelMaterial);
      dialMesh.position.set(0, 0.48, -0.2);
      cupGroup.add(dialMesh);

      const cushionGeo = new THREE.TorusGeometry(0.68, 0.18, 24, 48);
      cushionGeo.rotateY(Math.PI / 2);
      const cushionMesh = new THREE.Mesh(cushionGeo, cushionMaterial);
      cushionMesh.position.set(sideMultiplier * -0.25, 0, 0);
      cupGroup.add(cushionMesh);

      const driverGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.06, 32);
      driverGeo.rotateZ(Math.PI / 2);
      const driverMesh = new THREE.Mesh(driverGeo, driverMaterial);
      driverMesh.position.set(sideMultiplier * -0.15, 0, 0);
      cupGroup.add(driverMesh);

      cupGroup.position.set(sideMultiplier * 1.55, -0.1, 0);
      cupGroup.rotation.y = sideMultiplier * 0.1;

      return { cupGroup, driverMesh };
    }

    const left = createEarCup(true);
    leftCupRef.current = left.cupGroup;
    leftDriverRef.current = left.driverMesh;
    productGroup.add(left.cupGroup);

    const right = createEarCup(false);
    rightCupRef.current = right.cupGroup;
    rightDriverRef.current = right.driverMesh;
    productGroup.add(right.cupGroup);

    // Warm Micro-Dust Atmosphere (Alabaster floating specs)
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 12 - 1;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe8dfd1,
      size: 0.026,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Event Handlers
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.current.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Render Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

      if (mouseLightRef.current) {
        mouseLightRef.current.position.x = mouse.current.x * 4;
        mouseLightRef.current.position.y = mouse.current.y * 3;
      }

      const t = currentTransform.current;
      if (productGroupRef.current) {
        const floatY = Math.sin(elapsed * 1.4) * 0.07;

        productGroupRef.current.position.x += (t.posX + mouse.current.x * 0.16 - productGroupRef.current.position.x) * 0.08;
        productGroupRef.current.position.y += (t.posY + floatY + mouse.current.y * 0.16 - productGroupRef.current.position.y) * 0.08;
        productGroupRef.current.position.z += (t.posZ - productGroupRef.current.position.z) * 0.08;

        productGroupRef.current.rotation.x += (t.rotX + mouse.current.y * 0.1 - productGroupRef.current.rotation.x) * 0.08;
        productGroupRef.current.rotation.y += (t.rotY + mouse.current.x * 0.2 - productGroupRef.current.rotation.y) * 0.08;
        productGroupRef.current.rotation.z += (t.rotZ - productGroupRef.current.rotation.z) * 0.08;
      }

      if (leftCupRef.current && rightCupRef.current) {
        const baseLeftX = -1.55;
        const baseRightX = 1.55;
        const explodeDistance = t.explosion * 0.85;

        leftCupRef.current.position.x += (baseLeftX - explodeDistance - leftCupRef.current.position.x) * 0.08;
        rightCupRef.current.position.x += (baseRightX + explodeDistance - rightCupRef.current.position.x) * 0.08;
      }

      if (leftDriverRef.current && rightDriverRef.current) {
        const driverOffset = t.explosion * 0.45;
        leftDriverRef.current.position.x = -0.15 - driverOffset;
        rightDriverRef.current.position.x = 0.15 + driverOffset;
      }

      particles.rotation.y = elapsed * 0.012;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Materials when colorFinish changes
  useEffect(() => {
    const finish = finishes[colorFinish] || finishes.titanium;
    const mats = materialsRef.current;
    if (!mats.titanium) return;

    mats.titanium.color.setHex(finish.cup);
    mats.titanium.metalness = finish.metalness;
    mats.titanium.roughness = finish.roughness;
    mats.steel.color.setHex(finish.steel);
    mats.cushion.color.setHex(finish.cushion);
    mats.driver.color.setHex(finish.driver);
    mats.driver.emissive.setHex(finish.driverEmissive);

    if (mouseLightRef.current) {
      mouseLightRef.current.color.setHex(finish.lightAccent);
    }
  }, [colorFinish]);

  // Scroll Target Keyframes
  useEffect(() => {
    const t = currentTransform.current;
    const p = Math.max(0, Math.min(1, scrollProgress));

    if (p <= 0.20) {
      const stageP = p / 0.20;
      t.posX = 0;
      t.posY = 0;
      t.posZ = 0;
      t.rotX = 0.05;
      t.rotY = stageP * 0.6;
      t.rotZ = 0;
      t.explosion = 0;
    } else if (p <= 0.40) {
      const stageP = (p - 0.20) / 0.20;
      t.posX = 1.6 * stageP;
      t.posY = -0.2 * stageP;
      t.posZ = 0.5 * stageP;
      t.rotX = 0.15;
      t.rotY = 0.6 + stageP * (Math.PI / 2);
      t.rotZ = -0.1 * stageP;
      t.explosion = 0;
    } else if (p <= 0.60) {
      const stageP = (p - 0.40) / 0.20;
      t.posX = 1.6 - stageP * 3.2;
      t.posY = -0.2 + stageP * 0.3;
      t.posZ = 0.5 + stageP * 0.4;
      t.rotX = 0.3 * stageP;
      t.rotY = (0.6 + Math.PI / 2) - stageP * (Math.PI / 1.5);
      t.rotZ = 0.15 * stageP;
      t.explosion = stageP;
    } else if (p <= 0.72) {
      // Re-assembling and centering as user reaches What's In The Box
      const stageP = (p - 0.60) / 0.12;
      t.posX = -1.6 + stageP * 1.6;
      t.posY = 0.1 - stageP * 0.3;
      t.posZ = 0.9 - stageP * 0.4;
      t.rotX = 0.3 - stageP * 0.2;
      t.rotY = (0.6 + Math.PI / 2 - Math.PI / 1.5) + stageP * (Math.PI * 1.2);
      t.rotZ = 0;
      t.explosion = 1 - stageP;
    } else {
      // Stays assembled, resting in beauty angle behind the preorder form
      t.posX = 0;
      t.posY = -0.2;
      t.posZ = 0.5;
      t.rotX = 0.1;
      t.rotY = Math.PI * 0.8;
      t.rotZ = 0;
      t.explosion = 0;
    }
  }, [scrollProgress]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
}
