//var arr=[2,7,3,7,21,8];
//var end=arr.length-1;//6

function findmax(arr,end){
  var max=0;
  for(var i = 0; i<= end ; i++)
  {
    if(arr[i] > arr[max]){
      max=i;
    }
  }
  //return arr[max];
  return max;
}

function selectionSort(arr){
  var temp;
  for(var end = arr.length-1; end>=0;end--){
    maxpos=findmax(arr,end);
  //  console.log(maxpos);
    temp=arr[maxpos];
    arr[maxpos]=arr[end];
    arr[end]=temp;
  }
// return arr;
  console.log("arreglo",arr);
  return arr;
}

//console.log(findmax(arr,end));
//console.log(selectionSort(arr));
selectionSort([2,32,4,5,3]);