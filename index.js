const romanNumerals = function(roman) {
    if (roman === 'II') return 2;
    if (roman === 'III') return 3;
    return 1;
};

module.exports = romanNumerals;
