
let rus = ['жизнь ','Бог','вселенная','мир','земля ','небо','солнце','луна','звезда ','огонь','воздух','погода ','вода','почва, грунт ','песок','камень','щебень, гравие ',' гора','пещера','вершина','холм ','пустыня','лес','болото ','река','озеро','море','океан','континент','религия ','рай','ад','дух','ангел','дьявол, черт, бес ','грех','могила','животное (животные)','растение (растения) ','цветок (цветы)','дерево (деревья)','древесина','дрова','хлопок','климат ','холодный','уголь','железо','сталь','болезнь','здоровье','свобода ','мир','дружба','война ','шум','звук','голос','горячий, жаркий ','прохладный','теплый','мороз','лед ','пар ','ветер','дождь','идет дождь ','снег','падает снег ','радуга','облако, туча ','туман','гроза, гром ','молния','землетрясение','катастрофа ','карта','государство','страна ','область ','регион','район ','город ','городок ','деревня ','граница','сезон','весна ','лето ','осень ','зима','спутник','планета','золото','серебро','нефть','север ','юг','восток','запад','правда','справедливость','вера','надежда ','любовь ','Коран']

let uz =['hayot','xudo','olam','jahon, dunyo ','yer','osmon','quyosh','oy','yulduz','olov','havo','ob-havo','suv','tuproq','qum','tosh','shag`al ','tog`','g`or','cho`qqi','qir, adir ','cho`l','o`rmon ','botqoq','daryo','ko`l ','dengiz','ummon','qit`a','din','jannat ','do`zax, jahannam ','ruh','farishta','shayton, iblis ','gunoh','qabr','hayvon','o`simlik ','gul','daraxt','yog`och, taxta ','o`tin ','paxta','iqlim','sovuq','ko`mir ','temir','po`lat ','kasallik','sog`lik ','ozodlik','tinchlik','do`stlik ','urush','shovqin','tovush','ovoz ','issiq','salqin','iliq','ayoz','muz','bug`','shamol','yomg`ir ','yomg`ir yog`ayapti ','qor','qor yog`ayapti ','камалак ','bulut','tuman','momaqaldiroq','chaqmoq','zilzila','ofat','xarita','davlat','mamlakat','viloyat','mintaqa','tuman','shahar ','shaharcha','qishloq ','chegara','fasl','bahor','yoz ','kuz ','qish','yo`ldosh ','sayyora','oltin, tilla ','kumush','neft','shimol','janub','sharq','g`arb ','xaqiqat','adolat','ishonch','umid','sevgi','quron']

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
