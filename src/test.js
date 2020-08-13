function xyz(num) {
  var flag = false;
  while (!flag && num != 0) {
    r = num % 10;
    if (r == 7) flag = true;
    num = Math.floor(num / 10);
  }
  return flag;
}

console.log(xyz(14));
