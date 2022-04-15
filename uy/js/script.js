
let rus = ['дом, жилье', 'многоэтажный дом', 'комната', 'ворота', 'лестница  ', 'этаж', 'фундамент', 'крыша', 'мансарда, чердак ', 'дымоход', 'окно', ' дверь ', 'водосток','пол' ,'потолок', 'огород ','сад', ' двор ', 'замок  ', 'ключ', 'забор', ' водяной шланг ', 'лестница', 'ковер', ' мягкий диван ', 'кресло', 'столы', 'стулья', 'книжная полка ', 'часы', ' телефон ', 'трубка', 'набора номера ', 'телевизор', 'рисунок ', 'лампа', 'отопление ', 'труба', 'вентилятор', 'еда, пища ', 'блюдо', 'дым ', 'ведро', 'мусорная корзина ', 'баня', 'ванная комната  ', 'нитка, веревка, канат', 'туалетная бумага ', 'духи', 'мыло', 'хороший шампунь ', 'зубная щетка', 'зубная паста  ', 'чистить зубы', 'полоскать горло ', 'мойка ', 'грязь','стиральная машина', 'полоскать, промыть', 'бритва ', 'полотенце', 'веник, метла', 'спальная комната ', 'кровать (железная)', ' занавес ', ' зеркало', 'стойка, вешалка ', 'крючок', 'подушка; диванная подушка ', 'обогреватель, печь ', 'свеча', 'включатель - переключатель', 'розетка - гнездо  ', 'кухня ', 'морозильник ', 'холодильник ', 'газовая плита ', ' духовка', 'кран', 'холодная вода ', ' горячая вода ', 'котел, казан ', 'кастрюля', 'сковорода', 'глубокая тарелка, чаша  ', ' тарелка', 'блюдце ', 'сосуд', 'чашка ', ' нож', 'ложка ', 'вилка ', 'половник ', 'шумовка', 'дуршлаг', 'кувшин ', 'скатерть', 'спичка', 'горшок', 'вкусный', 'сундук', 'одеяло', 'покрывало', 'матрац ', 'постельное белье ', ' подушка', 'аптечка  ', 'игла','нить, нитка  ', ' ножницы', 'детская комната  ', 'детская коляска ', 'горшок', ' соска ', ' игрушка ', 'колыбель  ', 'ящик, коробка', 'расческа, гребень ', 'книга', 'тетрадь', 'учебная тетрадь ', 'дневник', 'клей ', 'бумага', 'красная ручка ', 'карандаш','линейка' ]

let uz =['uy, turarjoy ', 'ko`p qavatli uy ', 'xona', 'darvoza', 'zinapoya', 'qavat', 'asos', 'tom', 'boloxona, chordoq ', 'mo`ri ', 'deraza', 'eshik', 'tarnov', 'pol', 'shift ', 'poliz', 'bog`  ', 'hovli', 'qulf ', 'kalit', ' chambara', 'suv shlangi ', 'narvon ', 'gilam', 'yumshoq divan ', 'kreslo ', 'stollar', 'stullar', 'kitob javoni ', 'soat ', 'telefon ', ' go`shak ', 'nomer terish ', 'televizor', 'rasm, kartina ', 'chiroq', 'isitish (tizimi) ', 'quvur', 'parrak ', 'yegulik', 'taom', 'tutun', 'chelak ', 'axlat chelak ', 'hammom', 'yuvinish xonasi ', ' ip', 'tualet qog`ozi ', 'duxi (атир)', 'sovun', 'yaxshi shampun  ', 'tish shchotkasi ', 'tish pastasi ', 'tish tozalash ', 'tomoqni chayish ', 'yuvish', 'kir', 'kir yuvish mashinasi', 'chayqash (toza suvda) ', 'ustara', 'sochiq', 'supurgi', 'uxlash xonasi ', 'krovat (temir) ', 'parda', 'oyna', 'osma, osgich ', 'ilgak', 'yostiq', 'isitgich  ', 'shamcha', 'yondirgich', 'rozetka', 'oshxona', 'muzlatgich', 'sovutgich', 'gaz plita ', 'duxovka', 'jo`mrak ', 'sovuq suv ', 'issiq suv ', 'qozon', 'qozoncha ', 'tova', 'kosa ', 'likopcha', 'kichkina likopcha ', 'idish ', 'piyola', 'pichoq ', 'qoshiq', ' sanchqi', 'sho`rva cho`mich ', 'kapgir ', 'cho`lpi ', 'ko`za ', 'dasturxon', 'gugurt', 'tuvak ', ' мазали', 'sandiq ', 'ko`rpa ', 'yopqich, ko`rpa ', 'ko`rpacha, to`shak', 'choyshab', 'yostiq','dori turadigan quti',' igna', 'ip (qatim) ', ' qaychi ', 'bolalar xonasi ', 'bolalar aravachasi ', 'tuvak ', 'so`rg`ich ', 'o`yinchoq ', 'beshik','quti ','taroq', 'kitob', 'daftar ', 'mashq daftari ','kundalik', 'yelim ', 'qog`oz ', 'qizil ruchka  ', 'qalam', 'chizg`ich ']

