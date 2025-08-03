const checkParity = (a) => {
    if (typeof a !== 'number') {
        console.log(`${a} not is number`);
        return;
    }

    if (a % 2 === 0) {
        console.log(`${a} is an even number`);
    } else {
        console.log(`${a} is odd`);
    }
};
checkParity("hello");
checkParity(10);
checkParity(7);
