"use strict";
exports.__esModule = true;
function printDiamondPattern() {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j + i <= 5; j++) {
            process.stdout.write(" ");
        }
        for (var k = 1; k <= i; k++) {
            process.stdout.write("* ");
        }
        console.log();
    }
    for (var i = 4; i >= 0; i--) {
        for (var j = 1; j <= 4 - i; j++) {
            process.stdout.write(" ");
        }
        for (var k = 1; k <= i; k++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}
exports.printDiamondPattern = printDiamondPattern;
