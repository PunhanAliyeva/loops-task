var num=2;
let count=0;
for (let i=1; i<=num; i++) {
   if(num%i==0){
    count++;
}
}
   if(count==2) {
    console.log("prime");
   }
   else if(num==1){
       console.log("neither prime nor composite");
   }
   else{
    console.log("composite");
   }
   