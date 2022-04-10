
let rus = ['улица','площадь','дорога','путь','железная дорога ','воздушный путь','железнодорожная станция','тротуар ','здание, строение ','дом','квартира ','небоскреб','гостиница','кинотеатр','театр ','рынок ','магазин','блошиный рынок, барахолка','больница ','аптека ','школа','средняя школа','пассажир','пешеходы','пешеходный переход','фонтан','скамейка','парк','аллея, авеню ','сад','забор, ограда ','ряды','столбец, колонка','дорожное движение ','светофоры','мусорный ящик ','мусорная яма ','мусор','колодец','труба','труба для отходов ','пригород','провод, проволока','стоянка (автостоянка)','плакат','реклама','владелец','предприятие ','совместное предприятие ','акционерное общество','общество с ограниченной ответственностью','офис, контора ','почта','стадион ','мечеть','башня, вышка ','памятник ','дворец','кровать и завтрак','таможня','банк','деньги','посольство','цирк','библиотека','ювелирные изделия','парикмахерская','салон красоты ','музей','автозаправочная станция','мост','прохожий, проезжий','пляж','костер','морской берег ','побережье','канава ','топливо','страховой офис ','монета','поворот (разворот)', 'знак','бассейн','карманник ', 'гадалка ','промышленность, индустрия','продукт, продукция ','сельское хозяйство','заочное обучение ','помощь','драка ', 'ссора','бой','знакомство','свадьба','торжественная церемония','похороны ','рождение','смерт','команда, коллектив ','общество ','админстрация']

let uz =['ko`cha ','maydon','yo`l ','yo`l, yo`nalish ','temiryo`l','havo yo`li ','temiryo`l bekati ','trotuar (yo`lak) ','bino','uy','kvartira','osmono`par uy ','mehmonxona','kinoteatr','teatr','bozor','do`kon ','eski bozor','kasalxona','dorixona','maktab','o`rta maktab ','yo`lovchi ','piyodalar','piyodalar o`tish joyi ','favvora','o`rindiq ','park','xiyobon','bog`','to`siq ','qatorlar','ustun','yo`l harakati ','svetofor','axlat qutisi ','axlat qudug`I','axlat chiqindi ','quduq','quvur','chiqindi quvuri ','shahar atrofi ','sim','to`xtash joyi ','afisha ','reklama','egasi, xo`jayini ','korxona, tashkilot ','qo`shma korxona ','aksiyanerlik jamiyati ','masuliyati cheklangan jamiyat ','idora','pochta','stadion','masjid','minora','yodgorlik','saroy','yotoq & nonushta ','bojxona','bank','pul','elchixona','sirk','kutubxona','zargarlik buyumlari ','sartaroshxona','go`zallik saloni ','muzey','AYOQSH','ko`prik ','o`tkinchi ','plyaj','gulxan','dengiz qirg`og`i ','sohil','zovur, xandak ','yoqilg`i ', 'sug`urta idorasi ','tanga','qaytish, burilish ','belgi','havza','kissavur','folbin (ayol)','sanoat','mahsulot','qishloq xo`jaligi ','sirtqi ta`lim ','ko`mak ','mushtlashuv','janjal','jang ','tanishuv','to`y','tantanali marosim ','dafn marosimi ','tu`gilish ','o`lim ','jamoa','jamiyat','ma`muriyat']

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

