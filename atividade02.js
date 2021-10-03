/*
Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:

a)       Converter o array para string e retornar o resultado.

b)      Chamar a função e exibir o resultado no console.
*/
//1
let doisParametros=(numero,percentual)=>{
    let resultado=(numero/100)*percentual;
    console.log(resultado);
}
doisParametros(50,20);

//2
let doisArrays=(a1=[],a2=[])=>{
 let unir=a1.concat(a2);

console.log(unir.toString());
}
doisArrays([2,5],[6,8]);
