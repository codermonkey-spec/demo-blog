import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

import envImg from "@site/static/textures/hdr/012.jpg";
import pxImg from "@site/static/textures/environmentMaps/1/px.jpg";
import nxImg from "@site/static/textures/environmentMaps/1/nx.jpg";
import pyImg from "@site/static/textures/environmentMaps/1/py.jpg";
import nyImg from "@site/static/textures/environmentMaps/1/ny.jpg";
import pzImg from "@site/static/textures/environmentMaps/1/pz.jpg";
import nzImg from "@site/static/textures/environmentMaps/1/nz.jpg";

export default function App() {
  const render = () => {
    const rgbeLoader = new RGBELoader();
    rgbeLoader.loadAsync(envImg).then((texture) => {
      // 场景如何映射到物体上
      texture.mapping = THREE.EquirectangularReflectionMapping;
      // 设置场景的背景
      scene.background = texture;
      scene.environment = texture;
    });

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

    // 添加环境贴图加载器
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const envMapTexture = cubeTextureLoader.load([
      pxImg,
      nxImg,
      pyImg,
      nyImg,
      pzImg,
      nzImg,
    ]);

    // 给场景添加背景
    scene.background = envMapTexture;
    // 给场景所有的物体添加默认的环境贴图
    scene.environment = envMapTexture;

    const sphereGeometry = new THREE.SphereGeometry(1, 100);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.7,
      roughness: 0.1,
      envMap: envMapTexture,
    });

    const cube = new THREE.Mesh(sphereGeometry, sphereMaterial);
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