// let soz_uz_topish = Math.ceil(Math.random()*1000)%uz.length

let soz_ru_topish 
let content = document.getElementById('content')
let alert = document.querySelector('#alert');
let isTrue = false;
let list = document.querySelector('#list-lugat')

let select = document.getElementById('select-til')
let select_value = 'rus'
let btns = document.getElementById('btns')
let keyingi = document.getElementById('keyingi')

function random(rus, uz){
    let btn = document.querySelectorAll('#btn')
    
    soz_ru_topish = rus[Math.ceil(Math.random()*1000)%rus.length]
    // let a,b,c,d

    content.innerHTML = soz_ru_topish

    for(let i=0; i<=3; i++){
        btn[i].innerHTML = uz[Math.ceil(Math.random()*1000)%uz.length]
    }

    btn[Math.ceil(Math.random()*10)%4].innerHTML = uz[rus.indexOf(soz_ru_topish)]

    alert.innerHTML = `<div class='alert alert-light w-50 m-auto mb-5' role='alert'>
            <div>Tekshiring</div>
            </div>`
}
random(rus, uz)


function tekshir(i, rus, uz){
    let btn_lugat;
    
    switch(i){
        case 0: 
            btn_lugat = btn[0].innerHTML; break;
        case 1: 
            btn_lugat = btn[1].innerHTML; break;
        case 2: 
            btn_lugat = btn[2].innerHTML; break;
        case 3: 
            btn_lugat = btn[3].innerHTML; break;
    }
    if(uz.indexOf(btn_lugat) == rus.indexOf(soz_ru_topish) && uz.indexOf(btn_lugat) != -1){
        alert.innerHTML = `<div class='alert alert-success w-50 m-auto mb-5' role='alert'>
            <div>To'g'ri</div>
            </div>`
    }
    else{
        alert.innerHTML = `<div class='alert alert-danger w-50 m-auto mb-5' role='alert'>
            <div>Noto'g'ri</div>
            </div>`
    }
    
}



// pastdagi lug'at

function lugat(rus, uz){
    list.innerHTML = ''
    rus.forEach((item, index) => {
        list.innerHTML += `<ul class="list-group list-group-horizontal">
        <li class="list-group-item col-6">${item}</li>
        <li class="list-group-item col-6">${uz[index]}</li>
        </ul>`
    })
}
lugat(rus, uz)



select.addEventListener('change', ()=>{
    select_value = select.value;
    console.log(select_value)
    if(select_value == 'rus'){
        keyingi.innerHTML =`<button type="button" class="btn-lg btn-primary" onclick="random(rus, uz)">Keyingisi</button>`

        btns.innerHTML = `<button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(0,rus, uz)">Info</button>
        <button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(1,rus, uz)">Info</button>
        <button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(2,rus, uz)">Info</button>
        <button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(3,rus, uz)">Info</button>`

        random(rus, uz)
        lugat(rus, uz)
    }else{
        
        keyingi.innerHTML =`<button type="button" class="btn-lg btn-primary" onclick="random(uz, rus)">Keyingisi</button>`

        btns.innerHTML = `<button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(0,uz,rus)">Info</button>
        <button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(1,uz,rus)">Info</button>
        <button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(2,uz,rus)">Info</button>
        <button type="button" class="btn btn-info col-5 my-2" id="btn" onclick="tekshir(3,uz,rus)">Info</button>`

        random(uz,rus)
        lugat(uz,rus)
    }
    
})
