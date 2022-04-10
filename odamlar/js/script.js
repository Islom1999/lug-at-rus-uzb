
let rus = ['человек', 'люди','родители','отец','мать','папа','мама','брат','сестра','старший брат','младший брат','бабушка','дедушка','сирота','дядя','тетя','ребенок','дети','сын','дочь','жена','муж','супруг(а)','свекровь, теща','свекор, тесть','свояченица (сестра жены)','шурин (брат жены)','золовка (сестра мужа)','деверь (брат мужа)','зять','мачеха','отчим','родственник','племянник','племянница','близнецы, двойняшки','гость','сосед(ка)','невестка','невеста ','жених','мужчина','женщина ','мальчик','девушка','младенец, малыш','человечество','народ','детство','молодость, юность','молодежь','старый человек','старик','старуха','подросток','взрослый','несовершеннолетний','друг','враг','пол','язык','обычай','традиция','работа, дело','учеба','исследование','рабочий','сотрудник(ница)','водитель','врач, доктор, лекарь','целитель, лекарь','учник, ученица','переводчик(ца)','инженер','учитель(ница)','строитель','бухгалтер','пилот, летчик','мясник','продавец, продавщица','торговец','игрок','танцор, танцовщица','певец','художник','больной, пациент','виновник','преступник','грешник','моряк, матрос','портной','лидер, вождь','начальник, руководитель','любовник','любовница','охранник','сторож','посол','раб, рабыня','слуга, служитель','горничная, служанка','предки','пророк','паломник','раненый','господин, госпожа','труп','обманщик','лжец, врун, лгун(ья)','мошенник','невысокий человек, карлик, лилипут','убийца','известный','знаменитый','подхалим, подлиза','спонсор','поручитель','повар, повариха, кухарка','космонавт','зубной врач, стоматолог','охотник','помощник(ца)','дежурный','хвастун','заложник','наследник, наследница','представитель, агент','сваха']

let uz =['odam','odamlar','ota-ona','ota','ona','dada','oyi','aka, uka','opa, singil','aka','uka','buvi','bobo','yetim','amaki, tog`a','амма, хоlа','bоlа','bolalar','o`g`il farzand','qiz farzand','xotin','er','turmush o`rtog`','qaynona','qaynota','qaynopa','qaynaka','qaynopa','qaynaka','pochcha, kuyov','o`gayona','o`gayota','qarindosh','o`g`il jiyan','qiz jiyan','egizaklar','mehmon','qo`shni','kelin','kelin (to`y	bo`layotgan)','kuyov (to`y bo`layotgan)','erkak kishi','ayol kishi','o`g`il bola','qiz bola','chaqaloq, go`dak','insoniyat','xalq','bolalik','yoshlik','yoshlar','qari odam','chol','kampir','o`smir','voyaga yetgan','voyaga yetmagan','do`st','dushman','jins','til','urf-odat','an`ana','ish','o`qish (tahsil)','tadqiqot','ishchi','xodim','haydovchi','shifokor','tabib','o`quvchi','tarjimon','muhandis','o`qituvchi','quruvchi','hisobchi','uchuvchi','qassob','sotuvchi','savdogar','o`yinchi','raqqos(a)','qo`shiqchi','rassom','bemor','aybdor','jinoyatchi','gunohkor','dengizchi','tikuvchi','yo`lboshchi','boshliq, rahbar','oshiq','ma`shuqa','qo`riqchi','qorovul','elchi','qul','xizmatchi','oqsoch','ajdodlar','payg`ambar','ziyoratchi','yarador','janob, xonim','murda','aldovchi','yolg`onchi','tovlamachi','pakana','qotil','taniqli','mashhur','laganbardor','homiy','kafil','oshpaz','fazogir','tish duxtur','ovchi','yordamchi','navbatchi','maqtanchoq','asir','merosxo`r','vakil','sovchi']

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
