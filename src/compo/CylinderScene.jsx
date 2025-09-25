import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DeviceOrientationControls } from "three-stdlib";
import { useEffect, useRef, useState } from "react";
import { Model } from "./Home";

function GyroControls() {
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    controlsRef.current = new DeviceOrientationControls(camera);
    controlsRef.current.connect();
    return () => controlsRef.current?.disconnect();
  }, [camera]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();

      // lock Y tilt
      camera.rotation.x = 0;

      // clamp left-right
      const minAz = -Math.PI / 4;
      const maxAz = Math.PI / 4;
      if (camera.rotation.y < minAz) camera.rotation.y = minAz;
      if (camera.rotation.y > maxAz) camera.rotation.y = maxAz;
    }
  });

  return null;
}

export default function CylinderScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [13, 3.2, 13], fov: 60 }}>
        <Model />

        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />
        )}

        {isMobile && <GyroControls />}
      </Canvas>
    </div>
  );
}
