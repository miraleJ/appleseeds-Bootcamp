let book1 = {
    name:   "name1",
    author: "author1",
    year:   1987
};

let book2 = {
    name:   "name2",
    author: "author2",
    year:   1988
};

let bookUtils = {
    getFirstPublished (b1, b2) {
        return (b1.year > b2.year ? b2 : b1);
    },
    setNewEdition (b, editionYear) {
        b.latestEdition = editionYear;
    },
    setLanguage (b, lang) {
        b.language = lang;
    },
    setTranslation (b, lang, tran) {
        temp = {
            language:   lang,
            translator: tran
        };
        b.translation = temp;
    },
    setPublisher (b, pName, pLocation) {
        temp = {
            name:       pName,
            location:   pLocation
        };
        b.publisher = temp;
    },
    isSamePublisher (b1, b2) {
        if (b1.publisher != undefined && b2.publisher != undefined) {
            return (b1.publisher.name === b2.publisher.name && b1.publisher.location === b2.publisher.location);
        } else {
            return false;
        }
    }
};

