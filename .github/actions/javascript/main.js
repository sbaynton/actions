const core = require('@actions/core');

try {
  const json = core.getInput('vars', { required: true });
  const vars = JSON.parse(json);
  for (const [key, value] of Object.entries(vars)) {
    core.exportVariable(key, value);
  }
} catch (error) {
  core.setFailed(error.message);
}
