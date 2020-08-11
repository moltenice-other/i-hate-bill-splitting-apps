const calculatorUtils = require('./utils/calculator-utils')
const math = require('mathjs')

/**
 * <p>Find out what you owe in £ given a list of things that are owed.</p>
 * <br>
 * <p>
 * Example of a list of things that are owed:
 * <br/>
 * <pre>
 * £100.00/2 for electricity
 * £20 for groceries
 * </pre>
 * </p>
 *
 * @param input - The list of things that are owed
 *
 * @returns {string} The final amount. Eg. £70
 */
module.exports = input => {
  return '£' + calculatorUtils.getEntries(input)
    .map(entry => calculatorUtils.getExpression(entry))
    .map(expression => math.evaluate(expression))
    .reduce((calculatedValueA, calculatedValueB) => calculatedValueA + calculatedValueB, 0)
}
