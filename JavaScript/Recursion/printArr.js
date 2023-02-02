let arr = [1, 5, 7, 3, 7];
function outer(arr) {
    let i = 0;
    const print = (arr) => {
        if (i >= arr.length) return;
        console.log(arr[i]);
        i++;
        print(arr);
    };
    print(arr);
}
outer(arr);
