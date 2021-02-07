function currentDay() {
    let today = new Date();
    let day = today.getDay();
    let dayDate = today.getDate();
    let year = today.getFullYear();
    let month = today.getMonth();


    return `Today is ${getDayOfWeek(day)}, the ${dayDate} of ${getNameOfMonth(month)}, ${year}`;
}

function getDayOfWeek(day){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][day];
};

function getNameOfMonth(month){   
    return ["Jenuary","February","March","April","May","June","July", "August", "September", "October", "November", "December"][month];
};
