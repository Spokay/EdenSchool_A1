const daysPerYear = 365;
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;


function getDayMonthAndYear(){
    let actualDate = new Date();
    let actualDay = actualDate.getDate();
    let actualMonth = actualDate.getMonth() + 1;
    let actualYear = actualDate.getFullYear();
    let actualHour = actualDate.getHours();
    let actualMinute = actualDate.getMinutes();
    let actualSecond = actualDate.getSeconds();
    console.log(actualDay);
    console.log(actualMonth);
    console.log(actualYear);
    return [actualDay, actualMonth, actualYear, actualHour, actualMinute, actualSecond];
}
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}


function calculBirthday(jour, mois, annee){
    let tab = getDayMonthAndYear();
    let actualDay = tab[0];
    let actualMonth = tab[1];
    let actualYear = tab[2];
    let actualHour = tab[3];
    let actualMinute = tab[4];
    let actualSecond = tab[5];
    let resDay;
    let resMonth;
    let resYear;
    let resHour;
    let resMinute;
    let resSecond;
    if (actualMonth < mois || (actualMonth === mois && actualDay < jour)) {
        resDay = actualDay - jour;
        if(resDay < 0){
            resDay = -resDay;
            resDay -= 1;
        }
        resMonth = actualMonth - mois;
        if (resMonth < 0){
            resMonth = -resMonth;
        }
        resYear = (actualYear - annee) - 1;
        resHour = 24 - actualHour;
        resMinute = 60 - actualMinute;
        resSecond = 60 - actualSecond;
        console.log(resDay);
        console.log(resMonth);
        console.log(resYear);

    }
    else {
        resDay = actualDay - jour;
        resMonth = actualMonth - mois;
        resYear = actualYear - annee;
        resHour = 24 - actualHour;
        resMinute = 60 - actualMinute;
        resSecond = 60 - actualSecond;
        console.log(resDay);
        console.log(resMonth);
        console.log(resYear);
    }

    return [resDay, resMonth, resYear, resHour, resMinute, resSecond, actualDay, actualMonth, actualYear, actualHour, actualMinute, actualSecond];
}

function timeToBirthday(){
    let diff = calculBirthday(day, month, year);
    let resDay = diff[0];
    let resMonth = diff[1];
    let resYear = diff[2];
    let resHour = diff[3];
    let resMinute = diff[4];
    let resSecond = diff[5];
    let actualDay = diff[6];
    let actualMonth = diff[7];
    let actualYear = diff[8];
    let actualHour = diff[9];
    let actualMinute = diff[10];
    let actualSecond = diff[11];
    let yearRemain = 17 - resYear;
    let div = document.getElementById('time');


    if(resYear < 18){
        let create = document.createElement("h1");
        create.innerText = 'Vous avez actuellement ' + resYear + ' ans vous aurez 18 ans dans : ';

        console.log(div);
        div.appendChild(create);

        // creation de l'affichage

        let createYear = document.createElement('h3');
        createYear.innerText = yearRemain + ' ans ';
        div.appendChild(createYear);

        let createMonth = document.createElement('h3');
        createMonth.innerText = resMonth + ' mois ';
        div.appendChild(createMonth);

        let createDay = document.createElement('h3');
        createDay.innerText = resDay + ' jours ';
        div.appendChild(createDay);

        let createHour = document.createElement('h3');
        createHour.innerText = resHour + ' heures ';
        div.appendChild(createHour);

        let createMinute = document.createElement('h3');
        createMinute.innerText = resMinute + ' minutes ';
        div.appendChild(createMinute);

        let createSecond = document.createElement('h3');
        createSecond.innerText = resSecond + ' secondes ';
        div.appendChild(createSecond);
    }
    else{
        yearRemain = resYear - 18;
        let create = document.createElement("h1");
        create.innerText = 'Vous avez actuellement ' + resYear + ' ans, ' + 'vous avez la majorité depuis :';
        let div = document.getElementById('time');
        console.log(div);
        div.appendChild(create);

        // creation de l'affichage

        let createYear = document.createElement('h3');
        createYear.innerText = yearRemain + ' ans ';
        div.appendChild(createYear);

        let createMonth = document.createElement('h3');
        createMonth.innerText = resMonth + ' mois ';
        div.appendChild(createMonth);

        let createDay = document.createElement('h3');
        createDay.innerText = resDay + ' jours ';
        div.appendChild(createDay);

        let createHour = document.createElement('h3');
        createHour.innerText = actualHour + ' heures ';
        div.appendChild(createHour);

        let createMinute = document.createElement('h3');
        createMinute.innerText = actualMinute + ' minutes ';
        div.appendChild(createMinute);

        let createSecond = document.createElement('h3');
        createSecond.innerText = actualSecond + ' secondes ';
        div.appendChild(createSecond);
    }
}


let day = parseInt(prompt('quel jour est tu né'));
let month = parseInt(prompt('quel moi est tu né'));
let year = parseInt(prompt('quel année est tu né'));
timeToBirthday();



