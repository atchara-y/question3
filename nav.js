const fetch = require('node-fetch');

(async () => {
    try {
        const res = await fetch('https://codequiz.azurewebsites.net/', {
            'headers': {
                'cookie': 'hasCookie=true'
            }
        });
        const resText = await res.text()
        console.log(resText)
    } catch (err) {
        console.log(err.message)
    }
})();