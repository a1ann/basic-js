import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (Array.isArray(arr) == false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let a = Array.from(arr);
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof (a[i]) == 'string') {
      if (a[i] == '--discard-next' && i + 1 < a.length) {
        a[i + 1] = '*';
      }
      if (a[i] == '--discard-prev' && a[i - 1] != '*' && i - 1 >= 0) {
        result.pop();
      }
      if (a[i] == '--double-next' && i + 1 < a.length) {
        result.push(a[i + 1]);
      }
      if (a[i] == '--double-prev' && a[i - 1] != '*' && i - 1 >= 0) {
        result.push(a[i - 1]);
      }
    }
    else {
      result.push(a[i]);
    }
  }
  return result;
}
