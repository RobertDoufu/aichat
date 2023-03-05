const APIKey = require('./apiKey.js');
module.exports.config = 
{
   APIKey: APIKey.APIKey,
   timeOut:60000,
   slotName: "question",
   openaiUrl: "https://api.openai.com/v1/chat/completions",
   openaiModelName: "gpt-3.5-turbo",
   intentName:"AskOpenAI",
   maxConversation: 20
}