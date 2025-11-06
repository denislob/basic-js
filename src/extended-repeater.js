const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeat = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : options.addition;
  const additionRepeat = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let outcome = [];
  let additive = [];
  for (let i = 0; i < additionRepeat; i++) {
    additive.push(`${addition}`)
  }
  additive = additive.join(additionSeparator);
  
  for (let i = 0; i < repeat; i++) {
    outcome.push(`${str}${additive}`);
  }
  return outcome.join(separator);
}

module.exports = {
  repeater
};
