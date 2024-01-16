//Alterar aqui para alterar o tamanho da cena
const options = {
    targetSelector: "#scene",
    width: 800,
    height: 600,
    backgroundColor: 0x222222,
  };
  
  // Instanciando um renderizador webGl e tirando o serrilhado.
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  
  //Garantir que a resulçao vai se adaptar a tela   
  renderer.setPixelRatio(window.devicePixelRatio);
  
  //Definindo o tamanho da cena
  renderer.setSize(options.width, options.height);
  
  //Cria um canva na tag definda por targetSelector que é responsavel pela renderização
  document.querySelector(options.targetSelector).appendChild(renderer.domElement);
  
  //Criando a cena
  const scene = new THREE.Scene();
  //Colorindo o fundo
  scene.background = new THREE.Color(options.backgroundColor);
  
  //Criando e definindo as opções da camera
  const camera = new THREE.PerspectiveCamera(50, options.width / options.height);
  
  camera.position.z = 3;
  camera.position.y = 3;
  camera.position.x = 3 ;
  
  const light = new THREE.HemisphereLight(
    // Recebe a cor da luz do chão, a cor da luz do ceu e a intensidade respectivamente
    0xffffFF,
    0x080820,
    0.2
  );
  
  scene.add(light);
  
  const x3 = new THREEx3({
    //A ordem não importa
    THREE,
    OrbitControls: THREE.OrbitControls,
    renderer,
    camera,
    scene,
    
  },
  {grid: { visible: false },
   axes: { visible: false } 
});
  
  //Controles de Camera
  x3.add(camera, { open: false });
  //Controles de Luz
  x3.add(light, { helper: { visible: false } });

  //Deixando a sombra bonita

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;