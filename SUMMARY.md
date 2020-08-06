## What we will do in this video

1. Create a `netlify.toml` file
2. Configure `.babelrc` file
3. Make server-side requests to another API
4. Return a tailored response to our user
5. Test it locally
6. Instantly deploy

## What you need

1. Netlify account
2. Basic JavaScript knowledge on RestFUL APIs
3. Understanding of TypeScript syntax

## Packages

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
