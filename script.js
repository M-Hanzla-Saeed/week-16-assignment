function problem1() {
  var inputValue = document.getElementById("input1").value;
  var code1 = inputValue.charCodeAt(0);
  if (code1 >= 65 && code1 <= 90) {
    document.getElementById("problem1").innerHTML =
      inputValue + " It is a capital letter ";
  } else if (code1 >= 97 && code1 <= 122)
    document.getElementById("problem1").innerHTML =
      inputValue + " It is a small letter ";
  else
    document.getElementById("problem1").innerHTML =
      inputValue + " It is Neither small Nor Large ";
}

// -----------Programme 02---------
function problem2() {
  var inputValue = document.getElementById("input2").value;
  inputValue = inputValue - 1;
  var weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (inputValue >= 0 && inputValue <= 6) {
    document.getElementById("problem2").innerHTML =
      "Week Day is " + weekDay[inputValue];
  } else
    document.getElementById("problem2").innerHTML =
      "plzz enter Week Day between 0 and 7";
}

//-------------Programme 03 --------------
function problem3() {
  var inputValue = document.getElementById("input3").value;
  var number = parseInt(inputValue);
  console.log(inputValue);
  var ali;
  if (inputValue >= 1 && inputValue <= 12) {
    switch (number) {
      case 1:
        document.getElementById("problem3").innerHTML =
          "This Month is January & it has 31 days";
        break;
      case 2:
        document.getElementById("problem3").innerHTML =
          "This Month is Feburary & it has 28 or 29 days";
        break;
      case 3:
        document.getElementById("problem3").innerHTML =
          "This Month is March & it has 31 days";
        break;
      case 4:
        document.getElementById("problem3").innerHTML =
          "This Month is April & it has 30 days";
        break;
      case 5:
        document.getElementById("problem3").innerHTML =
          "This Month is May & it has 31 days";
        break;
      case 6:
        document.getElementById("problem3").innerHTML =
          "This Month is Jun & it has 30 days";
        break;
      case 7:
        document.getElementById("problem3").innerHTML =
          "This Month is July & it has 31 days";
        break;
      case 8:
        document.getElementById("problem3").innerHTML =
          "This Month is August & it has 31 days";
        break;
      case 9:
        document.getElementById("problem3").innerHTML =
          "This Month is September & it has 30 days";
        break;
      case 10:
        document.getElementById("problem3").innerHTML =
          "This Month is October & it has 31 days";
        break;
      case 11:
        document.getElementById("problem3").innerHTML =
          "This Month is November & it has 30 days";
        break;
      case 12:
        document.getElementById("problem3").innerHTML =
          "This Month is November & it has 31 days";
        break;
      default:
        document.getElementById("problem3").innerHTML =
          "Please Enter Valid Month Number";
    }
  } else
    document.getElementById("problem3").innerHTML =
      "Please enter value from 1 to 12";
}
// Programme 05
function problem5() {
  var num1 = parseInt(document.getElementById("input4").value);
  var num2 = parseInt(document.getElementById("input4.1").value);
  var num3 = parseInt(document.getElementById("input4.2").value);
  var total = num1 + num2 + num3;
  console.log(total);
  if (total >= 180)
    document.getElementById("problem5").innerHTML = "NO! It is not a Triangle";
  else document.getElementById("problem5").innerHTML = "Yes! It's  a Triangle";
}

