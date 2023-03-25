/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> Math <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/
/**
 * LeetCode Problem:
 * 441. Arranging Coins
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function arrangeCoins(n: number): number {
  let ans: number = 0;
  for (let i = 1; i <= n; i++) {
    n -= i;
    ans++;
  }
  return ans;
}

/**
 * LeetCode Problem:
 * 1523. Count Odd Numbers in an Interval Range
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function countOdds(low: number, high: number): number {
  let result = 0;
  if (low % 2 == 0 && high % 2 == 0)
    result = (high - low) / 2
  if (low % 2 != 0 && high % 2 != 0)
    result = ((high - low) / 2) + 1
  if ((low % 2 == 0 && high % 2 != 0) || (low % 2 != 0 && high % 2 == 0))
    result = Math.floor((high - low) / 2) + 1
  return result;
}


/**
 * LeetCode Problem:
 * 441. Arranging Coins
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function average(salary: number[]): number {
  let min = Number.MAX_VALUE, max = Number.MIN_VALUE, sum = 0;
  for (const s of salary) {
    if (s < min) min = s;
    if (s > max) max = s;
    sum+=s;
  }
  return (sum - (min+max)) /( salary.length -2);
}


/**
 * LeetCode Problem:
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function subtractProductAndSum(n: number): number {
  let product =1 ,sum = 0;
  while(n){
    let digit =   n %10;
    product *=digit  ;
    sum+=digit
    n= Math.trunc(n/10);
  }

  return product-sum;
}


