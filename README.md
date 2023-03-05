
# Creating an Alexa Skill

This guide will walk you through the steps of creating an Alexa Skill. By the end of this tutorial, you will be able to create your own custom Alexa Skill.

## Prerequisites

Before you start, you need to have the following:

-   An Amazon Developer Account.
-   An AWS Account.
-   Knowledge of Node.js.

## Step 1: Create an Alexa Skill

1.  Log in to the [Amazon Developer Console](https://developer.amazon.com/) and click on "Alexa Skills Kit" from the list of services.
2.  Click on "Create Skill" button and choose a name for your Skill.
3.  Select the model that you want to use. Choose the "Custom" model to create a Skill from scratch.
4.  Choose a template to start from. You can choose a pre-built template or start from scratch.
5.  Click on "Create Skill" to create your Skill.

## Step 2: Define the Interaction Model

 -  Click on the "Interaction Model" tab.
 -  Define the "Intent Schema" by adding intents and their associated slots. Intents represent the actions that your Skill can perform, while slots are variables that can be used to capture user input.
	*you can find interactionModels/custom/en-CA.json* under **intents** property
 -  Define the "Sample Utterances" by providing some example phrases that users can say to invoke your Skill.
 -  Click on "Save Model" to save your interaction model.
	 In this project, you will find **slots** for "*AskOpenAI*" intent
		 Note: Since we are sending all the questions to openAI, so we need to use "AMAZON.SearchQuery". As part of Alexa training model, we need to  start every conversation with "ask" followed by {question} which represents all content we will be sending to openAI.

## Step 3: Write the Code

 -  Click on the "Code" tab.
 -  Select the runtime that you want to use. For this tutorial, we will use Node.js.
 -  Write the code for your Skill using the Alexa Skills Kit SDK for Node.js.
	This project is mainly focusing developing code to implement all necessary logic we need
	 **lambda folder**
	 - apiKey.js : This is the file you can put you openAI API key, you should NOT commit or share this file to anyone. As part of pre-caution, this file has been marked as ignore so you will not commit this file by default.
	 -  chat.js :  this is the main file to host this Alexa skill logic.
	 -  config.js : all configuration you will need to develop and deploy.
	 -  index.js: This is the main file mostly generated from Alexa wizard. Most of logic in this project is function *AskOpenAIIntentHandler* which you can find under interaction model in previous step.
	 -  util.js: The project is currently using http post directly to send request to openAI as openAI npm package did not include new chatGPT call when the project was initial created. NPM package does have this method now and future development will switch to use this package.
	 - **test folder** all unit test files are placed here
 -  Deploy your code to AWS Lambda by following the instructions provided in the console.

## Step 4: Test Your Skill

1.  Click on the "Test" tab.
2.  Test your Skill using the Alexa Simulator or a physical Alexa device.
3.  Make any necessary changes to your Skill's interaction model or code.

## Step 5: Publish Your Skill

1.  Click on the "Distribution" tab.
2.  Provide the necessary information about your Skill, such as the name, description, and keywords.
3.  Submit your Skill for certification.
4.  Once your Skill has been certified, it will be available for users to enable and use.

Congratulations! You have successfully created your own Alexa Skill.
