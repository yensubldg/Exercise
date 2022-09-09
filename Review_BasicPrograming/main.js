// Viết chương trình nhập vào số nguyên n, tính tổng các số chẵn <=n
const sumOfEven = (num) => {
  let sumEven = 0;
  for (var i = 0; i <= num; i++) {
    if (i % 2 == 0) sumEven += i;
  }
  return sumEven;
};

// console.log(sumOfEven(3));
/*
2. Viết chương trình nhập vào số nguyên n, in ra các ước số của n.
*/
const listCommon = (num) => {
  for (var i = 0; i <= num; i++) {
    if (num % i == 0) console.log(i);
  }
};
// listCommon(6);
/*
3. Viết chương trình nhập vào một số nguyên n, nếu
N = 1: in ra màn hình dòng chữ “chủ nhật”.
N = 2: in ra màn hình dòng chữ “thứ 2”.
N = 3: in ra màn hình dòng chữ “thứ 3”.
N = 4: in ra màn hình dòng chữ “thứ 4”.
N = 5: in ra màn hình dòng chữ “thứ 5”.
N = 6: in ra màn hình dòng chữ “thứ 6”.
N = 7: in ra màn hình dòng chữ “thứ 7”.
N >7: in ra màn hình dòng chữ “không có thứ này”
 */
const dateByNumber = (num) => {
  switch (num) {
    case 1:
      console.log("Chủ nhật");
      break;
    case 2:
      console.log("Thứ 2");
      break;
    case 3:
      console.log("Thứ 3");
      break;
    case 4:
      console.log("Thứ 4");
      break;
    case 5:
      console.log("Thứ 5");
      break;
    case 6:
      console.log("Thứ 6");
      break;
    case 7:
      console.log("Thứ 7");
      break;
    default:
      console.log("Invalid date of week");
      break;
  }
};

// dateByNumber(8);

/**
 * 4. Viết chương trình tìm ước chung lớn nhất của 2 số nguyên a, b nhập vào từ bàn phím
 */
const maxCommon = (numOne, numTwo) => {
  let maxNum = numOne > numTwo ? numOne : numTwo;
  let result = 0;
  for (var i = 0; i <= maxNum; i++) {
    if (numOne % i == 0 && numTwo % i == 0 && i <= numOne && i <= numTwo)
      result = i;
  }
  return result;
};

// console.log(maxCommon(6, 12));

/**
 * 5. Viết chương trình tính n!
 */
const calFactoryOfNumber = (num) => {
  let result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// console.log(calFactoryOfNumber(5));

/**
 * 6. Viết chương trình kiểm tra 1 số nguyên n có phải là số nguyên tố không
 */
const checkPrime = (num) => {
  let result = [];
  if (num == 1 || num == 2) return true;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) result.push(i);
  }
  if (result.length > 2) return false;
  return true;
};

// console.log(checkPrime(6));
/**
 * 7. Viết chương trình chuyển một số nguyên n thành số nhị phân (bát phân, thập lục phân)
 */
const changeToBinary = (num) => {
  let result = [];
  while (num > 0) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }
  return result.reverse().join("");
};

// console.log(changeToBinary(10));

const changeToOctal = (num) => {
  let result = [];
  while (num > 0) {
    result.push(num % 8);
    num = Math.floor(num / 8);
  }
  return result.reverse().join("");
};

// console.log(changeToOctal(10));

/**
 * 8. Viết chương trình nhập số nguyên n, in ra số đảo ngược của n.
 */

const reverseNumber = (num) => {
  let result = [];
  while (num) {
    result.push(num % 10);
    num = Math.floor(num / 10);
  }
  return result.join("") - 0;
};

// console.log(reverseNumber(6542));

/**
 * 9. Viết chương trình in ra các số nguyên tố <=n, với n được nhập vào từ bàn phím.
 */

const printPrime = (num) => {
  for (var i = 1; i <= num; i++) if (checkPrime(i)) console.log(i);
};

// printPrime(12);

/**
 * 10.Viết chương trình in ra các ước số nguyên tố của một số nguyên dương n.
 */

const commonIsPrime = (num) => {
  for (var i = 1; i <= num; i++)
    if (num % i == 0 && checkPrime(i)) console.log(i);
};

// commonIsPrime(10);

/**
 * 12.Viết hàm xuất nội dung mảng ra màn hình
 */

const printArray = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};

// printArray([1, 4, 124, 213, 2, 412, 512, 55, 3]);

/**
 * 13.Viết hàm tính tổng các số chẳn trong mảng
 */

const sumOfEvenArr = (arr) => {
  let result = arr.reduce((prev, curr) => {
    return curr % 2 == 0 ? prev + curr : prev;
  }, 0);
  return result;
};

// console.log(sumOfEvenArr([1, 2, 3, 4, 5, 6, 7, 8]));

/**
 * 14.Chèn một giá trị x và vị trí bất kỳ trong mảng.
 */

const insertNumberToArr = (num, poi, arr) => {
  let arrOne = arr.splice(0, poi);
  let arrTwo = [...arrOne, num, ...arr];
  return arrTwo;
};

// console.log(insertNumberToArr(2, 3, [1, 2, 3, 4, 5, 6]));

/**
 * 15.Tìm số nguyên tố lớn nhất trong mảng
 */

const findMaxInArr = (arr) => {
  let max = arr[0];
  for (var i = 1; i < arr.length; i++) max = max < arr[i] ? arr[i] : max;
  return max;
};

// console.log(findMaxInArr([1, 4, 5, 123, 14, 12, 512, 213, 1231]));

/**
 * 16.Tìm 2 phần tử trong mảng có tổng lớn nhất
 */

