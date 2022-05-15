const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue, i) => {
    if (i%2 ===0) {previousValue + currentValue}},
  initialValue
);