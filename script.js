"use strict";
function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step || 1;
  document.write("<table border='1'>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}
function quadratic(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}

let request = prompt(
  "Выберите математическое дейтсвие (1 - возведение в квадрат, 2 - в куб, 3 - корень с числа, 4 - синус, 5 - округление):"
);
let error = "";
switch (request) {
  case "1":
    printTable(0, 10, 1, quadratic);
    break;
  case "2":
    printTable(0, 10, 1, cube);
    break;
  case "3":
    printTable(4, 16, 4, Math.sqrt);
    break;
  case "4":
    printTable(0, 10, 1, Math.sin);
    break;
  case "5":
    printTable(1.5, 5.2, 1, Math.trunc);
    break;
  case null:
    alert("До свидания!");
    break;
  default:
    alert("Такого действия нет!");
    break;
}
