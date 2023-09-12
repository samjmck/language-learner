# language-learner

[View live site](https://language.samjmck.com)

This is a small serverless web app I made in roughly 4 hours as a challenge for myself. It is a simple flashcard app that has a list of the most popular words used for a given category alongside their Dutch translations. The user can test themselves by clicking on the card to reveal the translation. Lastly, there is a translate field fixed to the bottom of the page that allows the user to type in a word and see its translation using [Azure AI Translator service](https://learn.microsoft.com/en-us/azure/ai-services/translator/).

Except for the Azure AI Translator service, this app is static and does not require any backend. The proxy to the Azure AI Translator service can be hosted on any server or serverless platform.

**Note:** the quick translate feature does not work currently. My free Azure AI Translator plan expired and due to issues with Azure's dashboard, I am unable to upgrade to a new billing plan.

## Table of contents

1. [Setup](#setup)
2. [Tech stack](#tech-stack)
3. [What I learned](#what-i-learned)
  3.1 [SvelteKit](#sveltekit)
  3.2 [Azure AI Translator service](#azure-ai-translator-service)
  3.3 [ChatGPT](#chat-gpt)
4. [Deployment](#deployment)
5. [What made me think of making this app?](#what-made-me-think-of-making-this-app)

## Setup

1. Clone the repository with `git clone git@github.com/samjmck/language-learner.git`
2. Change directory with `cd language-learner`
3. Set the environment variable `AZURE_SUBSCRIPTION_KEY` to your Azure subscription key for the Translator AI service
4. Start the local development web server with `npm run dev`

## Tech stack

- SvelteKit
- TypeScript
- Azure AI Translator service
- Cloudflare Pages

## What I learned

### SvelteKit

I have created single-page web apps using Svelte before and I am a big fan of it, especially the way it handles state with reactive programming and stores. It severely reduces the amount of boilerplate code needed to create a web app, especially compared to React. However, this was my first time using SvelteKit with routes and server-side rendering. Something I struggled to wrap my head around was how to know which code is executed on the server, which is executed on the client and which can be executed in both. It took a lot of documentation reading to figure out how it worked, but the results are worth it. Navigating between pages is instant and the app is very fast. I intend to use Svelte more often in the future.

### Azure AI Translator service

To be honest, I really wanted to use DeepL's API as that's the service I use for my own translations. Unfortunately, I could not make requests to their API from Cloudflare Workers. Azure AI Translator service was the next service I tried as it had a free tier. 

### ChatGPT

I used Chat GPT to generate a list of words for each category with their translations in the TypeScript interfaces I gave it.

## Deployment

This app is deployed on Cloudflare Pages. To deploy it yourself, you can clone this repo and in the settings of your deployment, add an environment variable `AZURE_SUBSCRIPTION_KEY` with the API key of the Azure AI Translator. 

## What made me think of making this app?

I thought of this idea after watching ["The Video Game Map Theory" by Johnny Harris](https://youtu.be/3i1lNJPY-4Q) in which he talks about how learning conversational language by studying the most frequently used words in a language.
