let a = document.getElementsByClassName("bo1");
let ac = document.getElementById("b11");
let que = document.getElementById("que");
let eq = document.getElementById("b16");
let ans = document.getElementById("ans");
let inp = document.getElementById("inp");
let sum1 = 0,
  sum2 = 0,
  k = 0,
  s = 0;
for (let i = 0; i < 10; i++) {
  a[i].addEventListener("click", () => {
    inp.innerText += a[i].innerText;
    if (k !== 0) {
      switch (k) {
        case 1:
          s = sum1 + parseInt(inp.innerText);
          break;
        case 2:
          s = sum1 - parseInt(inp.innerText);
          break;
        case 3:
          s = sum1 * parseInt(inp.innerText);
          break;
        case 4:
          s = sum1 / parseInt(inp.innerText);
          break;
      }
    }
  });
}
for (let i = 10; i < a.length - 2; i++) {
  a[i].addEventListener("click", () => {
    if (k == 0) {
      sum1 = parseInt(inp.innerText);
    }
    if (k != 0) {
      sum1 = s;
    }
    inp.innerText = null;
    que.innerText = sum1 + a[i].innerText;
    if (a[i].innerText === "+") {
      k = 1;
    } else if (a[i].innerText === "-") {
      k = 2;
    } else if (a[i].innerText === "*") {
      k = 3;
    } else if (a[i].innerText === "/") {
      k = 4;
    }
  });
}
eq.addEventListener("click", () => {
  if (inp.innerText !== "") {
    sum2 = parseInt(inp.innerText);
    inp.innerText = null;
    que.innerText += sum2;
    switch (k) {
      case 1:
        ans.innerText = "Answer : " + (sum1 + sum2);
        break;
      case 2:
        ans.innerText = "Answer : " + (sum1 - sum2);
        break;
      case 3:
        ans.innerText = "Answer : " + sum1 * sum2;
        break;
      case 4:
        ans.innerText = "Answer : " + sum1 / sum2;
        break;
    }
    sum1 = 0;
    sum2 = 0;
  }
});
ac.addEventListener("click", () => {
  sum1 = 0;
  sum2 = 0;
  k = 0;
  que.innerText = "";
  ans.innerText = "Answer : ";
  inp.innerText = "";
});
