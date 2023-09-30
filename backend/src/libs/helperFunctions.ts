const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "AA",
  "AB",
  "AC",
  "AD",
  "AE",
  "AF",
  "AG",
];

export function makeRowAndColumnForScreen(
  numberofRow,
  numberofColumn,
  cornerSeatRow,
  cornerSeatColumn
) {
  let data = [];

  for (let i = 0; i < numberofRow; i++) {
    for (let j = 1; j <= numberofColumn; j++) {
      data = [...data, { value: `${alphabets[i]}${j}`, booked: false }];
    }
  }

  for (let i = numberofRow; i < numberofRow + cornerSeatRow; i++) {
    for (let j = 1; j <= cornerSeatColumn; j++) {
      data = [...data, { value: `${alphabets[i]}${j}`, booked: false }];
    }
  }

  return data;
}
