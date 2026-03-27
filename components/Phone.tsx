import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

const SCALE_XY = 15;

const PX_WIDTH = 390;
const BEZEL = 0.08;

const ORIGINAL = { x: 21.825, y: 42.857, z: 2.338 };

const Z_FRONT = ORIGINAL.z / 2 + 0.05;
const Y_OFFSET = 2; // ← sube o baja este número para centrar verticalmente

const SCREEN_W = ORIGINAL.x * SCALE_XY * (1 - BEZEL * 2);
const SCREEN_H = ORIGINAL.y * SCALE_XY * (1 - BEZEL * 2);
const DISTANCE_FACTOR = PX_WIDTH / SCREEN_W;
const PX_HEIGHT = (SCREEN_H / SCREEN_W) * PX_WIDTH;

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.set(-center.x, -center.y, -center.z);
  }, [scene]);

  return (
    <group ref={groupRef} scale={[SCALE_XY, SCALE_XY, 1]}>
      <primitive object={scene} />

      <Html
        transform
        occlude="blender"
        position={[0, Y_OFFSET, Z_FRONT]}
        distanceFactor={DISTANCE_FACTOR}
        zIndexRange={[1, 10]}
      >
        <div
          style={{
            width: `${PX_WIDTH}px`,
            height: `${PX_HEIGHT}px`,
            borderRadius: '40px',
            overflow: 'hidden',
            background: '#000',
            outline: '3px solid red',
          }}
          onPointerDown={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          <iframe
            src="https://www.acoso-escolar.com/"
            width="100%"
            height="100%"
            title="Sitio web"
            style={{ border: 'none', display: 'block' }}
            loading="lazy"
          />
        </div>
      </Html>
    </group>
  );
}

export default function InteractivePhone() {
  return (
    <div style={{ width: '50vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }} style={{ background: '#ffffff' }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

        <Suspense fallback={<Html center>Cargando modelo…</Html>}>
          <Environment preset="city" />
          <Model url="/phone.glb" />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Suspense>

        <OrbitControls makeDefault minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
}