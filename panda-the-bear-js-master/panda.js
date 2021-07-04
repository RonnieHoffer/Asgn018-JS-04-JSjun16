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
// 5.



});