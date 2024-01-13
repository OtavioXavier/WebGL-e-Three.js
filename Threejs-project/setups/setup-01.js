//Alterar aqui para alterar o tamanho da cena
const options = {
  targetSelector: "#scene",
  width: 800,
  height: 600,
  backgroundColor: 0x222222,
};

// Instanciando um renderizador webGl.
const renderer = new THREE.WebGLRenderer();

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

camera.position.z = 5;
