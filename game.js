// game.js

const emojiPuzzles = [
    { emojis: ['🧈', '🪰'], answer: 'Butterfly' },
    { emojis: ['🍎', '🍏'], answer: 'Apple' },
    { emojis: ['🐍', '🍫'], answer: 'Snake' },
    { emojis: ['🍕', '🍕'], answer: 'Pizza' },
    { emojis: ['🌳', '🌿'], answer: 'Tree' },
    { emojis: ['🐱', '🐶'], answer: 'Pets' },
    { emojis: ['🍓', '🍫'], answer: 'Strawberry' },
    { emojis: ['🦄', '🌟'], answer: 'Unicorn' },
    { emojis: ['🚗', '🛣️'], answer: 'Road' },
    { emojis: ['🐝', '🍯'], answer: 'Beehive' },
    { emojis: ['🌞', '🍹'], answer: 'Vacation' },
    { emojis: ['🎸', '🎶'], answer: 'Music' },
    { emojis: ['👑', '🦁'], answer: 'Lion' },
    { emojis: ['🎁', '🎄'], answer: 'Christmas' },
    { emojis: ['🐢', '🦸‍♂️'], answer: 'Hero' },
    { emojis: ['🌈', '☁️'], answer: 'Rainbow' },
    { emojis: ['🍔', '🍟'], answer: 'Burger' },
    { emojis: ['🍦', '🍫'], answer: 'Ice Cream' },
    { emojis: ['🍞', '🍯'], answer: 'Bread' },
    { emojis: ['🌕', '🌑'], answer: 'Moon' },
    { emojis: ['🎠', '🎡'], answer: 'Amusement' },
    { emojis: ['🎩', '🐇'], answer: 'Rabbit' },
    { emojis: ['🦷', '🌻'], answer: 'Bird' },
    { emojis: ['🎤', '🎶'], answer: 'Singer' },
    { emojis: ['🍿', '🎬'], answer: 'Popcorn' },
    { emojis: ['🍋', '🍒'], answer: 'Lemon' },
    { emojis: ['🍌', '🐒'], answer: 'Banana' },
    { emojis: ['🍷', '🍴'], answer: 'Dinner' },
    { emojis: ['🎨', '🖌️'], answer: 'Painting' },
    { emojis: ['🕹️', '🎮'], answer: 'Video Game' },
    { emojis: ['🌮', '🍹'], answer: 'Taco' },
    { emojis: ['🍇', '🍷'], answer: 'Grapes' },
    { emojis: ['🐉', '🧝‍♂️'], answer: 'Dragon' },
    { emojis: ['🍓', '🥝'], answer: 'Fruit' },
    { emojis: ['🚀', '🌍'], answer: 'Rocket' },
    { emojis: ['🦀', '🍤'], answer: 'Crab' },
    { emojis: ['🦒', '🐘'], answer: 'Safari' },
    { emojis: ['🍓', '🥑'], answer: 'Smoothie' },
    { emojis: ['🍰', '🍷'], answer: 'Cake' },
    { emojis: ['🏆', '🎖️'], answer: 'Award' },
    { emojis: ['💎', '🔑'], answer: 'Diamond' },
    { emojis: ['🌷', '🍃'], answer: 'Flower' },
    { emojis: ['🍄', '🌳'], answer: 'Forest' },
    { emojis: ['🍓', '🍪'], answer: 'Cookie' },
    { emojis: ['🛁', '🧴'], answer: 'Bath' },
    { emojis: ['🌴', '🌞'], answer: 'Beach' },
    { emojis: ['🏖️', '🌅'], answer: 'Sunset' },
    { emojis: ['🐙', '🍣'], answer: 'Sushi' },
    { emojis: ['🏀', '⚽'], answer: 'Sports' },
    { emojis: ['🦢', '🌊'], answer: 'Swan' },
    { emojis: ['🐍', '🍏'], answer: 'Snake' },
    { emojis: ['🧸', '🎀'], answer: 'Teddy' },
    { emojis: ['🎥', '🍿'], answer: 'Movie' },
    { emojis: ['🌺', '🌼'], answer: 'Flower' },
    { emojis: ['🍒', '🍑'], answer: 'Peach' },
    { emojis: ['🎁', '🎉'], answer: 'Gift' },
    { emojis: ['🍿', '🎬'], answer: 'Movies' }
];

let score = 0;
let currentPuzzle = {};

function getNewPuzzle() {
    const randomIndex = Math.floor(Math.random() * emojiPuzzles.length);
    currentPuzzle = emojiPuzzles[randomIndex];
    document.getElementById('emoji-display').textContent = currentPuzzle.emojis.join(' ');
    document.getElementById('user-guess').value = '';
    document.getElementById('feedback').textContent = '';
}

document.getElementById('submit-guess').addEventListener('click', () => {
    const userGuess = document.getElementById('user-guess').value.trim().toLowerCase();
    if (userGuess === currentPuzzle.answer.toLowerCase()) {
        score++;
        document.getElementById('feedback').textContent = "Correct! 🎉";
    } else {
        document.getElementById('feedback').textContent = `Wrong! The correct answer was: ${currentPuzzle.answer}.`;
    }

    document.getElementById('score').textContent = score;
    setTimeout(getNewPuzzle, 1000); // Show the next puzzle after 1 second
});

// Start the game with the first puzzle
getNewPuzzle();
