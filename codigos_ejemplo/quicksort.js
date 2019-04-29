var arr=[7,5,1,8,4,2,2,6];

function qSort(arr){
  if(arr.length <=1){
    return arr;
  }
  else
  {
    var pivot=Math.round(Math.random()*(arr.length-1));
    console.log("Pivot en indice",pivot);
    pivot=arr[pivot];
    console.log("Pivot en valor",pivot);
    var max=[];
    var min=[];
    var p=[];
    for(var el in arr){
      console.log("El en indice",el);
      el=arr[el];
      console.log("El en valor",el);
      if(pivot> el){
        min.push(el);
        console.log("Min",min);
      }
      else if(pivot<el){
        max.push(el);
        console.log("Max",max);
      }
      else
      {
        p.push(el);
        console.log("P",p);
      }
    }

  }
  return ((qSort(min)).concat(p,qSort(max)));
}

console.log("sort",qSort(arr));