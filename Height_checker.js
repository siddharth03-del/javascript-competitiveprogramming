var heightChecker = function(heights){
    let sorted = Array.from(heights)
    heights.sort((a,b) => a - b);
    let count = 0;
    for(let i = 0; i < heights.length; i++){
        if(heights[i] != sorted[i]){
            count++;
        }
    }
    return count;
}