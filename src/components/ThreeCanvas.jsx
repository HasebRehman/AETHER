import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ meshType = 'knot', wireframe = false, colorScheme = 'cyan', scrollProgress = 0 }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const mainMeshRef = useRef(null);
  const coreMeshRef = useRef(null);
  const ringsRef = useRef([]);
  const particlesRef = useRef(null);
  const mouseLightRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Color profiles
  const colorMap = {
    cyan: {
      primary: 0x00f2fe,
      secondary: 0x4facfe,
      emissive: 0x003366,
      light: 0x38bdf8,
      particles: 0x7dd3fc,
    },
    emerald: {
      primary: 0x10b981,
      secondary: 0x34d399,
      emissive: 0x064e3b,
      light: 0x6ee7b7,
      particles: 0xa7f3d0,
    },
    amber: {
      primary: 0xf59e0b,
      secondary: 0xfbbf24,
      emissive: 0x78350f,
      light: 0xfcd34d,
      particles: 0xfef3c7,
    },
    violet: {
      primary: 0xa855f7,
      secondary: 0xc084fc,
      emissive: 0x581c87,
      light: 0xd8b4fe,
      particles: 0xf3e8ff,
    }
  };

  const currentColor = colorMap[colorScheme] || colorMap.cyan;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x050508, 0.04);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(currentColor.primary, 2.5);
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    const mouseLight = new THREE.PointLight(currentColor.light, 4, 12);
    mouseLight.position.set(0, 0, 4);
    scene.add(mouseLight);
    mouseLightRef.current = mouseLight;

    // 5. Build Main Object & Inner Core
    createGeometry(scene, meshType, wireframe, currentColor);

    // 6. Orbital Rings
    const rings = [];
    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.TorusGeometry(2.2 + i * 0.45, 0.012, 16, 120);
      const ringMat = new THREE.MeshStandardMaterial({
        color: currentColor.primary,
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.35 - i * 0.08,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2 + (i * Math.PI) / 6;
      ringMesh.rotation.y = (i * Math.PI) / 4;
      scene.add(ringMesh);
      rings.push(ringMesh);
    }
    ringsRef.current = rings;

    // 7. Interactive Dust Particle Cloud (1,800 particles)
    const particleCount = 1800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 22;
      positions[i + 1] = (Math.random() - 0.5) * 22;
      positions[i + 2] = (Math.random() - 0.5) * 20 - 2;
      scales[i / 3] = Math.random() * 2 + 0.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const particleMat = new THREE.PointsMaterial({
      color: currentColor.particles,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 8. Event Handlers
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Update mouse light position
      if (mouseLightRef.current) {
        mouseLightRef.current.position.x = mousePos.current.x * 4;
        mouseLightRef.current.position.y = mousePos.current.y * 3;
      }

      // Rotate Main Mesh
      if (mainMeshRef.current) {
        mainMeshRef.current.rotation.x = elapsedTime * 0.25 + mousePos.current.y * 0.8;
        mainMeshRef.current.rotation.y = elapsedTime * 0.35 + mousePos.current.x * 0.8;
        mainMeshRef.current.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      }

      // Rotate Core Mesh opposite
      if (coreMeshRef.current) {
        coreMeshRef.current.rotation.x = -elapsedTime * 0.4;
        coreMeshRef.current.rotation.y = -elapsedTime * 0.5;
        coreMeshRef.current.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      }

      // Orbiting rings
      ringsRef.current.forEach((ring, idx) => {
        ring.rotation.z = elapsedTime * (0.15 + idx * 0.08) * (idx % 2 === 0 ? 1 : -1);
        ring.rotation.x = Math.PI / 2 + (idx * Math.PI) / 6 + mousePos.current.y * 0.2;
      });

      // Slowly rotate particle field
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.03 + mousePos.current.x * 0.15;
        particlesRef.current.rotation.x = -elapsedTime * 0.02 + mousePos.current.y * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update geometry when meshType or wireframe or color changes
  useEffect(() => {
    if (!sceneRef.current) return;
    createGeometry(sceneRef.current, meshType, wireframe, currentColor);
  }, [meshType, wireframe, colorScheme]);

  // Adjust camera & mesh position based on scrollProgress
  useEffect(() => {
    if (cameraRef.current && mainMeshRef.current) {
      // Smoothly shift camera and scale model as user scrolls down
      cameraRef.current.position.z = 7.5 + scrollProgress * 2.5;
      cameraRef.current.position.y = -scrollProgress * 2.2;
      mainMeshRef.current.rotation.z = scrollProgress * Math.PI;
    }
  }, [scrollProgress]);

  function createGeometry(scene, type, isWireframe, colors) {
    if (mainMeshRef.current) scene.remove(mainMeshRef.current);
    if (coreMeshRef.current) scene.remove(coreMeshRef.current);

    let geometry;
    let coreGeometry;

    switch (type) {
      case 'knot':
        geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 180, 32, 2, 3);
        coreGeometry = new THREE.IcosahedronGeometry(0.8, 2);
        break;
      case 'core':
        geometry = new THREE.IcosahedronGeometry(1.4, 3);
        coreGeometry = new THREE.OctahedronGeometry(0.9, 1);
        break;
      case 'portal':
        geometry = new THREE.TorusGeometry(1.5, 0.4, 30, 160);
        coreGeometry = new THREE.SphereGeometry(0.7, 32, 32);
        break;
      case 'octa':
      default:
        geometry = new THREE.OctahedronGeometry(1.6, 2);
        coreGeometry = new THREE.TetrahedronGeometry(0.9, 2);
        break;
    }

    // Outer primary mesh: Metallic glass physical material
    const material = new THREE.MeshPhysicalMaterial({
      color: colors.primary,
      emissive: colors.emissive,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: isWireframe,
      flatShading: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mainMeshRef.current = mesh;

    // Inner glowing cyber core
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: colors.primary,
      emissiveIntensity: 1.2,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);
    coreMeshRef.current = coreMesh;
  }

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
}
