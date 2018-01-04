function timer(i) {
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        timer(i);
    }, i * 1000)
}

// console.log(i);
