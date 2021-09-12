import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members) == false) {
    return false;
  }
  let result = [];
  let name = '';
  for (let e of members) {
    if (typeof (e) == 'string') {
      result.push(e.trim()[0].toUpperCase());
    }
  }
  result.sort();
  for (let s of result) {
    name += s;
  }
  return name;
}
