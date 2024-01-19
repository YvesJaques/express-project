const path = require('path');

function getMessages(req, res) {    
    res.sendFile(path.join(__dirname,'..','public','skimountain.jgp'));
    // res.sendFile('<ul><li>Hello Albert!</li></ul>')
}

function postMessage(req, res) {
    console.log('Updating messages...');
    res.send();
}

module.exports = {
    getMessages,
    postMessage
}
