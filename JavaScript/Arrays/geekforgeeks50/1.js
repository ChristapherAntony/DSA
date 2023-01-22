// Find a peak element which is not smaller than its neighbours

function peakElem (arr){
    let peak=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            peak[peak.length]=arr[i]
        }
    }
    return peak
}

console.log(peakElem([ 1, 3, 1,40, 60,20]));
//   o(n)t
//   o(1)S




