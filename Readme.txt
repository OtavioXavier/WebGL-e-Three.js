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