for(let i=1; i<=5 ; i++){
  for(let j=1; j+i <= 5; j++){
      process.stdout.write(" ");
  }
  for(let k=1; k<=i ; k++){
      process.stdout.write("* ");
  }
  console.log();
}
for(let i= 4; i>=0 ; i--){
    for(let j=1 ; j<=4-i ; j++){
      process.stdout.write(" ");
    }
    for(k=1 ; k<=i ; k++){
      process.stdout.write("* ");
    }
    console.log();
}
