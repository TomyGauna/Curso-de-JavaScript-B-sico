var j = 1;
var i = 1;

factorial: while (i <= 10) {
  i++;
  j = j * i;
  console.log(j);
  if (i === 10) {
    console.log("ya terminamos");
    break factorial;
  }
}
