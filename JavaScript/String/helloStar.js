let str = 'hello'

function x(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result +=     i % 2 === 0 ?   str[i] : '*';
    }
    console.log(result);
  }
  

x(str)