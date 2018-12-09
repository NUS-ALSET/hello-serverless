[![Build Status](https://travis-ci.org/NUS-ALSET/hello-serverless.svg?branch=master)](https://travis-ci.org/NUS-ALSET/hello-serverless)

# hello-serverless

Minimal example to deploy a function to AWS lambda with an API gateway using serverless

# Prerequisite

Update Github Access Token

#Step to deploy

- `npm i`

- `npx serverless config credentials --provider aws --key <API KEY> --secret <SECRET KEY>`

- `npm run deploy`
