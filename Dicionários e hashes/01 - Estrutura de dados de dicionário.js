// Criando um dicionário com objetos
const dicionario = {
    nome: "Luis",
    idade: 25,
    cidade: "São Luís",
  };
  
  // Acessando valores
  console.log("Nome:", dicionario.nome); // Saída: "Luis"
  console.log("Idade:", dicionario["idade"]); // Saída: 25
  
  // Adicionando uma nova chave-valor
  dicionario.pais = "Brasil";
  console.log("Dicionário atualizado:", dicionario);
  
  // Verificando se uma chave existe
  console.log("Contém 'cidade'?", "cidade" in dicionario); // Saída: true
  
  // Removendo uma chave
  delete dicionario.idade;
  console.log("Após remoção de 'idade':", dicionario);
  