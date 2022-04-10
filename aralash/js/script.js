
let rus = ['подросток','взрослый','несовершеннолетний',
'продавец, продавщица','торговец','преступник','грешник','портной','охранник','сторож','посол','слуга, служитель','горничная, служанка','предки','пророк','паломник','обманщик','лжец, врун, лгун(ья)','мошенник','известный','знаменитый','подхалим, подлиза','поручитель','хвастун','заложник','наследник, наследница','представитель, агент','вселенная','песок','пещера','вершина','холм','пустыня','религия','дьявол, черт, бес','растение (растения)','древесина','климат','болезнь','сталь','прохладный','радуга','гроза, гром','молния','землетрясение','катастрофа','деревня','серебро','север','юг','восток','запад','справедливость','путь',
'железнодорожная станция','небоскреб','рынок','блошиный рынок,барахолка','средняя школа','пассажир','пешеходный переход','аллея, авеню','забор, ограда','ряды','столбец, колонка','дорожное движение','мусорная яма','колодец','труба для отходов','пригород','провод, проволока','владелец','предприятие','дрова','совместное предприятие','акционерное общество','общество с ограниченной ответственностью','дворец','посольство','ювелирные изделия','парикмахерская','автозаправочная станция','прохожий, проезжий','морской берег','побережье','канава','страховой офис','монета','гадалка','промышленность, индустрия','сельское,хозяйство','заочное обучение','драка','ссора','свадьба','торжественная церемония','похороны','общество','админстрация'
]

let uz =['o`smir','voyaga yetgan','voyaga yetmagan','sotuvchi','savdogar','jinoyatchi','gunohkor','tikuvchi','qo`riqchi','qorovul','elchi','xizmatchi','oqsoch','ajdodlar','payg`ambar','ziyoratchi','aldovchi','yolg`onchi','tovlamachi','taniqli','mashhur','laganbardor','kafil','maqtanchoq','asir','merosxo`r','vakil','olam','qum','g`or','cho`qqi','qir, adir','cho`l','din','shayton, iblis','o`simlik','yog`och, taxta',
'iqlim','kasallik','po`lat','salqin','камалак','momaqaldiroq','chaqmoq','zilzila','ofat','qishloq','kumush','shimol','janub','sharq','g`arb','adolat','yo`l, yo`nalish','temiryo`l,bekati','osmono`par uy','bozor','eski bozor','o`rta maktab','yo`lovchi','piyodalar o`tish joyi','xiyobon','to`siq','qatorlar','ustun','yo`l harakati','axlat qudug`i','quduq','chiqindi quvuri','shahar atrofi','sim','egasi, xo`jayini','korxona, tashkilot'
,'o`tin','qo`shma korxona','aksiyanerlik,jamiyati','masuliyati cheklangan jamiyat','saroy','elchixona','zargarlik buyumlari','sartaroshxona','AYOQSH','o`tkinchi','dengiz qirg`og`i','sohil','zovur, xandak','sug`urta idorasi','tanga','folbin (ayol)','sanoat','qishloq xo`jaligi','sirtqi,ta`lim','mushtlashuv','janjal','to`y','tantanali marosim','dafn marosimi','jamiyat','ma`muriyat'

]

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
