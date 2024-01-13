const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

//Criando o cubo
const cube = new THREE.Mesh(geometry, material);

scene.add(cube, { label: "cube" });

renderer.setAnimationLoop(() => {
  x3.tick();

  //Animando o cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  //Mostra os FPS
  x3.fps(() => {
    renderer.render(scene, camera);
  });

  //Renderizando a cena e a camera infinitamente
  renderer.render(scene, camera);
});

//Adicionando os controles do Cubo
x3.add(cube);
