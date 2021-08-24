var animations=[];


function partition(arr, startIndex, endIndex) {

  const pivotVal = arr[endIndex]; 
  let index = startIndex;

  for (let i = index; i < endIndex; i++) {

    if (arr[i] < pivotVal) {
      animations.push([[i,endIndex,index],true]);
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
    else{
      animations.push([[i,endIndex,index],false]);
    }

  }

  animations.push([[index,endIndex],true]);
  [arr[index], arr[endIndex]] = [arr[endIndex], arr[index]];
  return index;

}

function quickSort(arr, startIndex, endIndex) {

  if (endIndex<0 || startIndex >= arr.length || startIndex > endIndex){
    return;
  }

 
  if(startIndex === endIndex){
    animations.push([[startIndex,endIndex],false])
    return;
  }


  if (startIndex>=arr.length || startIndex<0){

    return;

  }


  let midIndex = partition(arr, startIndex, endIndex);

  quickSort(arr, startIndex, midIndex - 1);
  quickSort(arr, midIndex + 1, endIndex);
}

export default function QuickSort(arr){

  const arr_copy=[...arr]

  
  quickSort(arr_copy,0,arr_copy.length-1);
  return animations;
}



export const QuickSortDesc = {
    title: 'Quick Sort',
    description: (
      <div>
        <p>
          
            Quick Sort
          
          is an efficient, in-place sorting algorith that in practice is
          faster than MergeSort and HeapSort. However, it is not a stable
          sorting algorithm, meaning that the relative positioning of
          equal sort items is not preserved.Quicksort is a divide and
          conquer algorithm. Quicksort first divides a large array into
          two smaller sub-arrays: the low elements and the high elements.
          Quicksort can then recursively sort the sub-arrays. The steps
          are:
        </p>

      </div>
    ),
    worstCase: (
      <span>
        O(<em>n</em>
        <sup>2</sup>)
      </span>
    ),
    avgCase: (
      <span>
        O(<em>n</em>log<em>n</em>)
      </span>
    ),
    bestCase: (
      <span>
        O(<em>n</em>log<em>n</em>)
      </span>
    ),

  };