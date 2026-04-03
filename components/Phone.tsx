import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const SCALE_XY = 15;
const PX_WIDTH  = 390;
const PX_HEIGHT = 780;

function Model({ url, distanceFactor }: { url: string; distanceFactor: number }) {
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
        position={[0, 0, 0.09]}
        transform
        distanceFactor={distanceFactor}
        zIndexRange={[1, 10]}
        occlude={"blender" as any}
      >
        <div style={{
          width: `${PX_WIDTH}px`,
          height: `${PX_HEIGHT}px`,
          borderRadius: '40px',
          overflow: 'hidden',
          background: '#111',
        }}>
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
    </>
  );
}

export default function InteractivePhone() {
  const [distanceFactor, setDistanceFactor] = useState(1.36);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>

      <Canvas
        camera={{ position: [0, 0, 6.34], fov: 35 }}
        style={{ background: '#ffffff' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

        <Suspense fallback={<Html center>Cargando…</Html>}>
          <Environment preset="city" />
          <Model url="/phone.glb" distanceFactor={distanceFactor} />
          <ContactShadows
            position={[0, -1.63, 0]}
            opacity={0.4} scale={4} blur={2} far={2}
          />
        </Suspense>

        <OrbitControls makeDefault minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
}