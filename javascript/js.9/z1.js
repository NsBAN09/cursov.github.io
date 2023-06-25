let massive =[4, 8, 2, 3, 1, 7, 9,];
let min= massive[0];
let max= massive[0];
for(i=0; i<massive.length;i++){
if(max < massive[i]){
    max=massive[i];
}

if(min > massive[i]){
    min=massive[i];
}
}
console.log(massive);
console.log(max);
console.log(min);