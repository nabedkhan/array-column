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

const result = array_column(
  [
    { name: "Nabed", age: 25 },
    { name: "Shuvo", age: 24 },
    { name: "Akib", age: 23 },
    { age: 23, profession: "designer" },
  ],
  "name"
);

console.log(result);
