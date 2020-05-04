var x=100;
document.write(x)

var y="hola";
document.write(y);
 
document.write("<table border=1 rules=all>");
for (var i = 1; i <= 5; i++) {
    document.write("<tr><td style=padding:10px>"+i+"</td></tr>");
}
document.write("</tr></table>");

var x = 1

for(x=1;x<=5;x++){
    document.write("<table border=1><tr><td>"+x+"</td></tr> </table>")
}