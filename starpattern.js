document.write("Right Angled triangle");
document.write("<br>")

for(let i=1;i<=5;i++){

   for(let j=1;j<=i;j++){
    document.write("*");
   }
   document.write("<br>")

}

document.write("Inverted Angled triangle");
document.write("<br>")

for(let i=5;i>=1;i--){
    
    for(let j=1;j<=i;j++){

        document.write("*")
    }
    document.write("<br>");
}

document.write("Oposite side triangle");
document.write("<br>")

for(let i=1;i<=5;i++){
    for (let k=1; k <=5-i; k++){
        document.write("&nbsp&nbsp");
    }
    for(j=1;j<=i;j++){
        document.write("*");
    }
    document.write("<br>")
}
document.write("Oposite side Inverted  triangle");
document.write("<br>")
for(let i=5;i>=1;i--)
{
    for(let k=1;k<=5-i;k++){
        document.write(" &nbsp ");
    }
    for(j=1;j<=i;j++){
        document.write("*"); 

    }
    document.write("<br>");
}
