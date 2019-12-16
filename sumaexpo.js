function expo(n){
	suma=0;
	for(var i=0; i<n; i++){
		suma=suma+1/(Math.pow(2,i));
		return suma;
	}
}

