#SelectionSort
def selection_sort(array):
    for i in range(len(array)):
        min = i

        for j in range(i+1, len(array)):
            if array[min] > array[j]:
                min = j        
       
        array[i], array[min] = array[min], array[i]
    
data = [6,5,3,4,1,2,7,8]
selection_sort(data)
print(data)

