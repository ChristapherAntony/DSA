const romanToInt = (s) => {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    let sum = 0;

    for (let i = 0; i < s.length; i += 1) {
        const curValue = map.get(s[i]);
        console.log(curValue,"c");
        const nextValue = map.get(s[i + 1]);
        console.log(nextValue,"n");
        if (nextValue > curValue) {
            sum = sum + nextValue - curValue;
            i += 1;
        } else {
            sum += curValue;
        }
    }

    return sum;
};


console.log(romanToInt('DCCCLXVIII'));

