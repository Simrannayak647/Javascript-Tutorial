let sub1= 85;
let sub2 =75;
let sub3= 90;

let totalMarks=sub1+sub2+sub3;

let avgm=totalMarks/3;

let grade;
if(avgm>=80){
grade= " A";
}else if(avgm>=60&&avgm<80){
    grade="B"
}
else if(avgm>=40&&avgm<=60){
    grade="C"
}
else if(avgm<40){
    grade="F"
}
console.log("Total marks",totalMarks);
console.log("Average Marks",avgm);
console.log("Grade:",grade);
