function stringEnd (start, end){
    return start.slice(-end.length) === end //o end fica como uma string vazia.. por isso tenho que usar o endsWith para fazer uma verificação melhor

}

stringEnd("abc", "bc")

function solution(str, ending) {
  return str.endsWith(ending);
}