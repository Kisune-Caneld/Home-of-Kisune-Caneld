"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RAIN_COUNT = 2200;
const SPLASH_COUNT = 80;

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function RainMesh() {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const { positions, randoms, lineProgress } = useMemo(() => {
    const pos = new Float32Array(RAIN_COUNT * 6);
    const rnd = new Float32Array(RAIN_COUNT * 6);
    const prog = new Float32Array(RAIN_COUNT * 2);

    for (let i = 0; i < RAIN_COUNT; i++) {
      const rx = pseudoRandom(i * 4 + 1);
      const ry = pseudoRandom(i * 4 + 2);
      const rz = pseudoRandom(i * 4 + 3);
      const rw = pseudoRandom(i * 4 + 4);

      const x = (rx - 0.5) * 45;
      const y = (ry - 0.5) * 35;
      const z = rz * 18 - 14;

      const speed = 14.0 + (1.0 - (z + 14) / 18) * 6.0 + rw * 4.0;
      const length = 0.6 + ((z + 14) / 18) * 0.9 + rw * 0.3;

      const i6 = i * 6;
      const i2 = i * 2;

      pos.set([x, y, z, x, y, z], i6);
      rnd.set([speed, length, rw, speed, length, rw], i6);
      prog.set([0.0, 1.0], i2);
    }

    return { positions: pos, randoms: rnd, lineProgress: prog };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uWind: { value: new THREE.Vector2(-0.8, 0) },
      uColorHead: { value: new THREE.Color("#8dbbe3") },
      uColorTail: { value: new THREE.Color("#3f73b8") },
    }),
    [],
  );

  useFrame((state) => {
    if (!materialRef.current) return;
    const time = state.clock.getElapsedTime();
    materialRef.current.uniforms.uTime.value = time;
    const gust = Math.sin(time * 0.4) * 0.4 + Math.sin(time * 1.1) * 0.2 - 0.6;
    materialRef.current.uniforms.uWind.value.set(gust, 0);
  });

  const vertexShader = `
    attribute vec3 aRandom;
    attribute float aProgress;
    uniform float uTime;
    uniform vec2 uWind;
    varying float vProgress;
    varying float vDepth;
    varying float vAlphaFactor;

    void main() {
      vProgress = aProgress;
      float speed = aRandom.x;
      float dropLength = aRandom.y;
      float seed = aRandom.z;

      float boxY = 35.0;
      float fall = uTime * speed + seed * boxY;
      float currentY = mod(position.y - fall + 17.5, boxY) - 17.5;

      float windDrift = uWind.x * (17.5 - currentY) * 0.25;
      float currentX = position.x + windDrift + sin(uTime * 0.5 + seed * 6.28) * 0.3;
      float currentZ = position.z;

      vec3 basePos = vec3(currentX, currentY, currentZ);
      vec3 streakOffset = vec3(uWind.x * 0.2, dropLength, 0.0) * (1.0 - aProgress);
      vec3 finalPos = basePos + streakOffset;

      vDepth = (currentZ + 14.0) / 18.0;
      vAlphaFactor = 0.2 + vDepth * 0.6 + seed * 0.2;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColorHead;
    uniform vec3 uColorTail;
    varying float vProgress;
    varying float vDepth;
    varying float vAlphaFactor;

    void main() {
      vec3 color = mix(uColorTail, uColorHead, vProgress * 0.7);
      float alpha = pow(vProgress, 2.0) * vAlphaFactor;
      alpha *= clamp(vDepth * 1.2, 0.15, 0.85);

      gl_FragColor = vec4(color, alpha);
    }
  `;

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aRandom" args={[randoms, 3]} />
        <bufferAttribute
          attach="attributes-aProgress"
          args={[lineProgress, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

function GroundSplashes() {
  const splashMatRef = useRef<THREE.ShaderMaterial | null>(null);

  const { positions, splashRandoms } = useMemo(() => {
    const pos = new Float32Array(SPLASH_COUNT * 3);
    const rnd = new Float32Array(SPLASH_COUNT * 2);

    for (let i = 0; i < SPLASH_COUNT; i++) {
      const rx = pseudoRandom(i * 3 + 100);
      const rz = pseudoRandom(i * 3 + 200);
      const rDelay = pseudoRandom(i * 3 + 300);

      const x = (rx - 0.5) * 35;
      const z = rz * 16 - 12;
      const y = -11.5 + (z + 12) * 0.1;

      pos.set([x, y, z], i * 3);
      rnd.set([rDelay, 0.4 + rx * 0.5], i * 2);
    }

    return { positions: pos, splashRandoms: rnd };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#8dbbe3") },
    }),
    [],
  );

  useFrame((state) => {
    if (!splashMatRef.current) return;
    splashMatRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  const vertexShader = `
    attribute vec2 aSplashRnd;
    uniform float uTime;
    varying float vLife;

    void main() {
      float delay = aSplashRnd.x;
      float speed = aSplashRnd.y;
      float cycle = mod(uTime * 1.8 + delay * 4.0, 1.0);
      vLife = cycle;

      vec3 pos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = (1.0 - cycle) * 16.0 * (1.0 + (pos.z + 12.0) * 0.1);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    varying float vLife;

    void main() {
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);
      if (dist > 0.5) discard;

      float ring = smoothstep(0.48, 0.4, dist) * smoothstep(0.2, 0.35, dist);
      float alpha = ring * (1.0 - vLife) * 0.35;

      gl_FragColor = vec4(uColor, alpha);
    }
  `;

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute
          attach="attributes-aSplashRnd"
          args={[splashRandoms, 2]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={splashMatRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AtmosphericMist() {
  const mistMatRef = useRef<THREE.ShaderMaterial | null>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame((state) => {
    if (!mistMatRef.current) return;
    mistMatRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      float t = uTime * 0.08;
      float fog1 = sin(vUv.x * 4.0 + t) * cos(vUv.y * 3.0 + t * 0.5);
      float fog2 = cos(vUv.x * 6.0 - t * 0.8) * sin(vUv.y * 5.0 + t * 0.3);
      float mist = clamp((fog1 + fog2) * 0.04 + 0.03, 0.0, 0.08);

      vec3 skyTop = vec3(0.86, 0.92, 0.97);
      vec3 skyBottom = vec3(0.55, 0.73, 0.89);
      vec3 sky = mix(skyBottom, skyTop, vUv.y);

      gl_FragColor = vec4(sky, mist);
    }
  `;

  return (
    <mesh position={[0, 0, -18]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mistMatRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export function RainBackgroundR3F() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <AtmosphericMist />
        <RainMesh />
        <GroundSplashes />
      </Canvas>
    </div>
  );
}
