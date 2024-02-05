const phrases = {
    nouns: ['Unicorn', 'Dragon', 'Fairy', 'Mermaid', 'Wizard'],
    verbs: ['Dances', 'Flies', 'Giggles', 'Transforms', 'Whispers'],
    adjectives: ['Sparkling', 'Giggly', 'Mysterious', 'Playful', 'Whimsical'],
    secondNouns: ['Crystal Ball', 'Magic Wand', 'Enchanted Mirror', 'Storybook', 'Treasure Chest'],
    places: ['Enchanted Forest', 'Rainbow Valley', 'Cloud Castle', 'Moonlit Lake', 'Starry Meadow']
};

function getRandomWord(category) {
    const words = phrases[category];
    return words[Math.floor(Math.random() * words.length)];
}

function generatePhrase(category) {
    const word = getRandomWord(category);
    document.getElementById('storyOutput').innerHTML += word + ' ';
}

function generateStory() {
    document.getElementById('storyOutput').innerHTML = '';

    for (let i = 0; i < 5; i++) {
        generatePhrase('nouns');
        generatePhrase('verbs');
        generatePhrase('adjectives');
        generatePhrase('secondNouns');
        generatePhrase('places');
    }
}

function addStudentInfo() {
    const fairyID = prompt('Enter Your Fairy Name:');
    if (fairyID !== null && fairyID !== "") {
        const studentInfo = document.createTextNode(' Fairy ID: '+'Fairy' + fairyID + ' <3 ' );
        document.getElementById('storyOutput').appendChild(studentInfo);
    }
}


function resetStory() {
    document.getElementById('storyOutput').innerHTML = '';
}
