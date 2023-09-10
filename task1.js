function display(n){
    document.getElementById("content").value+=n;
}
function result()
{
    var a=document.getElementById("content").value;
   var b=Function("return " + a)();
    document.getElementById("content").value=b;
    var c=document.getElementById('show');
   c.value=a;

}
function del()
{
    var a=document.getElementById("content").value;
    var b=a.apply(0,a.length-1);
    document.getElementById("content").value=b;
}
function clear2()
{
    var c=document.getElementById('show').value="";
document.getElementById("content").value="";

}

