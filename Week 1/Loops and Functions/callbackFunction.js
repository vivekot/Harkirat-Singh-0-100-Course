function square(n){
  return n*n;
}
function cubes(n){
  return n*n*n;
}
function sumOfSquare(a,b,fn){
  const val1=fn(a);
  const val2=fn(b);
  return val1+val2;
}
const ans=sumOfSquare(2,2,square);
console.log(ans);