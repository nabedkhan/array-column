function array_column(arr, fieldName) {
  if (Array.isArray(arr) && fieldName) {
    const result = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      if (arr[i][fieldName]) {
        result.push(arr[i][fieldName]);
      }
    }

    return result;
  }
}
