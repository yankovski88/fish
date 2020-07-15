var getNameFile = function (b) {
    var a = [];
    var arr = [];
    for (var i = 0; i <= b.length; i++) {
        a.push(b[i]);
    }
    ;
    a.reverse();
    for (var i = 0; i <= a.length; i++) {
        arr.push(a[i]);
        if (a[i] === ".") {
            break
        }
    }
    arr.reverse();
    var str = arr.join('');
    if (str[0] === ".") {
        return (str);
    } else {
        return ('');
    }
};

console.log(getNameFile("log"));

// function getFileExtension(filename) {
//     const result = [];
//
//     for (let i = filename.length - 1; i >= 0; i--) {
//         if (filename[i] === '.') {
//             break;
//         } else {
//             result.push(filename[i]);
//         }
//     }
//
//     return result.reverse().join('');
// }
// console.log(getFileExtension("filename"));






