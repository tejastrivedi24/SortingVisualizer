function BubbleSort(arr){

    const animations=[];
    const arr_copy = [...arr]

    let len = arr_copy.length;
    // let checked;
    var i=0;
    do {
        // checked = false;
        
        for (let j = 0; j < len-i-1; j++) {
            if (arr_copy[j] > arr_copy[j + 1]) {
              if(j===len-i-2){
                animations.push([[j,j+1],true,true]);

              }
              else{
                animations.push([[j,j+1],true,false]);
              }
                
                let tmp = arr_copy[j];
                arr_copy[j] = arr_copy[j + 1];
                arr_copy[j + 1] = tmp;
                // checked = true;
            }
            else{

              if(j===len-i-2){

                animations.push([[j,j+1],false,true]);

              }
              else{

                animations.push([[j,j+1],false,false]);
              }
            }
            
        }
        i++;
    } while (i<len-1);
    return animations;

    // for(let i=0; i<arr_copy.length; i++){
    //     for (let j=0; j<(arr_copy.length-i-1); j++){

    //         if(arr_copy[j]>arr_copy[j+1])
    //         {
    //             console.log("Swapping:",j,j+1)
    //             animations.push([[j,j+1],true]);
    //             var temp =arr[j]
    //             arr_copy[j]=arr_copy[j+1]
    //             arr_copy[j+1]=temp
    //         }
    //         else{
    //             animations.push([[j,j+1],false]);
    //         }
            
    //     }
    // }
    

    // return animations;

    
}
export const BubbleSortDesc = {
    title: 'Bubble Sort',
    description: (
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Bubble_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bubble Sort
        </a>{' '}
        is a simple sorting algorithm that repeatedly steps through the
        list, compares adjacent elements and swaps them if they are in the
        wrong order.The pass through the list is repeated until the list
        is sorted. The algorithm, which is a comparison sort, is named for
        the way smaller or larger elements "bubble" to the top of the
        list.
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
  };
export default BubbleSort