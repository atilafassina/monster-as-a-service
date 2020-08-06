# Monster As A Service (MAAS)

[![Netlify Status](https://api.netlify.com/api/v1/badges/08e9878b-10bb-4706-b47a-bcc84c930c6a/deploy-status)](https://app.netlify.com/sites/friendly-curie-b02f70/deploys)

This is a microservice wrapping requests to [D&D 5e API](https://www.dnd5eapi.co).
It will return a random monster at every request.

## Goal

This repository is an example use-case on how to use Netlify Functions with TypeScript.

[Watch the video on Youtube]()

## Deploy your own instance

[![Deploy MAAS to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/atilafassina/monster-as-service)

## More instructions

If you need help understanding the ins and outs of this code, please refer to the [video on ScopeLeak]()

### Packages

| Dependencies            | Why                                           |
| ----------------------- | --------------------------------------------- |
| Netlify Dev¹            | To run Netlify Functions locally              |
| Netlify Lambda          | Adds build-step to Netlify Functions          |
| TypeScript              | The compiler for TypeScript (`tsc`)           |
| node-fetch              | Brings `window.fetch` api to NodeJS           |
| babel/preset-env        | Tells Babel which JavaScript sytnax to output |
| babel/preset-typescript | Teach Babel to use TypeScript compiler        |
| types/aws-lambda        | Request/Response types for AWS Lambdas²       |

¹: Install it globally on your system
²: Netlify Functions uses AWS Lambdas under the hood
