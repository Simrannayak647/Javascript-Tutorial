<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript tutorial</title>
  </head>
  <body>
    <h1>Javascript Tutorial</h1>
    <script>
      // Declare a variable and assign a value
      var myVariable = "This is a simple javascript hello world program";
      document.writeln(myVariable);
      //assignment operator
      let x = 11;
      x += 2;
      console.log(x);
      //substraction operator
      let y = 30;
      y -= 3;
      console.log(y);
      //mulitiplication operator
      z = 29;
      z *= 3;
      console.log(z);
      //division operator
      a = 10;
      a /= 3;
      console.log(a);
      //modulus operator
      b = 23;
      b %= 2;
      console.log(b);
      //increment operator
      c = 15;
      c++;
      console.log(c);
      //decrement operator
      d = 20;
      d--;
      console.log(d);
      //logical operators
      let e = 10;
      let f = 20;
      console.log(e > f); //false
      console.log(e < f); //true
      console.log(e == f); //false
      console.log(e === f); //false
      console.log(e != f); //true
      console.log(e !== f); //true
      //bitwise operators
      console.log(e & f); //10
      console.log(e | f); //30
      console.log(e ^ f); //30
      console.log(~e); //-11
      console.log(e << 1); //20
      console.log(e >> 1); //
    </script>
  </body>
</html>
