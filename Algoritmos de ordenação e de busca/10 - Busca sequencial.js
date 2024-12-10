function sequentialSearchByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return i;
      }
    }
    return -1;
  }
  
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  const userIndex = sequentialSearchByKey(users, "name", "Bob");
  if (userIndex !== -1) {
    console.log(`Usuário encontrado no índice ${userIndex}:`, users[userIndex]);
  } else {
    console.log("Usuário não encontrado.");
  }
  
  