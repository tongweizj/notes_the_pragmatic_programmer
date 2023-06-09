// [原题](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

// ## 解题思路

// 看这篇文章
// https://www.jiuzhang.com/solution/find-minimum-in-rotated-sorted-array-ii/

// ![](https://media-test.jiuzhang.com/media/markdown/images/6/3/69453bce-a579-11ea-bee7-0242c0a8b005.jpg)
// 我在做这段题的时候，做对了

// 1. 根据预判最小值在mid 对左边，还是右边去划分

// 没做好的

// 1. 没有找到对的方法，来区分情况

// 上文解题思路中，很简单，用mid 分别去和 left 、right 别大小，来判断情况
// 我因为受上一题的影响，觉得要用非常复杂的方法去判断。
// 陷入的死胡同

// 2. 想到了连号的问题，但没有想到该怎么处理
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    console.log("mid:", mid);
    if (nums[left] <= nums[mid] && nums[mid] <= nums[right]) {
      console.log("1", left, right);
      return nums[left];
    }

    if (nums[mid] < nums[left] && nums[mid] <= nums[right]) {
      if (nums[left] <= [right]) right = mid - 1;
      else left = mid + 1;
      console.log("2", left, right);
    } else if (nums[mid] >= nums[left] && nums[mid] > nums[right]) {
      if (nums[left] <= [right]) right = mid - 1;
      else left = mid + 1;

      console.log("3", left, right);
    }
  }
  console.log("right:", right);
  return nums[right];
};
let nums = [3, 1, 1];
let out = findMin(nums);

console.log(out);
