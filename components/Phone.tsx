import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const [screenTransform, setScreenTransform] = useState({ pos: [0, 0, 0.1], rot: [0, 0, 0] });

  useEffect(() => {
    // 1. Buscamos la pantalla. Si no sabes el nombre, 
    // mira la consola del navegador con el log de abajo.
    console.log("Estructura del modelo:", scene);
    
    // Cambia 'Screen' por el nombre real que veas en la consola
    const mesh = scene.getObjectByName('Screen') as THREE.Mesh;
    
    if (mesh) {
      // Si existe, extraemos su posición global
      const worldPos = new THREE.Vector3();
      mesh.getWorldPosition(worldPos);
      
      // Aplicamos un pequeño offset en Z (0.02) para evitar que se parpadee (Z-fighting)
      setScreenTransform({
        pos: [worldPos.x, worldPos.y, worldPos.z + 0.02],
        rot: [mesh.rotation.x, mesh.rotation.y, mesh.rotation.z]
      });
    }
  }, [scene]);

  return (
    <group>
      {/* El modelo 3D original */}
      <primitive object={scene} scale={[15, 15, 5]} />

      {/* La Pantalla Interactiva */}
      <Html
        transform           // Hace que sea parte del mundo 3D
        occlude="blender"   // Usa el motor de oclusión para esconderse tras el modelo
        position={screenTransform.pos as any}
        rotation={screenTransform.rot as any}
        distanceFactor={1.2} // Ajusta esto para que el HTML encaje en el marco
        portal={undefined}   // Mantiene el evento de click sincronizado
      >
        <div 
          style={{
            width: '450px',
            height: '800px',
            background: 'linear-gradient(135deg, #222 0%, #050505 100%)',
            color: 'white',
            fontFamily: 'sans-serif',
            borderRadius: '30px',
            border: '4px solid #333',
            overflowY: 'auto',
            userSelect: 'none'
          }}
          // Evitamos que el scroll del HTML mueva la cámara de Three.js
          onPointerDown={(e) => e.stopPropagation()} 
        >
         <iframe 
            src="https://www.acoso-escolar.com/"
            width="100%"
            height="100%"
            title="Ejemplo de iframe"
            frameborder="0"
            loading="lazy">
            </iframe>
        </div>
      </Html>
    </group>
  );
}

export default function InteractivePhone() {
  return (
    <div style={{ width: '50vw', height: '100vh', background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }} style={{backgroundColor : 'white'}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Suspense fallback={<Html center>Cargando modelo...</Html>}>
          <Environment preset="city" />
          <Model url="/phone.glb" />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
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