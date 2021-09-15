import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  let rep = 1;
  let sep = '+';
  let addStr = '';
  let addRep = 1;
  let addSep = '|';
  let result = '';
  for (let op in options) {
    if (op == "repeatTimes") {
      if (Number.isInteger(options[op])) {
        rep = options[op];
      }
    }

    if (op == "separator") {
      sep = options[op];
    }

    if (op == "addition") {
      addStr = String(options[op]);
    }

    if (op == "additionRepeatTimes") {
      if (Number.isInteger(options[op])) {
        addRep = options[op];
      }
    }

    if (op == "additionSeparator") {
      addSep = options[op];
    }
  }

  let j = 0;
  for (let i = 0; i < rep; i++) {
    result += str;
    for (let j = 0; j < addRep; j++) {
      result += addStr;
      if (j == addRep - 1) { break; }
      result += addSep;
    }
    if (i == rep - 1) { break; }
    result += sep;
  }

  return result;
}
