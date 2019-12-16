function min(array){
	if(array.length==0)
	return 0;
	min=array[0];
	for (var i=0; i<array.length; i++){
		if(array[i]<min){
			min=array[i]
			return min;
		}
	}
}

console.log(min([6,2,5,4]));