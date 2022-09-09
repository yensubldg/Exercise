/**
 * Format to set
 */
const formatToSet = (arr) => {
  return arr.filter((val, index) => arr.indexOf(val) === index);
};

/**
 * 1) Viết chương trình tính lực lượng của một tập hợp.
 */

const totalOfLength = (arr) => {
  let arrTemp = formatToSet(arr);
  return arrTemp.length;
};

// console.log(totalOfLength([1, 2, 3, 4, 5, 6, 2, 1]));

/**
 * 2) Viết chương trình kiểm tra 2 tập A, B có bằng nhau không
Gợi ý: Sử dụng mảng, sắp xếp trước khi tính
 */

const compareTwoSet = (setOne, setTwo) => {
  let setOneTemp = formatToSet(setOne);
  let setTwoTemp = formatToSet(setTwo);
  setOneTemp.sort((a, b) => a - b);
  setTwoTemp.sort((a, b) => a - b);
  if (setOneTemp === setTwoTemp) return true;
  if (setOneTemp == null || setTwoTemp == null) return false;
  if (totalOfLength(setOneTemp) != totalOfLength(setTwoTemp)) return false;

  for (var i = 0; i < setOneTemp.length; i++)
    if (setOneTemp[i] != setTwoTemp[i]) return false;
  return true;
};

// console.log(compareTwoSet([3, 2, 1, 1], [3, 2, 1]));

/**
 * 3) Viết chương trình tính hợp, giao, hiệu và tích Descartes của 2 tập A, B.
Gợi ý: Sử dụng mảng, sắp xếp trước khi tính
 */

const groupOfTwoSet = (setOne, setTwo) => {
  setOne.sort((a, b) => a - b);
  setTwo.sort((a, b) => a - b);

  let setTemp = [...setOne, ...setTwo];
  setTemp = formatToSet(setTemp);
  setTemp.sort((a, b) => a - b);
  return setTemp;
};

// console.log(groupOfTwoSet([1, 2, 3, 4], [1, 5, 7, 8, 2, 0]));

const interOfSet = (setOne, setTwo) => {
  let setTemp = setOne.filter((val) => setTwo.indexOf(val) !== -1);
  setTemp = formatToSet(setTemp);
  return setTemp;
};

// console.log(interOfSet([1, 2, 3, 4, 5], [2, 3, 5, 6, 7, 8]));

const signOfTwoSet = (setOne, setTwo) => {
  let setTemp = setOne.filter((val) => setTwo.indexOf(val) == -1);
  setTemp = formatToSet(setTemp);
  return setTemp;
};

// console.log(signOfTwoSet([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

const productOfSet = (setOne, setTwo) => {
  let setTempOne = formatToSet(setOne);
  let setTempTwo = formatToSet(setTwo);
  setTempOne.sort((a, b) => a - b);
  setTempTwo.sort((a, b) => a - b);

  let setTemp = [];
  for (var i = 0; i < setTempOne.length; i++) {
    for (var j = 0; j < setTempTwo.length; j++) {
      setTemp.push(formatToSet([setTempOne[i], setTempTwo[j]]));
    }
  }
  return setTemp;
};

// console.log(productOfSet([1, 2, 3], [1, 4, 5]));

/**
 * 6) Viết chương trình kiểm tra 1 phần tử x có trong tập hợp A không
 */

const checkExist = (x, set) => {
  let setTemp = formatToSet(set);
  return setTemp.indexOf(x) !== -1;
};

// console.log(checkExist(6, [1, 2, 3, 4, 5]));

/**
 * 7) Viết chương trình thêm phần tử x vào tập hợp A
 */

const insertToSet = (x, set) => {
  let setTemp = formatToSet(set);
  if (setTemp.indexOf(x) == -1) setTemp.push(x);
  return setTemp;
};

// console.log(insertToSet(5, [1, 2, 3, 4, 6]));

/**
 * 8) Tìm phần tử bé nhất, lớn nhất trong tập hợp
 */

const findMaxOfSet = (set) => {
  let setTemp = formatToSet(set);
  setTemp.sort((a, b) => a - b);
  return setTemp[setTemp.length - 1];
};
// console.log(findMaxOfSet([2, 5, 1, 21, 5, 7, 1, 2, 5, 1]));

const findMinOfSet = (set) => {
  let setTemp = formatToSet(set);
  setTemp.sort((a, b) => a - b);
  return setTemp[0];
};

// console.log(findMinOfSet([2, 4, 1, 2, 4, 8, 9, 3, 2, 2, 0]));

/**
 * 5) Viết chương trình tính hợp, giao, hiệu và tích Descartes của 3 tập A, B, C.
Gợi ý: Sử dụng nguyên lý bù trừ
 */

const groupSet = (...set) => {
  let setTemp = [].concat(...set);
  setTemp = formatToSet(setTemp);
  setTemp.sort((a, b) => a - b);
  setTemp = setTemp.filter((val, index) => setTemp.indexOf(val) == index);
  return setTemp;
};

// console.log(groupSet([1, 2, 3], [2, 3, 4], [0, 9, 2, 1]));

const interSet = (...set) => {
  let [setOne, setTwo, setThree] = set;
  setOne = formatToSet(setOne);
  setTwo = formatToSet(setTwo);
  setThree = formatToSet(setThree);
  let setTemp = setOne.filter(
    (val) => setTwo.indexOf(val) !== -1 && setThree.indexOf(val) !== -1
  );
  return setTemp;
};

// console.log(interSet([2, 4, 3], [2, 3, 4], [3, 4, 2]));

const signSet = (...set) => {
  let [setOne, setTwo, setThree] = set;
  setOne = formatToSet(setOne);
  setTwo = formatToSet(setTwo);
  setThree = formatToSet(setThree);
  let setTemp = setOne.filter(
    (val) => setTwo.indexOf(val) == -1 && setThree.indexOf(val) == -1
  );
  return setTemp;
};

// console.log(
//   signSet([1, 2, 3, 4, 5], [2, 3, 4, 5, 5, 6, 7, 8], [4, 5, 6, 6, 8, 9, 2, 324])
// );
const productSet = (...set) => {
  let [setOne, setTwo, setThree] = set;
  setOne = formatToSet(setOne);
  setTwo = formatToSet(setTwo);
  setThree = formatToSet(setThree);
  let setTemp = [];
  for (let i = 0; i < setOne.length; i++) {
    for (let j = 0; j < setTwo.length; j++) {
      for (let k = 0; k < setThree.length; k++)
        setTemp.push(formatToSet([setOne[i], setTwo[j], setThree[k]]));
    }
  }
  return setTemp;
};
// console.log(
//   productSet(
//     [1, 2, 3, 4, 5],
//     [2, 3, 4, 5, 5, 6, 7, 8],
//     [4, 5, 6, 6, 8, 9, 2, 324]
//   )
// );
