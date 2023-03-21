var num = 4319;
var result;
if(num>=999){
a = Math.floor(num/1000);
b = (((num%1000)-(num%1000)%100))/100;
c = ((num-num%10)/10)%10;
d = num%10;
result = Math.max(a,b,c,d);
}
 console.log(result);

