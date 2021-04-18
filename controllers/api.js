const fetch = require('node-fetch');

const send = require('gmail-send')({
    user: 'vanloi.dev@gmail.com',
    pass: 'ngovanloi',
    to: 'loinvgch18355@fpt.edu.vn',
    subject: 'congratulations'
});


exports.GetData = (req, res, next) => {
    next();

}


exports.SendMessage = (req, res, next) => {
    console.log(req.body);
    const bd = {
        "messages": [{
            "content": {
                "text": `Địt mẹ mày thằng ${req.body.sender_name}`,
            },
            "type": "text"
        }],
        "app_code": "cf5b856b8bf30f9941b029acc3758545",
        "sender_id": req.body.sender_id,
        "channel": "facebook"

    };

    fetch('https://bot.fpt.ai/api/send_messages', {
            method: 'post',
            body: JSON.stringify(bd),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer b3523ef745b88fa11fc9d1e77029b74d'
            },
        })
        .then(res => res.json())
        .then(json => console.log(json));
    next();
}

exports.sendEmail = (req, res) => {
    send({
            text: 'You are welcome in Agiletech Company, congratulations.'
        },
        (error, result, fullResult) => {
            if (error) console.log(error);
            console.log(result);
        }
    )
}