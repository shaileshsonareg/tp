privateFun = () => {
    console.log(`Im 4m private fun`);
}

exports.getSqr = (x) => {
    privateFun()
    console.log(x * x);
}

exports.add = (x, y) => {
    console.log(x + y);
}

exports.sub = (x, y) => {
    console.log(`${x} - ${y} = ${x - y}`);
}
