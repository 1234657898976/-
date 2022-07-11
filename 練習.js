var E,C=-1;
var F=-1;
var D=[100];
D[0]=aqua;
D[1]=blueviolet;
D[2]=darkgreen;
D[3]=gold;
D[4]=magenta;
D[5]=saddlebrown;
function b(){
    var A=[10],B=[50];
    for (E=0;E<=10;E++){
        A[E]=0;
    }
    for (E=0;E<=50;E++){
        B[E]=F+2;
    }
    A[0]="#990000";
    A[1]="#009900";
    A[2]="#000000";
    A[3]="0000099";
    B[0]="你真的很閒齁來點按鈕";
    B[1]="阿巴阿巴";
    B[20]="你肯定太無聊了";
    if (A[C+1]===0){
        C=-1;
    }
    C++;
    F++;
    if (F>50){
       document.getElementById("D").innerHTML=F;
    }else{
       document.getElementById("D").innerHTML=B[F];
    }
    document.getElementById("1").style.backgroundColor=A[C];
    document.getElementById("2").style.backgroundColor=A[C+1];
    document.getElementById("3").style.color="white";
    document.getElementById("3").style.borderColor="white";
}
