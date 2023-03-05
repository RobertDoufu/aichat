const chat = require("../chat.js").chat;
const post = require("./mock.js").post;
const config = require("../config.js").config;

describe('Open AI Intent testing', () => {
   it('send request to return answer succeeded and messages increased', async () => {
      chat.initMessage();
      const result = await chat.sendMessage(post, config, "good message");
      expect(result !== "").toBeTruthy();
   });

   it('send more than 10 conversations to remove the first message', async () => {
      chat.initMessage();
      let chatMessages = [];
      for (let i = 0; i < 9; i++) {
         const result = await chat.sendMessage(post, config, "good message");
         chatMessages = chat.getMessageArray();
         expect(chatMessages.length).toBe((i + 1) * 2 + 1);
         expect(result !== "").toBeTruthy();
      }
      await chat.sendMessage(post, config, "good message");
      chatMessages = chat.getMessageArray();
      expect(chatMessages.length).toBe(20);
      await chat.sendMessage(post, config, "good message");
      chatMessages = chat.getMessageArray();
      expect(chatMessages.length).toBe(20);
   });

   it('send request to return answer failed and messages cleared', async () => {
      chat.initMessage();
      const result = await chat.sendMessage(post, config, null);
      expect(result === "").toBeTruthy();

   });

   it('post messages with error will remove the first message', async () => {
      chat.initMessage();
      let chatMessages = [];
      await chat.sendMessage(post, config, null);
      chatMessages = chat.getMessageArray();
      expect(chatMessages.length).toBe(1);
      await chat.sendMessage(post, config, null);
      chatMessages = chat.getMessageArray();
      expect(chatMessages.length).toBe(1);
   });

});