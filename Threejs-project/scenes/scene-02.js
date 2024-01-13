const material = new THREE.MeshLambertMaterial({ 
  color: 0x555555,
  side: THREE.DoubleSide // objetos planos são visiveis por todos os lados
});

//Criando o cubo
const cube = new THREE.Mesh(
    //x y z em metros
    new THREE.BoxBufferGeometry(
        1, 1, 1
    ),
    material
);

const circle = new THREE.Mesh(
    // radius segments
    new THREE.CircleBufferGeometry(
        0.5, 20
    ),
    material
);

const cone = new THREE.Mesh(
  // radius height radialSegments heightSegments
   new THREE.ConeBufferGeometry(
        0.3, 1, 
   ), 
   material
);

const cylinder = new THREE.Mesh(
  // radiusTop radiusBottom height 
  new THREE.CylinderBufferGeometry(
        0.1, 0.5, 1 
   ), 
   material
);

const plane = new THREE.Mesh(
  // width height 
  new THREE.PlaneBufferGeometry(
         10, 10
   ), 
   material
);

const sphere = new THREE.Mesh(
  // radius, widthSegments, heigthSegments
  new THREE.SphereBufferGeometry(
    0.3, 20, 20
), 
material
)

//Posicionado objetos
sphere.position.x = 0;
sphere.position.y = 2.5;
circle.position.x = -2.5;
cone.position.x = 2.5;
cube.position.x = 0;
cylinder.position.z = 2.5;
//Formula matematica do THREE.js que converte graus para radianos já que o rotation do circle aceita apenas radianos.
circle.rotation.x = THREE.MathUtils.degToRad(-45);
plane.rotation.x =  THREE.MathUtils.degToRad(-90);
objectY(0.5);

//Adicionando controles dos objetos
x3.add(cube, {label: 'cubo'});
x3.add(circle, {label: 'circulo'});
x3.add(cone, {label: 'cone'});
x3.add(cylinder, {label: 'cinlindro'});
x3.add(plane, {label: 'plano'});
x3.add(sphere, {label: 'esfera'});

//Adicionando os objetos
scene.add(sphere);
scene.add(plane);
scene.add(cylinder);
scene.add(cone);
scene.add(circle);
scene.add(cube);

renderer.setAnimationLoop(() => {
  x3.tick();

  //Mostra os FPS
  x3.fps(() => {
  //Renderizando a cena e a camera infinitamente
    renderer.render(scene, camera);
  });

  
});

function objectY(value) {
  cube.position.y=value, cylinder.position.y=value, circle.position.y=value, cone.position.y=value
}