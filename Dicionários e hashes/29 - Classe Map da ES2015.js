const map = new Map([
    ['chave1', 'valor1'],
    ['chave2', 'valor2'],
    ['chave3', 'valor3']
  ]);
  
  // Iterando com for...of
  for (const [key, value] of map) {
    console.log(`Chave: ${key}, Valor: ${value}`);
  }
  
  // Iterando com forEach
  map.forEach((value, key) => {
    console.log(`Chave: ${key}, Valor: ${value}`);
  });
  
  // Obtendo apenas as chaves
  for (const key of map.keys()) {
    console.log("Chave:", key);
  }
  
  // Obtendo apenas os valores
  for (const value of map.values()) {
    console.log("Valor:", value);
  }
  