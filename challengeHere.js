// Solution to Challenge 52

const s1 = "ABCBDAB";
const s2 = "BDCAB";
const lcs = longestCommonSubsequence(s1, s2);
console.log(lcs); // Outputs: BCAB

function longestCommonSubsequence(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let result = "";
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            result = s1[i - 1] + result;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return result;
}

