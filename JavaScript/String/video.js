var name1="Adharsh";

function replaceAlphabets(str, n) {
    let replacedString = "";
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = (charCode - 65 + n) % 26 + 65;
      } else if (charCode >= 97 && charCode <= 122) { 
        charCode = (charCode - 97 + n) % 26 + 97;
      }
      replacedString += String.fromCharCode(charCode);
    }
    return replacedString;
  }


 console.log(replaceAlphabets(name1,2))