const contactForm = document.getElementById('mailMe');
let senderName = document.getElementById('senderName');
let emailAddress = document.getElementById('emailAddress');
let subjectLine = document.getElementById('subjectLine');
let emailBody = document.getElementById('emailBody');

const msgSuccessfullySent = "Email delivered! I'll reach out to you soon. Thanks!";
const msgFailedToSend = "Sorry; an error has occurred and your email has not been sent.";

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        senderName: senderName.value,
        emailAddress: emailAddress.value,
        subjectLine: subjectLine.value,
        emailBody: emailBody.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
        if (xhr.responseText == 'success') {
            alert(msgSuccessfullySent);
            senderName.value = '';
            emailAddress.value = '';
            subjectLine.value = '';
            emailBody.value = '';
        } else {
            alert(msgFailedToSend);
        }
    };

    xhr.send(JSON.stringify(formData));
});