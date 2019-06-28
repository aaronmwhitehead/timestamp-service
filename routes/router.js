const moment = require('moment');

exports.timestamp = (req, res) => {
    const date = req.params.date_string;
    var obj;

    console.log(res)

    if(!date) {
        obj = {
            'unix': new Date().getTime(),
            'utc': new Date().toUTCString()
        }
    } else if (!(new Date(date)).getTime() > 0) {
        obj = {
            'error': 'Invalid Date'
        };
    } else {
        obj = {
            'unix': new Date(req.params.date_string).getTime(),
            'utc': new Date(req.params.date_string).toUTCString()
        }
    }
    
    res.json(obj);
}

exports.handle404 = function(req, res) {
    res.send(404);
}