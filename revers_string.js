let str = 'hello world'
let revStr = ''
for (let i = str.length - 1; i >= 0; i--) {

    let char = (str[i]);
   revStr = revStr + char
   
}
console.log(revStr);

