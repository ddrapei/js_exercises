let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binary_search(vector, target) {
    let low = 0;
    let high = array.length - 1;
    while (low < high) {
        let mid = Math.floor((high + low) / 2);
        if (vector[mid] == target) {
            console.log("The target was found at index:", mid);
            return mid;
        } else if (vector[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    console.log("The number is not in the array");
}

binary_search(array, 8);
binary_search(array, 39);

