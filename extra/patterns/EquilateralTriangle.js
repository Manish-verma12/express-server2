export function printEquilateralTriangle() {
    for(let i=1; i<=5 ; i++){
    for(let j=1; j+i <= 5; j++){
        process.stdout.write(" ");
    }
    for(let k=1; k<=i ; k++){
        process.stdout.write("* ");
    }
    console.log();
}
}
