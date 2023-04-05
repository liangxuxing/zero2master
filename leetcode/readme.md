# 快慢双指针

leetcode26:[删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

```typescript
function removeDuplicates(nums: number[]): number {
   let fast:number=0
   let slow:number=0
   while(fast<nums.length){
       if(nums[slow]!==nums[fast]){
           slow++
           nums[slow]=nums[fast]
       }
       fast++
   }
   return slow+1
};
```

