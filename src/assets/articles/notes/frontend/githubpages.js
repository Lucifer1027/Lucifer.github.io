let article = {
  name: "githubpages",
  type: "article",
  title: "Using Github Pages to deploy your Vue project",
  paragraphs: [{
    title: "Deploy Process",
    body: ["I have deployed this website using Github Pages and Vue.js. And I have met several problems during this process.",
    "In order to deploy your Vue project with Github Pages, you have to use Github Actions to run and build this project in a separate branch. Normally this branch will be gh-pages. You need to create a folder called ‘.github/workflows’ and add a .yml file to it (any name would work for the .yml file). Github will check this workflows folder whenever you push and run the file under the condition you specified. For example, I have specified to run this file whenever I have a push to my main branch.",
    "Then you’ll need to commit your workflows to the remote repository. And it will run accordingly. After you do so, create an access token by cliicking “settings——developer settings——personal access token” and paste your token to the secretes in you project settings. Name your secret as “ACCESS_TOKEN” and paste the your token to the textfield.",
    "However, one of the question I found is that you need to run build before you push if you are using the following method in you .yml file. Also, remember to check your .gitignore to see if it has committed all the files in the ./dist. Otherwise it will fail to load. Lastly, remember to clear your cookies if you have pushed a new commit. Your website might not update properly if you don’t do that."]
  }]
}

export default article;