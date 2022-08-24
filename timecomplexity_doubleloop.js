let r1 = require('readline');

let r1Interface = r1.createInterface( {
    input: process.stdin,
    output: process.stdout
})

let ans = r1Interface.question('Input number of times you want to run the double loop: ', count => {
    console.log(count);
    let ct1 = new Date();
    let startTime = ct1.getTime();
    console.log('Start Time: ' + startTime);

    while (count > 0) {
        let insideloop = 0;
        while (insideloop < count) {
            insideloop++;
        }
        count--;
    }

    let ct2 = new Date();
    let endTime = ct2.getTime();
    console.log('End Time: ' + endTime);
    console.log('Time Taken: ' + (endTime - startTime));

    r1Interface.close()
})
