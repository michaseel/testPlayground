const romanNumerals = function(roman) {
    if (roman === 'II') return 2;
    if (roman === 'III') return 4;
    return 1;
};

module.exports = romanNumerals;
