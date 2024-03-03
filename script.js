console.log("script")
const { helloWorld } = require('./html');

process.nextTick(() => {
    helloWorld();
});
