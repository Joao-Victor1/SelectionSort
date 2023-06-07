//SelectionSort
function selectionSort(array){
    for(var i = 0; i < array.length; i++){
        let min = i;

        for(let j = i + 1; j < array.length; j++){
            if(array[min] > array[j]){
                min = j;
            }
        }
        
        if(i !== min){
            let x = array[i];
            array[i] = array[min]
            array[min] = x
        }
    }
}

data = [6,3,5,1,2,7,4,8];
selectionSort(data);
console.log(data);