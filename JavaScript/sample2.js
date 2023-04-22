function isAnagram(s, t) {
    if (s.length !== t.length) return false
    let carCount = new Map()
    for (let i = 0; i < s.length; i++) {
        carCount.set(s[i], (carCount.get(s[i]) || 0) + 1)
        carCount.set(t[i], (carCount.get(t[i]) || 0) - 1)
    }
    for (const count of carCount) {
        if(count!==0) return false
    }
    return true
}




console.log(isAnagram('anagram', 'nagraam'));