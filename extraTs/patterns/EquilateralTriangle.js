"use strict";
exports.__esModule = true;
function printEquilateralTriangle() {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j + i <= 5; j++) {
            process.stdout.write(" ");
        }
        for (var k = 1; k <= i; k++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}
exports.printEquilateralTriangle = printEquilateralTriangle;