//Programme 06
function problem6() {
  var num1 = parseInt(document.getElementById("input5").value);
  var num2 = parseInt(document.getElementById("input5.1").value);
  var num3 = parseInt(document.getElementById("input5.2").value);
  if (num1 + num2 > num3 || num1 + num3 > num2 || num2 + num3 > num1) {
    document.getElementById("problem6").innerHTML = "YES! It is a Triangle";
  }
  // else if(num1+num3>num2)
  // document.getElementById('problem6').innerHTML ='YES! It is a Triangle';
  // else if(num2+num3>num1)
  // document.getElementById('problem6').innerHTML ='YES! It is a Triangle';
  else
    document.getElementById("problem6").innerHTML = "NO! It is not a Triangle";
}
//Programme 07
function problem7() {
  var num1 = parseInt(document.getElementById("input6").value);
  var num2 = parseInt(document.getElementById("input6.1").value);
  var num3 = parseInt(document.getElementById("input6.2").value);
  if (num1 == num2 && num2 == num3)
    document.getElementById("problem7").innerHTML =
      "It is an Equilateral Triangle";
  else if (num1 == num2 || num1 == num3 || num2 == num3)
    document.getElementById("problem7").innerHTML =
      "It is an Isosceles Triangle";
  else if ((num1 != num2) != num3)
    document.getElementById("problem7").innerHTML = "It is an Scalene Triangle";
}

//Programme 08
function problem8() {
  var num1 = parseInt(document.getElementById("input8").value);
  var num2 = parseInt(document.getElementById("input8.1").value);
  var num3 = parseInt(document.getElementById("input8.2").value);
  var disc = num2 * num2 - 4 * num1 * num3;
  if (disc > 0) {
    root1 = (-num2 + Math.sqrt(disc)) / (2 * num1);
    root2 = (-num2 - Math.sqrt(disc)) / (2 * num1);
    document.getElementById("problem8").innerHTML =
      "Roots are Real and Different " +
      "<br>" +
      "Root 1 is " +
      root1 +
      "<br>" +
      "Root 2 is " +
      root2;
  } else if (disc == 0) {
    root1 = -num2 / (2 * num1);
    document.getElementById("problem8").innerHTML =
      "Roots are real and same " + "<br>" + "root 1 & root 2 are = " + root1;
  } else {
    realPart = -num2 / (2 * num1);
    imaginaryPart = Math.sqrt(-disc) / (2 * num1);
    document.getElementById("problem8").innerHTML =
      "Roots are Complex and Imaginary " +
      "<br>" +
      "Root 1 is " +
      realPart +
      " + " +
      imaginaryPart +
      " i" +
      "<br>" +
      "Root 2 is " +
      realPart +
      " - " +
      imaginaryPart +
      " i";
  }
}
// Programme 09
function problem9() {
  var num1 = parseInt(document.getElementById("input9").value);
  var num2 = parseInt(document.getElementById("input9.1").value);
  var num3 = num1 - num2;
  if (num3 > 0) {
    document.getElementById("problem9").innerHTML =
      "You Earn Profit, Your Profit is " + num3;
  } else
    document.getElementById("problem9").innerHTML =
      "you are in Loss of " + num3;
}
//Programme 10
function problem10() {
  var input1 = document.getElementById("input10").value;
  var input2 = document.getElementById("input10.1").value;
  for (var i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      document.getElementById("problem10").innerHTML =
        input2 + " is exist in above string";
      return;
    } else
      document.getElementById("problem10").innerHTML = input2 + " is not exist";
  }
}

//Programme 11
function problem11() {
  var input1 = document.getElementById("input11").value;
  var input2 = document.getElementById("input11.1").value;
  var count = 0;
  for (var i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      count += 1;
    }
  }
  document.getElementById("problem11").innerHTML =
    input2 + " exists " + count + " times in above string";
}

// Programme 14
function problem14() {
  //   const count = 0;
  let obj = {};
  const input1 = document.getElementById("input14").value;
  //const freq =[input1.length];
  let accumulator = 0;
  for (let x = 0; x < input1.length; x++) {
    obj[input1.charAt(x)] = 0;
  }
  const ar = Object.keys(obj);
  // abc acy
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < input1.length; j++) {
      console.log(i);
      if (input1.charAt(j) === ar[i]) {
        obj[ar[i]] = obj[ar[i]] + 1;
        //obj.ar[i]
      }
    }
  }
  console.log(obj);
  document.getElementById("problem14").innerHTML = JSON.stringify(obj);
}

