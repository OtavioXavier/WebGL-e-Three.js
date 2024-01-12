const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial(
    {color: 0xFFFFFF}
);

//Criando o cubo
const cube = new THREE.Mesh( 
   geometry, material  
);

scene.add(cube);


renderer.setAnimationLoop(()=> {
    //Animando o cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //Renderizando a cena e a camera infinitamente
   renderer.render(scene, camera);
});

