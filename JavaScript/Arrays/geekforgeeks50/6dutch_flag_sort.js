// Sort an array of 0s, 1s and 2s | Dutch National Flag problem

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}


// Elements less than 1 are at the beginning of the array(low pointer)
// Elements equal to 1 are in the middle of the array(mid pointer)
// Elements greater than 1 are at the end of the array(high pointer)
// It iterates through the array and uses if-else statements to determine which region the current element belongs in.When it encounters a 0,
//  it swaps the element with the element at the low pointer, and then increments both the low and mid pointers.When it encounters a 1,
//  it simply increments the mid pointer.When it encounters a 2, it swaps the element with the element at the high pointer, and then decrements
// the high pointer.

function dutch_flag_sort(arr) {
    let low = 0;
    mid = 0;
    high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }

    return arr
}

console.log(dutch_flag_sort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
