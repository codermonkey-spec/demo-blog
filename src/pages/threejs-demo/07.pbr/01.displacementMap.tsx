import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import colorImg from "@site/static/textures/door/color.jpg";
import transparentImg from "@site/static/textures/door/alpha.jpg";
import aoMapImg from "@site/static/textures/door/ambientOcclusion.jpg";
import heightImg from "@site/static/textures/door/height.jpg";

export default function App() {
  const render = () => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    camera.position.z = 3;
    scene.add(camera);

    // 添加纹理加载器
    const textureLoader = new THREE.TextureLoader();
    const colorTexture = textureLoader.load(colorImg);
    const transparentTexture = textureLoader.load(transparentImg);
    const aoTexture = textureLoader.load(aoMapImg);
    const displacementTexture = textureLoader.load(heightImg);

    // 创建物体，并设置分段数，分段数越大，代表越精细
    const geometry = new THREE.PlaneGeometry(1, 1, 100, 100);

    const material = new THREE.MeshStandardMaterial({
      color: "yellow",
      map: colorTexture,
      transparent: true,
      alphaMap: transparentTexture,
      aoMap: aoTexture,
      displacementMap: displacementTexture, // 添加置换贴图
      displacementScale: 0.1, // 设置置换贴图影响范围
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 灯光
    // 环境光
    const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(light);
    //直线光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas")?.appendChild(renderer.domElement);

    // renderer.render(scene, camera);
    const control = new OrbitControls(camera, renderer.domElement);

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
