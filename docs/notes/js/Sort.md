## Sort 排序
### sort函数
``` js {8}
function sortNumber(a,b)
{
    return a - b
}

var arr = [10,5,40,25,1000,1]

console.log(arr.sort(sortNumber)) // 输出1,5,10,25,40,1000
```
### 冒泡排序 
``` js {11}
let arr = [21,11,44,21,12,14,32,31,53]
for(let i=0;i<arr.length;i++){
	for(let j=0;j<arr.length;j++){
		if(arr[i]>arr[j]){
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}
console.log(arr) //输出53,44,31,21,21,14,12,11
```
### 选择排序 
``` js {17}
let arr = [21, 11, 44, 21, 12, 14, 32, 31, 53]
function selectionSort(arr) {
    let len = arr.length
    let minIndex
    for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
        //寻找最小的数
        minIndex = j //将最小数的索引保存
        }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}
console.log(selectionSort(arr)) //输出53,44,31,21,21,14,12,11
```