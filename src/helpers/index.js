/**
 * Take a value and return an array containing the number of decimal places (if any), and the value with the decimal point removed (if present)
 *
 * @typedef {Array} Result
 * @property {number} number of decimal places in value
 * @property {number} value with decimal point removed
 *
 * @param {number} value the value to convert
 * @param {boolean} asStrings return result as strings
 * @return {Result}
 */
export function convertNumberForContract(value, asStrings) {
    const maxDecimalPlaces = 5;
    const stringValue = value.toString();

    const integer = stringValue.split('.')[0];
    const fractional = stringValue.includes('.') ? stringValue.split('.')[1].slice(0, maxDecimalPlaces) : null;

    let decimalPlaces = fractional ? fractional.length : 0;
    let resultingNumber = +(fractional ? (integer + fractional) : integer);

    if (asStrings) {
        decimalPlaces = decimalPlaces.toString();
        resultingNumber = resultingNumber.toString();
    }

    return [
        decimalPlaces,
        resultingNumber
    ];
}

/**
 * Reverses the result from convertNumberForContract()
 * @param {number} decimalPlaces number of decimal places to insert
 * @param {number} numberValue value without decimal point
 * @return {number}
 */
export function convertContractInformationToNumber(decimalPlaces, numberValue) {
    const numberStringArray = numberValue.toString().split('');

    if (decimalPlaces > 0) numberStringArray.splice(-decimalPlaces, 0, '.');

    return +(numberStringArray.join(''));
}
