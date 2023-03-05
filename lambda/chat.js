const initialMessage={ "role": "system", "content": "You are a helpful assistant." };
let messages = [initialMessage];
async function sendMessage(post, config, slot) {
    messages.push({ "role": "user", "content": slot });
    const data = {
        "model": config.openaiModelName,
        "messages": messages
    };
    try
    {
        const response = await post(config, data);
        const resonseMessage = response.choices[0].message;
        
        if (messages.length > config.maxConversation) {
            messages.shift();
        }
        messages.push(resonseMessage);
        if (messages.length > config.maxConversation) {
            messages.shift();
        }
        return resonseMessage.content;
    }
    catch(ex)
    {
        messages.pop();
        return "";
    } 
}

function getMessageArray(){
    return messages;
}

function initMessage(){
    messages = [initialMessage];
}

module.exports.chat = {
    sendMessage: sendMessage,
    getMessageArray: getMessageArray,
    initMessage: initMessage
}