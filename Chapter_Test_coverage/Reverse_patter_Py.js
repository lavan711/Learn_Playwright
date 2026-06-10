// Reverse pattern
let n=5;
for(let i=n; i>=1; i--){
    let row = " ";
    for(let j=1; j<=i; j++){
        row += "*"; 
    }
    console.log(row.trim());
}

// Reverse pattern:
// *****
// ***
// *

let n=5;
for(let i=n; i>=1; i--){
    let row = " ";
    for(let j=n-i+1; j<=i; j++){
        row += "*";
    }
    console.log(row.trim());
    
}


//Right Pattern

let n=5;
for(let i=n-2; i<=n; i++){
    let row = " ";// to store the pattern for each row
    for(let j=n-i+1; j<=i; j++){
        row += "*";
    }
    console.log(row.trim());    
}

//Build in method for reverse pattern
for (let i = 6; i > 0; i--) {
    console.log("*".repeat(i));
}


// Pyramid pattern
//     *
//    ***
//   *****
//  *******
// *********


    let n=5
    for (let i=1; i<=n; i++){
        let row="";
        for (let j=1; j<=n-i; j++){
            row+=" ";
        }
        for (let k=1; k<=2*i-1; k++){
            row+="*";
        }   
        console.log(row);
    }


