// Criando um ArrayBuffer de 16 bytes (128 bits)
const buffer = new ArrayBuffer(16);

// Criando uma visão Uint8Array no ArrayBuffer
const uint8View = new Uint8Array(buffer);
uint8View[0] = 255;  
uint8View[1] = 256;  
console.log("Uint8Array:", uint8View); 

// Criando uma visão Int16Array no ArrayBuffer
const int16View = new Int16Array(buffer);
int16View[0] = 32767;  
int16View[1] = -32768; 
console.log("Int16Array:", int16View); 

// Criando uma visão Float32Array no ArrayBuffer
const float32View = new Float32Array(buffer);
float32View[0] = 3.14;
float32View[1] = 2.71;
console.log("Float32Array:", float32View); 

// Criando um TypedArray diretamente com valores
const directUint8 = new Uint8Array([10, 20, 30, 40]);
console.log("Uint8Array direto:", directUint8);
