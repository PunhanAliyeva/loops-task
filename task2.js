var num = 1243;
let sum1=0;
let sum2=0;
if(num>=999){
a = Math.floor(num/1000);
b = (((num%1000)-(num%1000)%100))/100;
c = ((num-num%10)/10)%10;
d = num%10;
sum1=a+c;
sum2=b+d;
}
 console.log(sum1*sum2);


