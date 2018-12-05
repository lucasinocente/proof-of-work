const createHash = require('crypto').createHash;

function work(input) {
    
    let id = 0;

    console.time('Time to find');

    while (true) {

        let nonce = id.toString();
        let sha256 = createHash('sha256');

        sha256.update(input);
        sha256.update(nonce);

        let hash = sha256.digest('hex');

        console.log(`Nonce: ${nonce} -  Hash: ${hash}`);

        if (hash.slice(-4) === '0000') {
            console.timeEnd('Time to find');
            return;
        } else {
            id++;
        }

    }
}

work(process.argv[2]);