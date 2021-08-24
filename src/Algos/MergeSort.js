const mergeArrays = (a, b) => {
    const c = []
  
    while (a.length && b.length) {
        if (a[0]<b[0]){
            c.push(a.shift())
        }
        else{
            c.push(b.shift())
        }
    }
  
    while (a.length) {
      c.push(a.shift())
    }
    while (b.length) {
      c.push(b.shift())
    }
  
    return c
  }
  
  const mergeSorting = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = mergeSorting(a_l)
    const sorted_r = mergeSorting(a_r)
    return mergeArrays(sorted_l, sorted_r)
  }

function MergeSort(arr){
    console.log("Hey there ,this is merge sort")
    console.log("The array is:",arr)
    const in_built_sorted_array=arr.sort(function(a, b){return a - b});
    const my_sorted_array=mergeSorting(arr)
    console.log(in_built_sorted_array,my_sorted_array)
}

export const MergeSortDesc = {
  title: 'Merge Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Merge_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merge Sort
        </a>{' '}
        is an efficient, stable sorting algorith that makes use of the
        divide and conquer strategy. Conceptually the algorithm works as
        follows:
      </p>
      <ol>
        <li>
          Divide the unsorted list into <em>n</em> sublists, each
          containing one element(a list of one element is considered
          sorted)
        </li>
        <li>
          Repeatedly merge sublists to produce new sorted sublists until
          there is only one sublist remaining. This will be the sorted
          list.
        </li>
      </ol>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),

};
export default MergeSort