//Programme 15
function problem15() {
  var input1 = document.getElementById("input15").value;
  var input2 = document.getElementById("input15.1").value;
  //console.log(count)
  var rep = 0;
  for (var i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      rep = input1.replace(input2, "");
      //rep = input1.split(input1.charAt(i));
      document.getElementById("problem15").innerHTML = rep;
      console.log(rep);
      return;
    }
  }
}
// Programme 16
function problem16() {
  let input1 = document.getElementById("input16").value;
  let input2 = document.getElementById("input16.1").value;
  let rep = 0;
  let sherri;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) === input2) {
      //rep = input1.replace(input1.charAt(i), "");
      rep = input1.lastIndexOf(input1.charAt(i));
      sherri = input1.slice(0, rep) + input1.slice(rep + 1);
      document.getElementById("problem16").innerHTML = sherri;
      return;
    }
  }

  document.getElementById("problem16").innerHTML = "This element is not found";
}
// Programme 17
function problem17() {
  let input1 = document.getElementById("input17").value;
  let input2 = document.getElementById("input17.1").value;
  let rep = 0;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) === input2) {
      rep = input1.replace(new RegExp(input2, "g"), "");
      document.getElementById("problem17").innerHTML = rep;
      return;
    }
  }
  document.getElementById("problem17").innerHTML = "This Element is not found";
}

