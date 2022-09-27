new function() { 
	/**
	 * Returns the number of decimals
	 * @param {*} value The value
	 */
	let getFloatValueDecimalLength = function (value) {
		// Check entry
		if (!value)
			return 0;
		value = value + "";
		var floatSeparator = getFloatSeparator();
		if (floatSeparator === undefined)
			floatSeparator = ".";
		if (value.indexOf(floatSeparator) == -1)
			return 0;

		// Return the decimal length
		return value.split(floatSeparator)[1].length;
	},

	/**
	 * Returns the float separator
	 */
	getFloatSeparator = function () {
		// TODO: Avoid globalization issues
		return ".";
	},

	/**
	 * Returns true for invalid float values
	 * @param {*} value The value
	 */
	isInvalidFloatValue = function (value) {
		return value === undefined || value === null || value === "" || value == "NaN" || isNaN(value);
	};

	/**
	 * Returns the rounded value
	 * @param {*} totalValue The value to add
	 */
	Number.prototype.add = function (valueToAdd) {
		// Check all are defined
		let totalValue = this;
		if (isInvalidFloatValue(totalValue) || isInvalidFloatValue(valueToAdd) || valueToAdd === 0 || valueToAdd === "0")
			return totalValue;

		// Check for decimal length
		var decimalLength = Math.max(getFloatValueDecimalLength(totalValue), getFloatValueDecimalLength(valueToAdd));
		if (decimalLength <= 0)
			decimalLength = 0;

		// Check
		var multiplier = Math.pow(10, decimalLength);

		// Return the calculated value
		return ((parseFloat(totalValue) * multiplier) + (parseFloat(valueToAdd) * multiplier)) / multiplier;
	};

	/**
	 * Returns the rounded value
	 * @param {*} totalValue The value to subsctract
	 */
	Number.prototype.substract = function (valueToAdd) {
		// Check all are defined
		let totalValue = this;
		if (isInvalidFloatValue(totalValue) || isInvalidFloatValue(valueToAdd) || valueToAdd === 0 || valueToAdd === "0")
			return totalValue;

		// Check for decimal length
		var decimalLength = Math.max(getFloatValueDecimalLength(totalValue), getFloatValueDecimalLength(valueToAdd));
		if (decimalLength <= 0)
			decimalLength = 0;

		// Check
		var multiplier = Math.pow(10, decimalLength);

		// Return the calculated value
		return ((parseFloat(totalValue) * multiplier) - (parseFloat(valueToAdd) * multiplier)) / multiplier;
	};

	/**
	 * Returns the rounded value
	 * @param {*} secondValue The second value
	 */
	Number.prototype.multiply = function (secondValue) {
		// Check all are defined
		let firstValue = this;
		if (isInvalidFloatValue(firstValue) || isInvalidFloatValue(secondValue))
			return undefined;

		// Check for decimal length
		var decimalLength = Math.max(getFloatValueDecimalLength(firstValue), getFloatValueDecimalLength(secondValue));
		if (decimalLength <= 0)
			decimalLength = 0;

		// Check
		var multiplier = Math.pow(10, decimalLength);

		// Return the calculated value
		return ((parseFloat(firstValue) * multiplier) * (parseFloat(secondValue) * multiplier)) / Math.pow(multiplier, 2);
	};


	/**
	 * Returns the rounded value
	 * @param {*} secondValue The second value
	 */
	Number.prototype.divide = function (secondValue) {
		// Check all are defined
		let firstValue = this;
		if (isInvalidFloatValue(firstValue) || isInvalidFloatValue(secondValue))
			return undefined;

		// Check for decimal length
		var decimalLength = Math.max(getFloatValueDecimalLength(firstValue), getFloatValueDecimalLength(secondValue));
		if (decimalLength <= 0)
			decimalLength = 0;

		// Check
		var multiplier = Math.pow(10, decimalLength);

		// Return the calculated value
		return ((parseFloat(firstValue) * multiplier) / (parseFloat(secondValue) * multiplier)) / Math.pow(multiplier, 2);
	};
}();
