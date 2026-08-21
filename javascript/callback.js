function sum(a,b) {
    return a+b;
}
function sumwithmsg(clbk,msg) {
    const result=clbk(20,30);
    const fresult="HI " + msg + " Your score is " + result;
    console.log(fresult);
}
sumwithmsg(sum,"Maggi");