// Programme 18
function problem18() {
  let input1 = document.getElementById("input18").value;
  let input2 = document.getElementById("input18.1").value;
  let count = 0;
  let rep = 0;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) === input2) {
      count++;
    }
  }
  if (count >= 2) {
    rep = input1.replace(new RegExp(input2, "g"), "");
    document.getElementById("problem18").innerHTML = rep;
    return;
  } else if (count == 1) {
    document.getElementById("problem18").innerHTML =
      input2 + " exist only 1 time";
    return;
  } else {
    document.getElementById("problem18").innerHTML = input2 + " is not found";
  }
}
// Programme 19
function problem19() {
  let input1 = document.getElementById("input19").value;
  let input2 = document.getElementById("input19.1").value;
  let rep = 0;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      rep = input1.replace(input2, " SomeCharacter ");
      document.getElementById("problem19").innerHTML = rep;
      return;
    }
  }
}
// Programme 20
function problem20() {
  let input1 = document.getElementById("input20").value;
  let input2 = document.getElementById("input20.1").value;
  let index1,
    rep = 0;

  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      index1 = input1.lastIndexOf(input1.charAt(i));
      rep = input1.slice(0, index1) + input1.slice(index1 + 1);
      document.getElementById("problem20").innerHTML = rep;
      return;
    }
  }
}
//Programme 21
function problem21() {
  let input1 = document.getElementById("input21").value;
  let input2 = document.getElementById("input21.1").value;
  let rep = 0;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      rep = input1.replace(new RegExp(input2, "g"), " 'SomeChar' ");
      document.getElementById("problem21").innerHTML = rep;
      return;
    } else
      document.getElementById("problem21").innerHTML = "Element is not found";
  }
}
// Programme 22
function problem22() {
  let input1 = document.getElementById("input22").value;
  let input2 = document.getElementById("input22.1").value;
  let index = 0;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      index = input1.indexOf(input2);
      document.getElementById("problem22").innerHTML =
        input2 + " is found at " + index;
      return;
    } else
      document.getElementById("problem22").innerHTML =
        input2 + " is not found here";
  }
}
// Programme 23
function problem23() {
  let input1 = document.getElementById("input23").value;
  let input2 = document.getElementById("input23.1").value;
  let index = 0;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) == input2) {
      index = input1.lastIndexOf(input2);
      document.getElementById("problem23").innerHTML =
        input2 + " is found at " + index;
      return;
    } else
      document.getElementById("problem23").innerHTML =
        input2 + " is not found here";
  }
}
// Programme 24
function problem24() {
  let input1 = document.getElementById("input24").value;
  let input2 = document.getElementById("input24.1").value;
  let index1 = [];
  let finder = 0;
  input1 = input1.split("");
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] == input2) {
      finder = index1.push(i + " ");
    }
  }
  if (finder > 0)
    document.getElementById("problem24").innerHTML =
      input2 + " is found at index " + index1;
  else
    document.getElementById("problem24").innerHTML = input2 + " is not found";
}
// Programme 25
function problem25() {
  let input1 = document.getElementById("input25").value;
  let input2 = document.getElementById("input25.1").value;
  let count,
    countConvert = 0;
  count = input1.match(new RegExp(input2, "g"));
  console.log(count);

  if (count.length > 0) {
    document.getElementById("problem25").innerHTML =
      input2 + " Match " + count.length + " times";
    return;
  }
  //document.getElementById("problem25").innerHTML = " is not match to anyone";
}
// Programme 26
function problem26() {
  let input1 = document.getElementById("input26").value;
  let input2 = document.getElementById("input26.1").value;
  input1 = input1.replace(input2, "");
  document.getElementById("problem26").innerHTML = input1;
}
// Programme 44
function problem44() {
  let count = [];
  for (let i = 1; i < 6; i++) {
    count.push(prompt("Enter " + i + " value in an Array"));
  }
  console.log(count);
  for (let j = 0; j < count.length; j++) {
    count[j] = count[j--];
  }
  console.log(count);
}
//Programme 45
function problem45() {
  let input1 = parseInt(document.getElementById("input45").value);
  let count = 0;
  for (let i = 0; i < input1; i++) {
    if (i % 2 != 0) {
      count = count + i;
    }
  }
  document.getElementById("problem45").innerHTML =
    "Sum of All Odd Nmbers upto " + input1 + " = " + count;
}
// Programme 46
function problem46() {
  let input1 = document.getElementById("input46").value;
  let result,
    show = 0;
  for (let i = 1; i <= 10; i++) {
    result = input1 * i;
    show = input1 + " * " + i + " = " + result;
    console.log(show);
  }
  document.getElementById("problem46").innerHTML =
    "Press 'Ctrl + Shift + I' or 'Open Console' to watch Table! <br> " +
    input1 +
    "'s Table is Shown there  ";
}
// Programme 47
function problem47() {
  let input1 = document.getElementById("input47").value;
  let count = 1;
  for (let i = 0; i < input1.length; i++) {
    if (input1.charAt(i) != input1.length) {
      count++;
    }
  }
  document.getElementById("problem47").innerHTML =
    input1 + " has " + count + " digits";
}
// Programme 48
function problem48() {
  let input1 = document.getElementById("input48").value;
  let first = input1.charAt(0);
  let last = input1.charAt(input1.length - 1);
  document.getElementById("problem48").innerHTML =
    first + " is the 1st Digit & " + last + " is the last Digit of a Number";
}
// Programme 49
function problem49() {
  let input1 = document.getElementById("input49").value;
  let first = parseInt(input1.charAt(0));
  let last = parseInt(input1.charAt(input1.length - 1));
  let sum = first + last;
  document.getElementById("problem49").innerHTML =
    "Sum of First & Last = " + sum;
}

// Programm 50
function problem50() {
  let input1 = document.getElementById("input50").value;
  let first = input1.charAt(0);
  let last = input1.charAt(input1.length - 1);
  let middle = input1.slice(1, length - 1);
  let input4 = last.concat(middle, first);
  document.getElementById("problem50").innerHTML =
    "First & Last Value are Swapped! " + input4;
}
//Programme 51
function problem51() {
  let input1 = parseInt(document.getElementById("input51").value);
  let input2 = parseInt(document.getElementById("input51.1").value);
  let input3 = input1 + input2;
  document.getElementById("problem51").innerHTML =
    "Sum of these numbers = " + input3;
}
//Programme 52
function problem52() {
  let input1 = document.getElementById("input52").value;
  let input2 = document.getElementById("input52.1").value;
  let input3 = input1 * input2;
  document.getElementById("problem52").innerHTML =
    "Product of these numbers = " + input3;
}
