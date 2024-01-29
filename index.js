/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {

  app.log.info("App loaded successfully!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: `
  # Hello!

  **My name is \`Kansha\`**
  
  I am a bot created by \`Emi Yamashita\` from \`Degamisu\`.

  Thank you for contributing to ${context.payload.repository.name}.

  In the meantime, check the [Wiki](https://your-wiki-url) to see if your error is documented.
  `
    });
    return context.octokit.issues.createComment(issueComment);
  });
};
