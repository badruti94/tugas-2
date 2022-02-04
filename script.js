function sendEmail() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    function inputAlert(field) {
        alert(`${field} input field must be not empty`)
    }

    let valid = true;
    if (name == '') {
        inputAlert('name')
        valid = false;
    }
    if (email == '') {
        inputAlert('email')
        valid = false;
    }
    if (phone == '') {
        inputAlert('phone')
        valid = false;
    }
    if (subject == '') {
        inputAlert('subject')
        valid = false;
    }
    if (message == '') {
        inputAlert('message')
        valid = false;
    }

    let emailReceiver = 'badru123@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}. My phone number is ${phone}. ${message}`


    if (valid) {
        a.click()
    }







}