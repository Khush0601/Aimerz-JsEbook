const closuresfun=()=>{
    let a=2;
    let b=4;
    return () =>{
        return a+b
    }
}
let c=closuresfun();
console.log(c())