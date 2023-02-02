var longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first word
    for (let i = 0; i <= strs[0].length; i++) {
        // Check if this character is present in the same position of every string
        if (!strs.every((string) => string[i] === strs[0][i])) {
            // If not, return the string up to and including the previous character
            
            return strs[0].slice(0, i);
            console.log(strs);
        }
    }
    return strs[0];
};
let strs=["flower","flow","flight"]
console.log(longestCommonPrefix(strs)); // "abc"
console.log(strs);
