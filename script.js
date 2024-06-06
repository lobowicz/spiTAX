// get submit button
const submitButton = document.querySelector('.qual-submit');
// create a new element for the output 
const output = document.createElement('div');

function checkStatus() {
    output.classList.add('output-message');
    document.querySelector('.welcome-body').appendChild(output);
    // if citizen, card, descendant, etc.. then
    if (document.getElementById('qa1b').checked && document.getElementById('qa2b').checked && document.getElementById('qa3b').checked && 
        document.getElementById('qa4b').checked && document.getElementById('qa5b').checked && document.getElementById('qa6b').checked &&
        document.getElementById('qa7b').checked) 
    {
        output.textContent = 'Great news! We can help you fill out your returns. Continue?';
        output.style.color = 'green';

        // create and add a div that links to the next form
        const continueButtonContainer = document.createElement('div');
        continueButtonContainer.classList.add('continue-container');
        document.querySelector('.welcome-body').appendChild(continueButtonContainer);
        
        const continueButt = document.createElement('button');
        continueButt.classList.add('continue-button');
        continueButt.textContent = '>';
        continueButt.style.color = 'green';
        document.querySelector('.continue-container').appendChild(continueButt);

    }

    else 
    {
        output.textContent = 'Unfortunately, you do not qualify to use our service at this time. Check back soon to see our updates.';
        output.style.color = 'red';
    }

    window.location.href = 'overview.html'
}

// check for button click and run function 
submitButton.addEventListener('click', checkStatus);



