// Autofill guest account credentials
document.querySelector('#guestAccount').addEventListener('click',fillLogin);

function fillLogin(){
    document.querySelector('#username').value = 'studioflowguest'
    document.querySelector('#password').value = 'studioflowrocks'
    document.forms["login"].submit()
}