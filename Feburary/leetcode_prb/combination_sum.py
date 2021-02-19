#  2. ​https://leetcode.com/problems/combination-sum/

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(target, start):
            if target == 0:
                result.add(tuple(curr_comb))
                return

            for i in range(start, len(candidates)):
                num = candidates[i]
                if target - num >= 0:
                    curr_comb.append(num)
                    backtrack(target - num, i)
                    curr_comb.pop()
                else:
                    # Pruning the tree
                    break

        candidates.sort()
        result = set()
        curr_comb = []
        backtrack(target, 0)
        return list(map(list, result))