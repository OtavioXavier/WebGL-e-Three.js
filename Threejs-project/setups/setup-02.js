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

camera.position.z = 10;
camera.position.y = 3.83;
camera.position.x = 10 ;


/* const light = new THREE.AmbientLight(
    //respectivamente cor e intensidade da luz
 0xFFFFFF, 1
); */

const light = new THREE.HemisphereLight(
  // Recebe a cor da luz do chão, a cor da luz do ceu e a intensidade respectivamente
  0xffffbb,
  0x080820,
  2
);

scene.add(light);

const x3 = new THREEx3({
  //A ordem não importa
  THREE,
  OrbitControls: THREE.OrbitControls,
  renderer,
  camera,
  scene,
});

//Controles de Camera
x3.add(camera, { open: false });
//Controles de Luz
x3.add(light);
