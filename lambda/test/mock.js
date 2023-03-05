async function post(url, data) {
    return new Promise((resolve, reject) => {
        if(data.messages[data.messages.length-1].content !== null)
        {
            resolve(
                {
                    choices:[
                        {
                            message:{
                                content: "good"
                            }
                        }
                    ]
                    
                }
            );
        }

        reject("fail");
    });     
}

module.exports.post = post;