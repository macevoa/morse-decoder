const MORSE_TABLE = {
  ' ':      ' ',
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let givenExpr = expr;
  let str = '';
  const arr = [];

  while (givenExpr.length > 10) {
    str = givenExpr.slice(-10);
    givenExpr = givenExpr.slice(0, -10);
    arr.push(str);
  }
  arr.push(givenExpr.padStart(10, '0'));

  arr.forEach((x, ind) => {
    str = '';
    for (let i = 0; i < x.length; i += 2) {
      const bit = x.slice(i, i + 2);
      if (bit === '10') {
        str += '.';
      }
      if (bit === '11') {
        str += '-';
      }
      if (bit === '**') {
        str = ' ';
        break;
      }
    }
    arr[ind] = MORSE_TABLE[str];
  });
  
  return arr.reverse().join('');
}

module.exports = {
  decode
}