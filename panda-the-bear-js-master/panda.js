document.addEventListener('DOMContentLoaded', () => {
    
    console.log('Welcome to the Panda console');
    console.log('');
// 1.
    profileImg = document.querySelector('.profile-image');
        console.log(profileImg);
    profileImg.src = 'https://placebear.com/g/400/400';
// 2.
    photographyImg = document.querySelector('.photography');
        console.log(photographyImg);
    photographyImg.src = 'https://placebear.com/g/325/225';
// 3.
    titleText = document.querySelector('h1.highlight');
        console.log(titleText);
    titleText.innerText = 'Ron Bear';
// 4.
    headerText = document.querySelectorAll('h3.info-title');
        console.log(headerText);
    headerText.forEach(function(element) {
        if (element.innerText.trim() === 'Employment') {
            element.innerText = 'Work Experience';
        };
    });
// 7.
    document.body.style.backgroundColor = 'midnightblue';
// 8.
    highlightClass = document.querySelectorAll('.highlight');
        console.log(highlightClass);
        console.log(highlightClass.length);
    for (let i = 0; i < highlightClass.length; i++) {
        element = highlightClass[i];
        element.style.color = 'saddlebrown';
    }
// 9.
    h1Element = document.querySelector('h1');
        console.log(h1Element);
        h1Element.style.fontFamily = 'monospace';
// 10.
    roundIcons = document.querySelectorAll('.action-icon-bg');
        console.log(roundIcons);
    roundIcons.forEach (function(e) {
        e.style.background = 'maroon';
    });
// 11.
    nameField = document.querySelector('.contact-info#name');
        console.log(nameField);
    nameField.placeholder = 'Identify yourself';
// 12.
    messageField = document.querySelector('#message');
        console.log(messageField);
    messageField.placeholder = 'State your business';
// 13.
    nameField.value = 'Your Nemesis';
// 14.
    emailField = document.querySelector('.contact-info#email')
        console.log(emailField);
    emailField.value = 'koalathebear@gmail.com';
// 15.
    submitButton = document.querySelector('#submit');
        console.log(submitButton);
    submitButton.value = 'En Garde!';
// 16.
    submitButton.disabled = true;
// 17.
    bioInfos = document.querySelectorAll('li.bio-info-item');
        console.log(bioInfos);
    bioInfos.forEach(function(element) {
        element.innerText = "-";
    });


});