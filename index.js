function loop(times = 0, callback = null) {
    if (callback !== null) {
        for (let i = 0; i < times; i++) {
            callback();
        }
    }
}

function sum() {
    console.log(2+3);
}

loop(1, sum);