 Para entender os conceitos de Three.js é necessário entender os conceitos de 3d e tudo que o 3d precisa.
 um ambiente 3d precisa de um renderizador(renderer), que pode ser o webgl, canvas...
 Tem que ter uma cena(scene), uma ou mais cameras, um ou mais objetos e luz.

Para entender objetos é necessário perceber que todos os objetos têm: 

Geometria: é a forma e como vai ser o objeto do ponto de vista geometrico.
Material: é a pele, o tecido... tudo aquilo que envolve a geometria.
Mesh: é uma malha que une os dois.

Sistema internacional de medidas: 
 - Utilizaremos o sistema internacional de medidas para que quando tornarmos as cenas realistas tudo funcione corretamente.

 - No sistema internacional de medidas aqui no Three.js utilizaremos: 
   - Candela: sistema de medida da intensidade luminosa
   - Metros e Centimetros: Sistema de comprimento.
   - Radiano: Medida dos ângulos planos, rotações e giros.

- Há duas formas de fazer formas livres: 
   - Path: BufferGeometry, que vão nos dar uma linha.
   - Shape: ShapeBufferGeometry, que nos dá uma Malha(Mesh). 

- Quais luzes estão presentes no Three.js: 
   - AmbienteLigth: Sem sombras, Afeta todos os objetos sem distinção de distancia.
   - Hemisphereligth: Sem Sombras, Afeta todos os objetos e tem ideia de luz de cima e luz de baixo.
   - PointLigth: Funciona como uma lampada, Gera sombras e vai em todas as direções.
   - DirectionalLigth: Funciona como o sol, Gera sombras e tem uma direção especifica.
   - SpotLigth: Funciona como um holofote, gera sombras e tem uma direção especifica. Para este tipo de luz o material do objeto precisa ser o Phong

- No padrão o web-gl é feito para aparelhos sem tanta potencia, como para celulares, notebooks antigos... Por isso muitos dos recursos como anti-serrilhado, sombras... ficam, por padrão, desligados. Mas, é possivel ativar esses recursos e tornar, o modelo 3d, mais realista. 

- Materiais presentes no THREE.js: 
  - Lambert: Recebe luz mas é fosco, não brilha. Exemplos de uso: Madeira, Pedra...
  - Phong: Igual ao lambert, mas com brilho.
  - Standard: Rederização "baseada" em fisica real, libera o controle para difusão da luz.
  - Physical: é como o Standard, mas tem propriedades mais potentes, como a transmition, utilizada pra vidros, plásticos e tudo que é transparente ou meio transparente. Por ser um material muito pesado, é interessante utiliza-lo só e somente em caso de muita necessidade. Muitos materiais desse no seu arquivo irão pesar muito o seu programa

- Os materias que recebem luz no mundo 3d funcionam a partir de, principalmente, duas grandezas:
  - Metalness: que é o quanto o material se parece com matal, quanto mais ele parece metal menos luz se espalha.
  - Roughness: é o quão liso ou aspero um material é numa escala entre 0 e 1 onde 0 é liso e 1 áspero. 
 Ou seja percebe-se que nos 3d os materias são baseados em quanta luz eles refletem ou expalham.

- Na linguagem de texturas temos codinomes:
  - map: color, basecolor
  - alphaMap: alpha, opacity.
  - metalnessMap: metalic.
  - emissiveMap: emissive.
  - normalMap: normal.
  - aoMap: occlusion, ambienteOcclusion
  - roughnessMap: roughness
