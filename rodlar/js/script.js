let muj_jen = ['день', 'конь ', 'огонь','словарь', 'рояль','корабль', 'дождь','портфель', 'шампунь','голубь', 'гость','зверь', 'картофель','кашель', 'контроль','путь', 'уголь','фестиваль', 'лагерь','двигатель', 'циркуль', 'календары','Кремль','зритель','жизнь','лошадь','медаль','тетрадь','кровать','дверь','ночь','цепь','любовь','осень','соль','нефть','память','степень','часть','область','роль','болезнь','вещь','власть','деталь','кость','кровь','помощь','сталь','связь','молодежь','ненависть','мелочь'];

let muj = ['день', 'конь', 'огонь','словарь', 'рояль','корабль', 'дождь','портфель', 'шампунь','голубь', 'гость','зверь', 'картофель','кашель', 'контроль','путь', 'уголь','фестиваль', 'лагерь','двигатель', 'циркуль', 'календары','Кремль','зритель'];

let jen = ['жизнь','лошадь','медаль','тетрадь','кровать','дверь','ночь','цепь','любовь','осень','соль','нефть','память','степень','часть','область','роль','болезнь','вещь','власть','деталь','кость','кровь','помощь','сталь','связь','молодежь','ненависть','мелочь'];

let muj1 = ['день - kun', 'конь - ot', 'огонь - olov','словарь - lug\'at', 'рояль - pialino(royal)','корабль - kema', 'дождь - yomg\'ir','портфель - sumka', 'шампунь - shampun','голубь - kabutar', 'гость - mehmon','зверь - hayvon', 'картофель - kartoshka','кашель - yo\'tal', 'контроль - nazorat','путь - yo\'l', 'уголь - ko\'mir','фестиваль - bayram', 'лагерь - lager','двигатель - dvigatel', 'циркуль - sirkul', 'календары - kalendar','Кремль - shahar','зритель - tomoshabin', '', '', '', '', ''];

let jen1 = ['жизнь - hayot','лошадь - ot','медаль - medal','тетрадь - dafter','кровать - yotoq','дверь - eshik','ночь - tun','цепь - zanjir','любовь - sevgi','осень - kuz','соль - tuz','нефть - neft','память - xotira','степень - daraja','часть - qism','область - vilovat','роль - ro\'l','болезнь - kasallik','вещь - narsa','власть - amal','деталь - bo\'lak','кость - suyak','кровь - qon','помощь - yordam','сталь - metall','связь - aloqa','молодежь - yoshlar','ненависть - nafrat','мелочь - mayda-chuyda'];

let i = (Math.ceil(Math.random()*100)) % muj_jen.length;

let content = document.querySelector('#content');
content.innerHTML = muj_jen[i];

function random(){
    document.querySelector('#alert').innerHTML = `<div class='alert alert-light w-50 m-auto mb-5' role='alert'>
    <div>Natijani tekshiring</div>
    </div>`;

    let content = document.querySelector('#content');

    let random = Math.ceil(Math.random()*100);

    i = random % muj_jen.length;

    content.innerHTML = muj_jen[i];
}

let val = 1
function chack(a){
    val = a
}

function tekshir(){
    let alert = document.querySelector('#alert');

    if(val == 1){
        if(muj.indexOf(muj_jen[i]) != -1){
            alert.innerHTML = `<div class='alert alert-success w-50 m-auto mb-5' role='alert'>
            <div>To'g'ri</div>
            </div>`
        }else{
            alert.innerHTML = `<div class='alert alert-danger w-50 m-auto mb-5' role='alert'>
            <div>Noto'g'ri</div>
            </div>`
        }
    }else{
        if(jen.indexOf(muj_jen[i]) != -1){
            alert.innerHTML = `<div class='alert alert-success w-50 m-auto mb-5' role='alert'>
            <div>To'g'ri</div>
            </div>`
        }else{
            alert.innerHTML = `<div class='alert alert-danger w-50 m-auto mb-5' role='alert'>
            <div>Noto'g'ri</div>
            </div>`
        }
    }
   
}

// pastdagi lug'at
let list = document.querySelector('#list-lugat')

jen1.forEach((item, index) => {
    list.innerHTML += `<ul class="list-group list-group-horizontal">
    <li class="list-group-item col-6 bg-info text-light">${muj1[index]}</li>
    <li class="list-group-item col-6 bg-danger text-light">${item}</li>
    </ul>`
})