const findEleSumMax = (arr) => {
  let numOne = findMaxInArr(arr);
  let numTwo = 0;
  for (var i = 0; i < arr.length; i++)
    if (arr.indexOf(numOne) != i) numTwo = numTwo > arr[i] ? numTwo : arr[i];
  return numOne + numTwo;
};

// console.log(findEleSumMax([1, 2, 3, 4, 5, 6, 9, 8, 9, 0]));

/**
 * 17.Tính trung bình các số nguyên tố trong mảng
 */
const avgOfPrimeInArr = (arr) => {
  let arrTemp = arr.filter((val) => checkPrime(val));
  let result = 0;
  arrTemp.forEach((val) => {
    result += val;
  });
  return result / arrTemp.length;
};

// console.log(avgOfPrimeInArr([1, 2, 3]));

/**
 * 18.Sắp xếp mảng theo thứ tự tăng dần.
 */
const sortArrAsc = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// console.log(sortArrAsc([6, 5, 12, 23, 123, 7]));

/**
 * 19.Loại tất cả các giá trị âm trong mảng.
 */

const removeNegative = (arr) => {
  return arr.filter((val) => val >= 0);
};

// console.log(removeNegative([-2, 2, -21, 2, -123, 23, 4, 1]));

/**
 * 20.Hãy loại các phần tử trùng nhau trong mảng.
 */

const removeSameVal = (arr) => {
  return arr.filter((val, index) => arr.indexOf(val) == index);
};

// console.log(removeSameVal([2, 2, 2, 2, 4, 5, 2]));

/**
 * 21.Viết hàm đưa các số hoàn thiện về đầu dãy và đưa các số không phải là số hoàn thiện về ở cuối dãy
 */

const filterPerfectNumber = (arr) => {
  function checkPerfectNumber(num) {
    let sum = 0;
    for (var i = 1; i <= num; i++) if (num % i == 0) sum += i;
    return sum == num * 2;
  }

  let perfectNumber = arr.filter((val) => checkPerfectNumber(val));
  let nonPer = arr.filter((val) => !checkPerfectNumber(val));
  return [...perfectNumber, ...nonPer];
};

// console.log(filterPerfectNumber([1, 2, 3, 4, 5, 6, 7]));

/**
 * 22.Nhập vào một chuỗi, đếm xem có bao nhiêu kí tự hoa, kí tự thường, kí tự đặc biệt
 */

const analyString = (str) => {
  let upper = 0;
  let lower = 0;
  let spec = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) upper++;
    else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) lower++;
    else spec++;
  }
  console.log(`String have ${upper} uppercase character`);
  console.log(`String have ${lower} lowercase character`);
  console.log(`String have ${spec} special character`);
};

// analyString("Thang<>%123!@#");

/**
 * 23.Nhập một chuỗi ký tự. Kiểm tra xem chuỗi đó có đối xứng không
 */

const checkSymeStr = (str) => {
  let check = true;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) check = false;
  }
  return check;
};

// console.log(checkSymeStr("ThanggnahT"));

/**
 * 24.Nhập một chuỗi ký tự. Đếm số từ của chuỗi ký tự đó. Thí dụ " Trường học " có 2 từ
 */

const countChain = (str) => {
  let total = 0;
  for (var i = 0; i < str.length; i++) {
    if (i > 0 && i < str.length - 1) {
      if (str[i - 1] != " " && str[i] == " " && str[i + 1] != " ") total++;
    }
  }
  total++;
  return total;
};

// console.log(
//   countChain("I am Software Engineering at Duy Tan University a a a")
// );

/**
 * 25.Viết chương trình thực hiện chuẩn hoá một xâu ký tự nhập từ bàn phím (loại bỏ các dấu cách thừa, chuyển 
ký tự đầu mỗi từ thành chữ hoa, các ký tự khác thành chữ thường)
 */

const formatStr = (str) => {
  let strTemp = str.trim().split(" ");
  let result = [];
  for (var i = 0; i < strTemp.length; i++) {
    let temp = strTemp[i].trim();
    if (strTemp[i] != "")
      result.push(`${temp[0].toUpperCase()}${temp.slice(1).toLowerCase()}`);
  }
  return result.join(" ");
};

// console.log(formatStr("      tHang        trUong       "));

/**
 * 26.Viết chương trình thực hiện nhập một xâu ký tự và tìm từ dài nhất trong xâu đó. Từ đó xuất hiện ở vị trí 
nào? (Chú ý nếu có nhiều từ có độ dài giống nhau thì chọn từ đầu tiên tìm thấy).
 */

const findMaxSubStr = (str) => {
  let strTemp = str.trim().split(" ");
  let max = 0,
    poi;
  for (var i = 0; i < strTemp.length; i++) {
    if (max < strTemp[i].length) {
      max = strTemp[i].length;
      poi = i;
    }
  }
  return {
    m: max,
    p: poi + 1,
  };
};

// console.log(findMaxSubStr("Thang Truog Test Max"));

/**
 * 27.Viết chương trình nhập vào một chuỗi ký tự và nhập giá trị n. Sau đó xuất ra n ký tự bên phải của chuỗi
 */

const listChar = (str, n) => {
  return str.slice(n);
};

// console.log(listChar("Thang Test", 3));

/**
 * 28.Cho một file Diem.in chứa các cặp tọa độ điểm như sau
 */

const readFile = (idElement) => {
  document.getElementById(idElement).addEventListener("change", function (e) {
    var fr = new FileReader();
    fr.onload = function () {
      document.getElementById("output").textContent = fr.result;
    };

    fr.readAsText(e.target.files[0]);
  });
};

readFile("file");


