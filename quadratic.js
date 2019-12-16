function quadratic(a,b,c){
	if(a==0){
		return [];
	}
	raiz1=(-b+Math.sqrt(b*b+4*a*c))/(2*a);
	raiz2=(-b+Math.sqrt(b*b-4*a*c))/(2*a);
	return [raiz1, raiz2];
}

console.log(quadratic(2,3,5));
(2) [1, NaN]