export function choice(arr){
    const randomColor=Math.floor(Math.random()*arr.length)
    return arr[randomColor]
} 