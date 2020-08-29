console.log("SOAL 1");
console.log("Semangat...".repeat(5));
console.log("=======================".repeat(5));
console.log("SOAL 2");
var x="*****";
var y=1;
for(i=0;i<9;i++)
{
  if(i<4)
  {
    console.log(x.repeat(y));
    y=y+4;
  }
  else if(i===4)
  {
    y=y+2;
    console.log(x.repeat(y));
    y=y-6
  }
  else
  {
    console.log(x.repeat(y));
    y=y-4;
  }
}
