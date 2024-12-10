function interpolationSearch(array, target) {
    let low = 0;
    let high = array.length - 1;
  
    while (low <= high && target >= array[low] && target <= array[high]) {
      if (array[low] === array[high]) {
        return array[low] === target ? low : -1;
      }
  
      const mid = low + Math.floor(
        ((target - array[low]) * (high - low)) / (array[high] - array[low])
      );
  
      if (array[mid] === target) {
        return mid; 
      }
  
      if (array[mid] < target) {
        low = mid + 1; 
      } else {
        high = mid - 1;
      }
    }
  
    return -1; 
  }
  
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const target = 70;
  
  const result = interpolationSearch(arr, target);
  if (result !== -1) {
    console.log(`Elemento ${target} encontrado no índice ${result}`);
  } else {
    console.log(`Elemento ${target} não encontrado.`);
  }
  