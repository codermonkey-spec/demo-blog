import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// import "./style.module.scss";

export default function App() {
  const render = () => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 15;
    scene.add(camera);

    // 随机创建50个三角形
    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array(9);
      for (let j = 0; j < 9; j++) {
        vertices[j] = Math.random() * 5;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      const color = new THREE.Color(
        Math.random(),
        Math.random(),
        Math.random()
      );
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
      });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
    }

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas")?.appendChild(renderer.domElement);

    // renderer.render(scene, camera);
    const control = new OrbitControls(camera, renderer.domElement);

    window.addEventListener("resize", () => {
      // 1. 更新相机的宽高比
      camera.aspect = window.innerWidth / window.innerHeight;

      // 2. 更新摄像机的投影矩阵
      camera.updateProjectionMatrix();

      // 3. 更新画布的大小
      renderer.setSize(window.innerWidth, window.innerHeight);

      // 4. 更新像素比
      renderer.setPixelRatio(window.devicePixelRatio);
    });

    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();
  };

  useEffect(() => {
    render();
  }, []);

  return <div id="canvas"></div>;
}
