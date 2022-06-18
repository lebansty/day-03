let arr=['apple','orange','mango','berry'];

let arrJSON= JSON.stringify(arr);
 console.log(arrJSON);

 let arrobj=JSON.parse(arrJSON);
 console.log(arrobj);

 for(let ele of arrobj ){
  console.log(ele);
 }

 for (let ele in arrobj){
  console.log(arrobj);
 }

 for(let i=0;i<=arrobj.length-1;i++){
  console.log(arrobj[i]);
 }

 arrobj.forEach(ary=>{
  console.log(ary);
 });


// for(let csk in arr){
//   //  console.log(csk);
// }

// let bio={
//     naMe:"Lebansty Valan",
//     age:"24",
//     location:"Nagercoil"

// }
// for(let i in bio){
//     console.log(i,bio[i] );
// }