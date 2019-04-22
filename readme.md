Fundação Aprisco
---
Fundação Aprisco is an ONG based in Feira de Santana/BA and this is their website.

This project is built on top of [Gastby](https://www.gatsbyjs.org/docs/) and [Netflify CMS](https://www.netlifycms.org/) if you are not familiar with I highly recommend you to read both documentations.


Get started
---- 
1. Install [Gastby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/):
`npm install -g gatsby-cli`

2. Clone de repository:
`git clone git@github.com:fundacaoaprisco/fundacaoaprisco.github.io.git`

3. Install depedencies:
`yarn install` or `npm install`

4. Run Gatsby the server. 
`yarn dev`

This command will start 3 servers:
- The website at `localhost:8000`
- The graphQL explorer at `localhost:8000/__graphql`
- The Netlify CMS admin at `localhost:8000/admin`

5. Setup Netlify Admin for development 
First, you will need an invitation to access Netlify CMS admin, even in localhost. For now it is okay to have the website running only in one domain.

If you are running for the first time the netlify CMS will ask `URL of your Netlify site`and for now you can use `https://flamboyant-lamport-1b2b02.netlify.com` to access the admin in development mode.
