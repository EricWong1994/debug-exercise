const { ESLint } = require('eslint')

const engine = new ESLint({
  fix: false
});

(async function main () {
  const results = await engine.lintText(`
    function add (a, b) 
{
  return a + b
}
  `)

  console.log(results[0].output)

  const formatter = await engine.loadFormatter('stylish')
  const resultText = formatter.format(results)
  console.log(resultText)
})()
