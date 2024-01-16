const cube01 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshLambertMaterial({
      color: 0x300EF1,
  }),
);
cube01.position.x = 1;
cube01.position.y = 1;
cube01.castShadow = true;
 
scene.add(cube01);
x3.add(cube01, {label: "cube01"})

const cube02 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshLambertMaterial({
      color: 0xFFFF00,
  }),
);
cube02.position.x = 1;
cube02.position.y = 1;
cube02.castShadow = true;
 
scene.add(cube02);
x3.add(cube02, {label: "cube01"})


const plane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(
      10, 10
  ),
  new THREE.MeshPhongMaterial({
      color: 0xFFFFE6,
      side: THREE.DoubleSide,
  }),
);
plane.rotation.x = THREE.MathUtils.degToRad(-90);
plane.receiveShadow = true;

scene.add(plane);

const spot = new THREE.SpotLight(
  //Cor da luz, intensidade, distancia e angulo
  0xFFFFFF,
  3,
  10,
  0.4
);

spot.position.y = 3;
spot.position.x = 6;
spot.castShadow = true;
spot.target = cube01

scene.add(spot)
x3.add(spot, { helper: { visible: false } } )

const spot2 = new THREE.SpotLight(
  //Cor da luz, intensidade, distancia e angulo
  0xFFFFFF,
  0.6,
  10,
  0.4
);

spot2.position.x = 4;
spot2.position.z = -4;
spot2.castShadow = true;
spot2.target = cube01

scene.add(spot2)
x3.add(spot2, { helper: { visible: false } } )

const spot3 = new THREE.SpotLight(
  //Cor da luz, intensidade, distancia e angulo
  0xFFFFFF,
  1.5,
  10,
  0.4
);

spot3.position.y = 3;
spot3.position.x = -4;
spot3.position.z = 4;
spot3.castShadow = true;
spot3.target = cube01

scene.add(spot3)
x3.add(spot3, { helper: { visible: false } } )

renderer.setAnimationLoop(() => {
x3.tick();

x3.fps(() => {
  //Renderizando a cena e a camera infinitamente
  cube01.rotation.x += 0.01;
  cube01.rotation.z += 0.01;
  cube02.rotation.x -= 0.01;
  cube02.rotation.z -= 0.01;
  renderer.render(scene, camera);
});
});