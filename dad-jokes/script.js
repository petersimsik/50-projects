const joke = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

btn.addEventListener('click', () => {
    generateJoke();
});

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'}
    };

    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    joke.innerText = data.joke;
}

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'}
//     };

//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             joke.innerText = data.joke;
//         });
// }