var num=189;
let count=0;
for (let i = 0; i <=num ; i++) {
    if(num==2**i){
        count++;
    }
    }
    if(count==1){
        console.log(true);
    }
    else{
        console.log(false);
    }
