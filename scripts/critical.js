
const critical = require(`critical`);

critical.generate({
  inline: true,
  base: `critical`,
  src: `alfi.yusrina.ramad1/20162017/ma4/tribute/index.html`,
  width: 1300,
  height: 900,
  dest: `index-critical.html`,
  minify: true,
  extract: true,
  timeout: 30000,
});
