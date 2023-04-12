import React, { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
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
    camera.position.z = 3;
    scene.add(camera);

    // 创建物体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas")?.appendChild(renderer.domElement);

    // renderer.render(scene, camera);
    const control = new OrbitControls(camera, renderer.domElement);

    gsap.to(cube.rotation, {
      y: Math.PI * 2,
      duration: 5,
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
