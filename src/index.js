module.exports = function reverse (n) {
    let n2 = n;
  if (n < 0) {n2 = Math.abs(n)}
  let str = n2.toString();
  str2 = str.split('').reverse().join('')
  
  //if (n < 0) {return parseInt(str2)*(-1)}
  return parseInt(str2)
}
