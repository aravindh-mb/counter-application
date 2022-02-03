var count=0;
function increment(){
    count =count+1;
    console.log(count);
    document.getElementById('count').innerHTML=count;
}
function decrement(){
    count =count-1;
    console.log(count);
    document.getElementById('count').innerHTML=count;
}
function save(){
    let countstr =count+"-";
     document.getElementById('save-in').innerHTML +=countstr;
   console.log(count);
}
