// two loops, one  nested in the other
// first loop picks the friend, second loop runs the song lines

let friends = ['Amber', 'Anthony', 'Liv', 'Slone', 'Mark'];

for (let i of friends){
    friendName = i;
    console.log(i);{
        for(let i = 99; i > 0; i--){
            console.log(i + " lines of code in the file, " + i +  " lines of code; " + friendName + " strikes one out, clears it all out, " + (i-1) + " lines of code in the file");
        } 
    }  
}
