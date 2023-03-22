
let txtMail = document.querySelector('#txtMail');
let txtPhone = document.querySelector('#txtPhone');
let spnAllRight = document.querySelector('.spnAllRight');
let btnBack = document.querySelector('.btnBack');
let btnBackUser = document.querySelector('.btnBackUser');
let newUser = document.querySelector('.newUser');
let spnAllRightUser = document.querySelector('.spnAllRightUser');
let btnContain = document.querySelector('.btnContain');
let btnBackregister = document.querySelector('.btnBackregister');
let finishRegist = document.querySelector('.finishRegist');

let goHome = document.querySelector('.goHome');

txtMail.addEventListener('click', function() {
    document.querySelector('.formMail').style.display = 'block';
    document.querySelector('.formPhone').style.display = 'none';

})
txtPhone.addEventListener('click', function() {
    document.querySelector('.formMail').style.display = 'none';
    document.querySelector('.formPhone').style.display = 'block';

})

spnAllRight.addEventListener('click', () =>{
    document.querySelector('.mainPage').style.display = 'none';
    document.querySelector('#allRight').style.display = 'block';
})
btnBack.addEventListener('click', () =>{
    document.querySelector('.mainPage').style.display = 'block';
    document.querySelector('#allRight').style.display = 'none';
})






newUser.onclick = function() {
    document.querySelector('.registes').style.display = 'block';
    document.querySelector('.mainPage').style.display = 'none';
}
spnAllRightUser.addEventListener('click', () =>{
    document.querySelector('.registes').style.display = 'none';
    document.querySelector('#allRightUser').style.display = 'block';
})
btnBackUser.addEventListener('click', () =>{
    document.querySelector('.registes').style.display = 'block';
    document.querySelector('#allRightUser').style.display = 'none';
})


btnContain.addEventListener('click', function() {
    document.querySelector('.registes').style.display = 'none';
    document.querySelector('#personalInformations').style.display = 'block';
})

btnBackregister.addEventListener('click', () =>{
    document.querySelector('.registes').style.display = 'block';
    document.querySelector('#personalInformations').style.display = 'none';
})

finishRegist.addEventListener('click', function() {
    document.querySelector('#personalInformations').style.display = 'none';
    document.querySelector('.alertMessege').style.display = 'block';
})

goHome.addEventListener('click', function() {
    document.querySelector('.alertMessege').style.display = 'none';
    document.querySelector('.mainPage').style.display = 'block';
})

let email = document.querySelector('#email');
let passWord = document.querySelector('#passWord');
let phone = document.querySelector('#phone');
let btnSignIn = document.querySelector('.btnSignIn');


