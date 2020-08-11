const calculatorUtils = require('./utils/calculator-utils')
const math = require('mathjs')

module.exports = input => {
  return '£' + calculatorUtils.getEntries(input)
    .map(entry => calculatorUtils.getExpression(entry))
    .map(expression => math.evaluate(expression))
    .reduce((calculatedValueA, calculatedValueB) => calculatedValueA + calculatedValueB, 0)
}
