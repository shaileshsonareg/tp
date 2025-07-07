/** WAP to print following patter 
 * 
CW1: o/p:-
1
12
123
1234
12345
*/

// row = 6

// for(i = 1; i <= row; i++) {
//     var output = ``
//     for(j = 1; j <= i; j++) {
//         output = output + `${j}\t` 
//     }
//     console.log(output);
// }












/*
CW2: o/p:- 
1
21
321
4321
54321
*/

// row = 5

// for(i = 1; i <= row; i++) {
//     output = ``
//     for(j = i; j >= 1; j--) {
//         output += `${j} \t`
//     }
//     console.log(output);
// }













/**
 * 
 * CW3: 
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
// cnt = 1
// for(i = 0; i < 5; i++){
//     output = ``
//     for(j = 0; j <= i; j++) {
//         output += `${cnt++} \t`
//     }
//     console.log(output);
    
// }



for (i = 5; i >= 1; i--) {
    output = ``
    for (j = 5; j >= i; j--) {
        output += `${j} \t`;
    }
    console.log(output);
}

