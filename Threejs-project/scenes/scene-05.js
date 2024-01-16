const loader = new THREE.TextureLoader();

const polyester = new THREE.MeshStandardMaterial({
        map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'),
        normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg')
});

const metal = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'),
    alphaMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg'),
    emissiveMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg'),
    aoMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg'),
    roughnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg'),
    metalnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg'),
    transparent: true,
    side: THREE.DoubleSide,
})

const ball = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        0.5,
        60,
        60
    ),
    metal
    /* new THREE.MeshPhysicalMaterial({
        color: 0xFFFFFF,
    }), */
);
ball.position.x = 1;
ball.position.y = 1;
ball.castShadow = true;

scene.add(ball);
x3.add(ball, {labe: "ball"})


const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
        10, 10
    ),
    polyester
    /* new THREE.MeshPhysicalMaterial({
        color: 0xFF0909,
        side: THREE.DoubleSide,
        metalness: 0.48, roughness: 0.57,
    }), */
);
plane.rotation.x = THREE.MathUtils.degToRad(-90);
plane.receiveShadow = true;

x3.add(plane, { label: 'floor'});
scene.add(plane);

const spot = new THREE.PointLight(
    //Cor da luz, intensidade, distancia e angulo
    0xFFFFFF,
    7,

);

spot.position.y = 4;
spot.castShadow = true;
spot.target = ball

scene.add(spot)
x3.add(spot)

renderer.setAnimationLoop(() => {
  x3.tick();

  x3.fps(() => {
    //Renderizando a cena e a camera infinitamente
    renderer.render(scene, camera);
  });
}); 