/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> String <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

/**
 * LeetCode Problem:
 * 3. Longest Substring Without Repeating Characters
 * Time Complexity: O(n)
 * Space Complexity: O(min(n,m))
 */
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  let longestSubStr = 0, count = 0;
  let map = new Map();
  for (let left = 0, right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right);
    count = right - left + 1;
    longestSubStr = Math.max(longestSubStr, count);
  }
  return longestSubStr;
}

/**
 * LeetCode Problem:
 * 49. Group Anagrams
 * Time Complexity: O(n * k * log k)
 * Space Complexity: O(n * k)
 */
function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();
  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    map.set(sortedStr, [...(map.get(sortedStr) ?? []), str]);
  }
  return [...map.values()];
}

/**
 * LeetCode Problem:
 * 459. Repeated Substring Pattern
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function repeatedSubstringPattern(s: string): boolean {
  let subStr = '';
  let index = 0;
  const sLength = s.length;
  while (index < Math.floor(sLength / 2)) {
    subStr += s[index];
    if (subStr.repeat(Math.floor(sLength / subStr.length)) === s) {
      return true;
    }
    index++;
  }
  return false;

}

/**
 * LeetCode Problem:
 * 2243. Calculate Digit Sum of a String
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function digitSum(inputString: string, groupSize: number): string {
  while (inputString.length > groupSize) {
    let count = 0;
    let groupsSum = 0;
    let outputString = '';
    for (let i = 0; i < inputString.length; i++) {
      groupsSum += Number(inputString[i]);
      count++;
      if (count === groupSize) {
        outputString += `${groupsSum}`;
        groupsSum = 0;
        count = 0;
      } else if (i + groupSize > inputString.length && i == inputString.length - 1) {
        outputString += `${groupsSum}`;
      }
    }
    inputString = outputString;
  }
  return inputString;
}


/**
 * LeetCode Problem:
 * 2319. 242. Valid Anagram
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let sLetters = new Map();
  let tLetters = new Map();
  for (let i = 0; i < s.length; i++) {
    sLetters.set(s[i], (sLetters.get(s[i]) || 0) + 1);
    tLetters.set(t[i], (tLetters.get(t[i]) || 0) + 1);
  }
  let iterator = sLetters.keys();
  for (let i = 0; i < sLetters.size; i++) {
    let letter = iterator.next().value;
    if (sLetters.get(letter) !== tLetters.get(letter)) return false;
  }
  return true;
}

/**
 * LeetCode Problem:
 * 58. Length of Last Word
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function lengthOfLastWord(s: string): number {
  let isLetter = false;
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let cur = s[i];
    if (cur !== ' ') isLetter = true;
    if (cur !== ' ' && isLetter) count++;
    else if (count) break;
  }
  return count;
}

/**
 * LeetCode Problem:
 * 12. Integer to Roman
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function intToRoman(num: number): string {
  const roman: [number, string][] = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
  ];
  let ans: string = "", i = roman.length - 1;
  while (num) {
    let digit = roman[i][0], romanDigit = roman[i][1];
    if (digit <= num) {
      ans += romanDigit;
      num -= digit;
    } else {
      i--;
    }
  }
  return ans;
}

/**
 * LeetCode Problem:
 * 13. Roman to Integer
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function romanToInt(s: string): number {

  const roman: { [key: string]: number } = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = roman[s[i]], next = roman[s[i + 1]];
    if (cur < next) {
      ans += next - cur;
      i++;
    } else ans += cur;
  }
  return ans;
}

/**
 * LeetCode Problem:
 * 191. Number of 1 Bits
 * Time Complexity: O(k)
 * Space Complexity: O(1)
 */
function hammingWeight(n: number): number {
  let ans: number = 0;
  while (n) {
    if (n & 1) ans++;
    n = n >>> 1;
  }
  return ans;
}
