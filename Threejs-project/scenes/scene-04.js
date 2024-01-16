const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({
        color: 0x300EF1,
    }),
);
cube.position.x = 1;
cube.position.y = 1;
cube.castShadow = true;

scene.add(cube);
x3.add(cube, {labe: "cube"})


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

spot.position.y = 8;
spot.castShadow = true;
spot.target = cube

scene.add(spot)
x3.add(spot, { helper: { visible: false } } )

renderer.setAnimationLoop(() => {
  x3.tick();

  x3.fps(() => {
    //Renderizando a cena e a camera infinitamente
    renderer.render(scene, camera);
  });
});