let muj_jen = ['Нефть', 'цемент', 'сахар', 'жемчуг', 'сметана','молоко', 'Радость', 'добро', 'горе','веселье', 'краснота', 'бег', 'седина', 'Учительство', 'студенчество', 'листва', 'зверьѐ','вороньѐ', 'детвора', 'Воронеж', 'Кавказ','Каспий', 'Урал','Чернила', 'опилки', 'очистки', 'Именины', 'выборы','нападки', 'козни', 'побои', 'Деньги','финансы', 'дебри', 'Каракумы', 'Карпаты', 'Очки', 'брюки', 'сани', 'ворота','ножницы', 'клещи', 'Сумерки', 'сутки','будни', 'каникулы'];

let muj = ['Нефть', 'цемент', 'сахар', 'жемчуг', 'сметана','молоко', 'Радость', 'добро', 'горе','веселье', 'краснота', 'бег', 'седина', 'Учительство', 'студенчество', 'листва', 'зверьѐ','вороньѐ', 'детвора', 'Воронеж', 'Кавказ','Каспий', 'Урал'];

let jen = ['Чернила', 'опилки', 'очистки', 'Именины', 'выборы','нападки', 'козни', 'побои', 'Деньги','финансы', 'дебри', 'Каракумы', 'Карпаты', 'Очки', 'брюки', 'сани', 'ворота','ножницы', 'клещи', 'Сумерки', 'сутки','будни', 'каникулы'];

let muj1 = ['Нефть - neft', 'цемент - sement', 'сахар - shakar', 'жемчуг - dur', 'сметана - qatiq','молоко - sut', 'Радость - Quvonch', 'добро - yaxshi', 'горе - qayg\'u','веселье - qiziqarli', 'краснота - qizarish', 'бег - qadam', 'седина - kulrang sochlar', 'Учительство - ta\'lim berish', 'студенчество - talabalar', 'листва - barglar', 'зверьѐ - hayvon','вороньѐ - qarg\'a', 'детвора - bolalar', 'Воронеж - Voronej', 'Кавказ - Kavkaz','Каспий - Kaspiy', 'Урал - Ural'];

let jen1 = ['Чернила - Siyoh', 'опилки - apilka', 'очистки - tozalash', 'Именины - nom kuni', 'выборы - saylovlar','нападки - hujumlar', 'козни - intrigalar', 'побои - kaltaklash', 'Деньги - pul','финансы - Moliya', 'дебри - o\'rmon', 'Каракумы - Qoraqum', 'Карпаты - Karpatlar', 'Очки - ko\'zoynak', 'брюки - shim', 'сани - chana', 'ворота - datvoza','ножницы - pichoqlar', 'клещи - shomil', 'Сумерки - Chang', 'сутки - kun','будни - Ish kunlari', 'каникулы - ta\'til'];

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
    <li class="list-group-item col-6 bg-success text-light">${item}</li>
    </ul>`
})





