var buttons=document.getElementsByClassName('button');
var input=document.getElementById('result');
var clear=document.getElementsByClassName('clear');
var op1=0;
var op2=null;
var op=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var value=this.value;
        if(value>=0 && value<=9||value=='.'){
            input.value+=value;
        }else if(value=='+'|| value=='-'||value=='*'||value=='/'){
            op1=parseFloat(input.value);
            op=value;
            input.value="";
        }else if(value=='='){
            op2=parseFloat(input.value);
            var result=eval(op1+" "+op+" "+op2);
            input.value=result;
        }else if(value=='C'){
            input.value="";
            op1=0;
            op=null;
            op2=null;
        }

    });
}
