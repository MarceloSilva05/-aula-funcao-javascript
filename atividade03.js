
//1
function receberString(palavra){

let contador=0;
 let palavraArray=palavra.split(" ");
    for (let n = 0; n < palavraArray.length; n++) {
        if(palavraArray[n]=="tudo") {
        contador+=1;
        }
    }
    console.log(contador);;
}
receberString("oi tudo bem tudo");


//2

let numeros=(n=[1,2,3,4,5])=>{
console.log(n.reverse());
}
numeros();

//3
let quatroNumeros=(n=1,n2=2,n3=3,n4=4)=>{
    let resultado=n+n2+n3+n4;
    console.log(resultado);
}
quatroNumeros();
