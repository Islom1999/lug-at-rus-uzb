
let rus = ['товар ', 'рынок ', 'магазин', 'бакалейная лавка ', 'пекарня ', 'мясник ', 'мясо', 'сыр', 'растительное масло ', 'сливочное масло ', 'сладости', ' повидло, варенье ', 'сахар', 'соль', 'уксус' , 'мука ', 'тесто', 'рис ','пирожное' , 'напитки', 'сок', ' мороженое ', 'подарок', 'копченое мясо ', 'сгущенное молоко  ', 'лепешка', 'булочка', 'сушеный хлеб, сухарики', 'зеленый чай ', 'фруктовый чай ', ' продавец', 'покупатель ', 'клиент', 'покупать, купить ', 'продавать, продать ', 'цена', 'Это стоит одна тысяча сумов', 'сдача ', 'кассир(ша) ', 'дешево ', 'дорого', 'свежий ', 'яйцо', 'аренда ', 'арендатор', 'оборудование ', 'долг', 'платить, заплатить ', 'счет', 'денежный перевод ', 'бумажный пакет ', 'скидка', ' налог', 'разрешение', 'качество']

let uz =['tovar, mol ', 'bozor', 'do`kon ', 'baqqollik do`koni ', 'nonvoyxona', 'qassobxona', 'go`sht ', 'pishloq', 'o`simlik moyi ', 'sariyog` ', 'shrinliklar ', 'murabbo, shinni ', 'shakar', 'tuz', 'sirka', 'un', ' xamir', 'guruch', 'pishiriq', 'ichimliklar', 'sharbat ', 'muzqaymoq', ' sovg`a ', 'dudlangan go`sht ', 'quyultirilgan sut ', ' kulcha non ', 'bo`lka non ', 'quritilgan non ', 'ko`k choy ', 'mevali choy ', 'sotuvchi ', ' xaridor', 'mijoz', 'sotib olmoq ', 'sotmoq', 'narx', 'narxi 1000 sum turadi ', 'qaytim', 'hisobchi ', 'arzon ', 'qimmat', 'toza, yangi ', ' tuxum', 'ijara', 'ijarachi', 'jihoz', 'qarz', 'to`lamoq ', 'hisob', 'pul o`tkazish ', 'qog`oz sumka', 'chegirma', 'soliq', 'ruxsatnoma', 'sifat']

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
