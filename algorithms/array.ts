/**
 * LeetCode Problem:
 * 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let validPointsIndex = -1, sum = x + y, minDif = Infinity;
  for (let i = 0; i < points.length; i++) {
    let curX = points[i][0], curY = points[i][1], curSum = curX + curY;
    let diff = Math.abs(curSum - sum)
    if ((curX === x || curY === y) && diff < minDif) {
      validPointsIndex = i;
      minDif = diff;
    }
  }
  return validPointsIndex;
}

/**
 * LeetCode Problem:
 * 53. Maximum Subarray
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxSubArray(nums: number[]): number {
  let max = nums[0], sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) sum = 0;
    sum += nums[i];
    max = Math.max(max, sum);
  }
  return max;
}


/**
 * LeetCode Problem:
 * 217. Contains Duplicate
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function containsDuplicate(nums: number[]): boolean {
  let map = new Map();
  for (const num of nums) {
    if (map.get(num) !== undefined) return true;
    else map.set(num, num);
  }
  return false;
}


/**
 * LeetCode Problem:
 * 1502. Can Make Arithmetic Progression From Sequence
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  let diff = Math.abs(arr[0] - arr[1]);
  for (let i = 1; i < arr.length - 1; i++) {
    let curDiff = Math.abs(arr[i] - arr[i+1]);

    if (curDiff!== diff ) return false ;
  }
  return true;
}