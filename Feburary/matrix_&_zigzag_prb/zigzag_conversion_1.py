#  Q3. ​https://leetcode.com/problems/zigzag-conversion/


class Solution:
    def convert(self, s: str, rows: int) -> str:
        if rows == 1:
            return s

        result = ""
        ls = len(s)

        current_row = 0
        while current_row < rows:
            for i in range(current_row, ls, 2 * rows - 2):
                result += s[i]
                if current_row > 0 and current_row < rows - 1 and i + 2 * (rows - current_row) - 2 < ls:
                    result += s[i + 2 * (rows - current_row) - 2]

            current_row += 1

        return result