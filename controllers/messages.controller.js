function getMessages(req, res) {
    res.send('<ul><li>Hello Albert!</li></ul>')
}

function postMessage(req, res) {
    console.log('Updating messages...');
    res.send();
}

module.exports = {
    getMessages,
    postMessage
}
