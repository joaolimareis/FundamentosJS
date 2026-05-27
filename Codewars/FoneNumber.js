function foneNumber (arr){
    let text = arr.join("");
    console.log( `(${text.slice(0,3)}) ${text.slice(3,6)}-${text.slice(6, 10)}`)
}
foneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);