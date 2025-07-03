let studen =[["Komal","Anshika","Priti"],["Adarsh","Arpit","Anurudh"]]
for(let i=0;i<studen.length;i++){
    console.log(i , studen[i],studen[i].length);
    for(let j =0;j<studen[i];j++){
        console.log(`j = ${j},${studen[i][j]}`)
    }
}

for(studentName of studen){
    console.log(studentName);
}
