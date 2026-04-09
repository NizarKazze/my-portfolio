// Phone.tsx
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  useGLTF,
  Html,
  OrbitControls,
  ContactShadows,
  Environment,
} from '@react-three/drei';
import * as THREE from 'three';

const SCALE_XY = 15;

function Model({ url }: { url: string }) {
  const { camera } = useThree();
  const { scene } = useGLTF(url);
  const innerRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!innerRef.current) return;
    innerRef.current.position.set(0.0001, -0.0952, 0.0003);
    camera.position.set(0, 0, 6.34);
    camera.lookAt(0, 0, 0);
    (camera as THREE.PerspectiveCamera).fov = 35;
    camera.updateProjectionMatrix();
  }, [scene, camera]);

return (
  <>
    <group scale={[SCALE_XY, SCALE_XY, 15]}>
      <group ref={innerRef}>
        <primitive object={scene} />
      </group>
    </group>

<Html
  position={[0, 0, 0.1]}
  transform
  distanceFactor={1.98}
  zIndexRange={[1, 10]}
  occlude
>
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
  }}>
    <div style={{
      width: '266px',
      height: '529px',
      borderRadius: '32px',
      background: '#111',
      clipPath: 'inset(0px round 32px)',
      overflow: 'hidden',
      transform: 'translate(-50%, -50%)',
    }}>
      <iframe
        src="https://www.acoso-escolar.com/"
        title="Sitio web"
        loading="lazy"
        style={{
          border: 'none',
          display: 'block',
          width: '390px',
          height: '780px',
          zoom: 266 / 390,
        }}
      />
    </div>
  </div>
</Html>
  </>
);
}
export default function InteractivePhone() {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.34], fov: 35 }}
        style={{ background: '#ffffff' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

        <Suspense fallback={<Html center>Cargando…</Html>}>
          <Environment preset="city" />

          <Model
            url="/phone.glb"
          />

          <ContactShadows
            position={[0, -1.63, 0]}
            opacity={0.4}
            scale={4}
            blur={2}
            far={2}
          />
        </Suspense>

        <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}