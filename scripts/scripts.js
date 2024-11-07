const learnButton = document.getElementById('btn-learn');
const donateButton = document.getElementById('btn-donate');
const getInvolvedButton = document.getElementById('btn-get-involved');
const learnMoreButton = document.getElementById('btn-learn-more');
const joinButton = document.getElementById('btn-join');



// add functionality to the buttons
homePage => {
    learnButton.addEventListener('click', function() {
        window.location.href = 'learn.html';
    });
    donateButton.addEventListener('click', function() {
        window.location.href = 'donate.html';
    });
    getInvolvedButton.addEventListener('click', function() {
        window.location.href = 'get-involved.html';
    });
    learnMoreButton.addEventListener('click', function() {
        window.location.href = 'learn-more.html';
    });
}

learnButton.addEventListener('click', homePage);
donateButton.addEventListener('click', homePage);

