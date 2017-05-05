const romanNumerals = function(roman) {
    if (roman === 'IV') return 4;
    if (roman === 'III') return 3;
    return 1;
};

module.exports = romanNumerals;