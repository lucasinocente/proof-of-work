const createHash = require('crypto').createHash;

function valid(input, nonce) {

        let valid
        const sha256 = createHash('sha256');

        sha256.update(input);
        sha256.update(nonce);

        const hash = sha256.digest('hex');

        if (hash.slice(-4) === '0000') {
            valid = true
        } else {
            valid = false
        }

        console.log(valid)
        return valid
}

valid(process.argv[2], process.argv[3]);