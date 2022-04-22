let arr = ["a","b","3","4","5"]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

let arr = ["1","b","3","4","5"]

f1(arr)

function f1(nums){
    for(let n of nums){
        console.log(n)
    }
}