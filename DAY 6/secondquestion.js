console.log("Multiplication");
n=prompt("Enter the number");
v=prompt("Till which you want table to be");
for(i=1;i<=v;i++)
{
    document.write(String(n)+"X"+String(i)+"="+String(n*i));
    document.write("<br/>");
;}