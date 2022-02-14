# Portfolio Website

This is a portfolio website built with [Next.js](https://nextjs.org/) and Tailwind CSS.

It is deployed on Vercel.

### How to use this as a template for your portfolio

1. Clone the repository using 
 ```
 git clone https://github.com/Suhel-Kap/portfolio.git
 ```
2. Cd into the directory, `cd portoflio`
3. All user data rests in the `constants/data.js` file.  
4. Personlise all the data
5. Change all favourite projects by heading to `componenets/FavouriteProjects.js`.
6. The contact form uses [sendgrid](https://sendgrid.com/) to send the email. You can sign up on sendgrid [here](https://signup.sendgrid.com/)
7. Create an API Key [here](https://app.sendgrid.com/settings/api_keys).
8. Copy the API Key and save it in a `.env` file as `SENDGRID_API_KEY=XXXXXXXXXXXXXXXX`.
9. Next you will need to verify the sender email account (the account from which you will receive the email), since this is just a portfolio website you will need to do the [Single Sender Verificatio](https://docs.sendgrid.com/ui/sending-email/sender-verification).
10. **Note**: The GitHub API key is an optional step here, the project will work without the API key as well. Adding the API key just enables you to show the name and description of your private repositories.
11. You will also need a GitHub API key to fetch the latest repositories. You can get a Personal Access Token by heading [here](https://github.com/settings/tokens) and make sure to uncheck all the options as we need only a read repo permission.
12. Copy the API Key and save it in the `.env` file as `GITHUB_AUTH_TOKEN=gph_xxxxxxxxxxx`.
13. Run ```npm run dev``` to start the server.
14. Push the code to GitHub.
15. Head over to [Vercel](https://www.vercel.com) and choose the repository that you just created

And that's it, your portfolio website is live and running
