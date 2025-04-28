const values= [42, "hello", true, null, { name: "Bob" }, [1, 2]];
const counts={};
for(i=0;i<values.length;i++){
    let type =typeof values[i]
    if(values[i]===null){
        type='null'
    }
    if (counts[type]){
        counts[type] += 1;
      } else {
        counts[type] = 1;
    }
}
console.log(counts)