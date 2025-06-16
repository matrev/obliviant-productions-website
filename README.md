# The Official Repo of The Brother Sister Show website

## Running this project locally

1. Clone Repo, run the command `npm i` to install all npm dependencies
2. Connect [EmailJS](https://www.emailjs.com/docs/tutorial/overview/)
    - Ensure EmailJS is installed with `npm i emailjs-com`
    - Create a file called `.env` in the project folder and add the EmailJS Service ID, Template ID, and User ID within the file:
        >REACT_APP_EMAILJS_SERVICE_API_KEY=SERVICE_ID
        >
        >REACT_APP_EMAILJS_TEMPLATE_API_KEY={TEMPLATE_ID}
        >
        >REACT_APP_EMAILJS_USER_API_KEY={USER_ID}
3. Run the command `npm run start` to create development build

## Deployment (GitHub Pages)

- To deploy, run `npm run deploy`.
- This will build the app and publish it to GitHub Pages using the `gh-pages` branch.
- See `DEPLOYMENT.md` for more details.

