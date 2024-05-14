const core = require('@actions/core');

try {
  const vars = core.getInput('vars', { required: true });
  console.log(vars);
} catch (error) {
  core.setFailed(error.message);
}
