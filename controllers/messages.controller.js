const path = require('path');

function getMessages(req, res) {    
    res.render('messages', {
        title: 'Messages to my friends!',
        friend: 'Elon Musk'
    });
    // res.sendFile(path.join(__dirname,'..','public', 'images','skimountain.jgp'));
}

function postMessage(req, res) {
    console.log('Updating messages...');
    res.send();
}

module.exports = {
    getMessages,
    postMessage
}
