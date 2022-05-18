//var text=document.getElementsByClassName('screen');
function clearScreen(){
    document.getElementById("result").value="";
}
function display(str)
{
    document.getElementById("result").value+=str;
    return str;
}
function solve(){
    var ans=document.getElementById("result").value;
    var result=eval(ans);
    document.getElementById("result").value=result;
    return result;
}
