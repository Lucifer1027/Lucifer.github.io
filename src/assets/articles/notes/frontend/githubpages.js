let article = {
  name: "githubpages",
  type: "article",
  title: "Using Github Pages to deploy your Vue project",
  paragraphs: [{
    title: "Deploy Process",
    body: [{
        type: "text",
        val: "I have deployed this website using Github Pages and Vue.js. And I have met several problems during this process."
      }, {
        type: "text",
        val: "In order to deploy your Vue project with Github Pages, you have to use Github Actions to run and build this project in a separate branch. Normally this branch will be gh-pages. You need to create a folder called ‘.github/workflows’ and add a .yml file to it (any name would work for the .yml file). Github will check this workflows folder whenever you push and run the file under the condition you specified. For example, I have specified to run this file whenever I have a push to my main branch."
      }, {
        type: 'code',
        lang: 'language-',
        val: `
        # Code contributed by https://www.cnblogs.com/missile/p/13821397.html
        # Commit this to test workflow
        
        name: Lucifer1027 github io
        on:
          push:
            branches:
              - main
        jobs:
          build-and-deploy:
            runs-on: ubuntu-latest
            steps:
              - name: Checkout 🛎️
                uses: actions/checkout@v2.3.1 
                # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases 
                # for the deployment to work correctly.
                with:
                  persist-credentials: false
        
              - name: Install and Build 🔧 
              # This example project is built using npm and outputs the result to the 'build' folder. Replace 
              # with the commands required to build your project, or remove this step entirely if your site is pre-built.
                run: | 
                  # Note that I am using npm to manage my dependencies. Swich to the following commands if you are using 
                  # yarn: yarn | yarn build
                  npm install
                  npm run build
              - name: Deploy 🚀
                uses: JamesIves/github-pages-deploy-action@3.6.2
                with:
                  ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }} #secrets.ACCESS_TOKEN is the secret you create for the project
                  BRANCH: gh-pages # The branch the action should deploy to.
                  FOLDER: dist # The folder the action should deploy.
                  CLEAN: true # Automatically remove deleted files from the deploy branch
        `
      }, {
        type: "text",
        val: "Then you’ll need to commit your workflows to the remote repository. And it will run accordingly. After you do so, create an access token by clicking “settings—developer settings—personal access token” and paste your token to the secretes in you project settings. Name your secret as “ACCESS_TOKEN” and paste the your token to the textfield."
      }, {
        type: "text",
        val: "However, one of the question I found is that you need to run build before you push if you are using the following method in you .yml file. Also, remember to check your .gitignore to see if it has committed all the files in the ./dist. Otherwise it will fail to load. Lastly, remember to clear your cookies if you have pushed a new commit. Your website might not update properly if you don’t do that."
      },]
  }]
}

export default article;