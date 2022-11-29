import './views/message.css';
/**
    The main entry of the application
    */
function app(window) {
    console.log('starting');

    let container = document.createElement('div');
    let starting_text = document.createElement('p');
    starting_text.classList.add('embed_text');
    starting_text.textContent = "I want to";
    container.appendChild(starting_text)

    // append elements to body
    let entrance = document.getElementById('embed_entrance');
    entrance.appendChild(container);
}

app(window);
