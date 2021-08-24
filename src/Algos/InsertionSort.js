function InsertionSort(arr) {
    console.log("This is the unsorted array:",arr)
    const arr_copy=[...arr]
    const animations=[]
    let n = arr_copy.length;
    for (let i = 1; i < n; i++) {
        let current = arr_copy[i];
        let j = i-1;
        
        
        while ((j > -1) && (current < arr_copy[j])) {
            animations.push([[j,j+1],true]);
            // animations.push([[j+1,j],true]);
            arr_copy[j+1] = arr_copy[j];
            j--;
            
        }
        if(j>=0){
            animations.push([[j,j+1],false]);
        }
        
        arr_copy[j+1] = current;
    
    }

    console.log("This is the sorted array:",arr_copy)
    return animations;
}

export const InsertionSortDesc = {
    title: 'Insertion Sort',
    description: (
      <p>
        
          
        Insertion Sort
        is a simple sorting algorithm that iterates through an array and
        at each iteration it removes one element from the array, finds the
        location it belongs to in the sorted list and inserts it there,
        repeating until no elements remain in the unsorted list. It is an
        in-place, stable sorting algorithm that is inefficient on large
        input arrays but works well for data sets that are almost sorted.
        It is more efficient in practice compared to other quadratic
        sorting algorithms like bubble sort and selection sort.
      </p>
    ),
    worstCase: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    avgCase: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    bestCase: <span>O(n)</span>,
    space: <span>O(1)</span>
  };

  
export default InsertionSort