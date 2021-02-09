function darkOrLightColor(color) {
    color = color.toLowerCase();
    if ((color === 'yellow') || (color === 'pink') || (color === 'orange')) {
        return 'light color';
    } else if ((color === 'blue') || (color === 'purple') || (color === 'brown')) {
        return 'dark color';
    } else {
        return 'unknown color';
    }
}

console.log(darkOrLightColor('oRange'));
console.log(darkOrLightColor('broWn'));
console.log(darkOrLightColor('white'));