function countryToLiveIn(lagauge, island, population, country) {
    if (lagauge === 'English' && population < 50 && !island) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria`);
    }
}

countryToLiveIn ('English', true, 20, 'Wonderland');
countryToLiveIn ('Hebrew', true, 20, 'Israland');
countryToLiveIn ('English', false, 400, 'Noland');
countryToLiveIn ('English', false, 20, 'Neverland');