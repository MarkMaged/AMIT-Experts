const towersHeight = [1, 2, 3, 3, 3, 3];

function count(arr) {

    //find the largest value

    let largest = Math.max(...arr);

    // count the numbers of largest value in array

    let count = 0;
    for (let i = 0; i < towersHeight.length; i++) {
        towersHeight[i] === largest ? count = count + 1 : count;
    }
    console.log("The Numbers Of largest value in array is :" + count)
}
count(towersHeight)