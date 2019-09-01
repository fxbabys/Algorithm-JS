/**
 * 给定一个整数数组，找到一个具有最大乘积和的连续子数组，返回其最大和
 */

const nums = [2, 3, -2, 4]

const maxProduct = nums => {
  let max = Number.MIN_VALUE, imax = 1, imin = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      let tmp = imax
      imax = imin
      imin = tmp
    }
    imax = Math.max(imax * nums[i], nums[i])
    imin = Math.min(imin * nums[i], nums[i])
    max = Math.max(max, imax)
  }
  return max
}

console.log(maxProduct(nums))