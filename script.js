const itemImageDictionary = {
    "Start a Netflix marathon": "https://image.similarpng.com/very-thumbnail/2021/01/Netflix-logo-on-transparent-background-PNG.png",
    "Join an online gaming session": "https://toppng.com/uploads/preview/the-new-xbox-one-controller-is-included-with-the-s-microsoft-xbox-one-s-500gb-game-console-11563576890xpezvnikqx.png",
    "Text friends to go out": "https://w7.pngwing.com/pngs/874/257/png-transparent-whatsapp-computer-icons-computer-software-whatsapp-text-logo-whatsapp-icon.png",
    "Lock the TV with parental controls": "https://img.freepik.com/premium-psd/padlock-isolated-transparent-background-png-psd_888962-889.jpg",
    "Shut down internet access": "https://www.pngitem.com/pimgs/m/341-3413524_wi-fi-lock-icon-icon-no-internet-connection.png",
    "Call parents to check on you": "https://w7.pngwing.com/pngs/874/257/png-transparent-whatsapp-computer-icons-computer-software-whatsapp-text-logo-whatsapp-icon.png",
    "Hide in the backyard": "https://p7.hiclipart.com/preview/912/702/522/garden-landscaping-landscape-clip-art-jardin.jpg",
    "Pretend to be sick": "https://png.pngtree.com/element_our/png/20181205/thermometer-vector-icon-png_260730.jpg",
    "Say you forgot the assignment": "https://i.pinimg.com/originals/1f/7d/eb/1f7debbb23aed5ae6a6718efe6d6d5cf.png",
    "Set multiple homework alarms": "https://png.pngtree.com/png-clipart/20210115/ourmid/pngtree-cartoon-red-black-alarm-clock-siren-clipart-png-image_2741423.jpg",
    "Email teacher about your excuses": "https://p7.hiclipart.com/preview/595/338/523/icon-email-clip-art-email-png.jpg",
    "Alert your parents about homework": "https://i.pinimg.com/originals/1f/7d/eb/1f7debbb23aed5ae6a6718efe6d6d5cf.png",
    "Sleep through the lecture": "https://as1.ftcdn.net/v2/jpg/04/88/25/54/1000_F_488255435_whYMQVpRvgWlsTrfDIvNUtpWWAdw188Q.jpg",
    "Play mobile games secretly": "https://png.pngtree.com/png-vector/20220111/ourmid/pngtree-mobile-gaming-concept-vector-png-image_4289141.png",
    "Pass notes to friends": "https://static.vecteezy.com/system/resources/previews/022/299/303/non_2x/sticky-note-paper-transparent-free-png.png",
    "Make your phone battery die": "https://png.pngtree.com/png-clipart/20200701/original/pngtree-dead-battery-png-image_5407144.jpg",
    "Move your seat to front row": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXX_pF2ziaQxb8waDAbMuD6SvzMYntAU3R8A&s",
    "Tell teacher about your phone": "https://p7.hiclipart.com/preview/294/68/966/teacher-lecturer-clip-art-teacher.jpg",
    "Make up fake technical issues": "https://png.pngtree.com/recommend-works/png-clipart/20240707/ourlarge/pngtree-laptop-system-error-warning-computer-notification-png-image_13046662.png",
    "Skip school that day": "https://png.pngtree.com/png-vector/20221115/ourmid/pngtree-skipping-school-red-gradient-concept-icon-kid-teen-illustration-vector-png-image_41125066.jpg",
    "Wing it without preparation": "https://p1.hiclipart.com/preview/152/298/476/clay-os-6-a-macos-icon-microsoft-powerpoint-p-document-icon-png-clipart-thumbnail.jpg",
    "Pre-record your voice practicing": "https://toppng.com/uploads/preview/voice-icon-ico-11563196166nw20zfoxf1.png",
    "Schedule mandatory rehearsal": "https://thumbs.dreamstime.com/z/practice-sign-microphone-presentation-speaker-rehearsal-d-illustration-practice-sign-microphone-presentation-speaker-rehearsal-d-95703306.jpg",
    "Set your alarm 2 hours earlier": "https://png.pngtree.com/png-clipart/20210115/ourmid/pngtree-cartoon-red-black-alarm-clock-siren-clipart-png-image_2741.png",
    "Plan a week-long gaming marathon": "https://toppng.com/uploads/preview/the-new-xbox-one-controller-is-included-with-the-s-microsoft-xbox-one-s-500gb-game-console-11563576890xpezvnikqx.png",
    "Organize a party at your house": "https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-festival-trumpet-celebration-party-fireworks-explosion-png-image_2589034.jpg",
    "Find ways to cheat on tests": "https://png.pngtree.com/png-clipart/20201225/ourmid/pngtree-student-homework-copy-cheat-sheet-hand-drawn-png-image_2598042.jpg",
    "Hide all gaming consoles": "https://toppng.com/uploads/preview/the-new-xbox-one-controller-is-included-with-the-s-microsoft-xbox-one-s-500gb-game-console-11563576890xpezvnikqx.png",
    "Tell friends about your schemes": "https://w7.pngwing.com/pngs/874/257/png-transparent-whatsapp-computer-icons-computer-software-whatsapp-text-logo-whatsapp-icon.png",
    "Install study monitoring app": "https://toppng.com/uploads/preview/ios-11-app-store-icon-apple-app-store-icon-1156298730556uxorxnhg.png"
};

function animateImage(imagePath) {
    const img = document.getElementById('animatedImage');
    img.src = imagePath;

    img.onload = function() {
        // Positions: 0 = top, 1 = right, 2 = bottom, 3 = left
        const positions = ['top', 'right', 'bottom', 'left'];
        let startPos = Math.floor(Math.random() * 4);
        let endPos = (startPos + 2) % 4; // Opposite direction

        // Set initial position
        function setStartPosition() {
            const windowWidth = window.innerWidth - img.width;
            const windowHeight = window.innerHeight - img.height;

            switch(positions[startPos]) {
                case 'top':
                    img.style.top = '-100px';
                    img.style.left = Math.random() * windowWidth + 'px';
                    break;
                case 'right':
                    img.style.top = Math.random() * windowHeight + 'px';
                    img.style.left = windowWidth + 100 + 'px';
                    break;
                case 'bottom':
                    img.style.top = windowHeight + 100 + 'px';
                    img.style.left = Math.random() * windowWidth + 'px';
                    break;
                case 'left':
                    img.style.top = Math.random() * windowHeight + 'px';
                    img.style.left = '-100px';
                    break;
            }
        }

        // Set end position
        function setEndPosition() {
            const windowWidth = window.innerWidth - img.width;
            const windowHeight = window.innerHeight - img.height;

            // First move to center
            setTimeout(() => {
                img.style.top = (windowHeight / 2) + 'px';
                img.style.left = (windowWidth / 2) + 'px';
            }, 0);

            // Then move to exit position
            setTimeout(() => {
                switch(positions[endPos]) {
                    case 'top':
                        img.style.top = '-100px';
                        img.style.left = Math.random() * windowWidth + 'px';
                        break;
                    case 'right':
                        img.style.top = Math.random() * windowHeight + 'px';
                        img.style.left = windowWidth + 100 + 'px';
                        break;
                    case 'bottom':
                        img.style.top = windowHeight + 100 + 'px';
                        img.style.left = Math.random() * windowWidth + 'px';
                        break;
                    case 'left':
                        img.style.top = Math.random() * windowHeight + 'px';
                        img.style.left = '-100px';
                        break;
                }
            }, 2000);
        }

        // Start the animation
        setStartPosition();
        setEndPosition();
    };
}


// Tutorial popup functions
function showTutorial() {
document.getElementById('tutorial-popup').style.display = 'flex';
}

function closeTutorial() {
document.getElementById('tutorial-popup').style.display = 'none';
updateStory(); // Start/update the game
}

// Initialize popup on load
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('tutorial-popup').style.display = 'flex';
});

// Previous JavaScript code remains the same
const scenarios = [
{
text: "It's the night before an important exam...",
pastChoices: [
"Start a Netflix marathon",
"Join an online gaming session",
"Text friends to go out"
],
futureChoices: [
"Lock the TV with parental controls",
"Shut down internet access",
"Call parents to check on you"
]
},
{
text: "You're trying to skip homework again...",
pastChoices: [
"Hide in the backyard",
"Pretend to be sick",
"Say you forgot the assignment"
],
futureChoices: [
"Set multiple homework alarms",
"Email teacher about your excuses",
"Alert your parents about homework"
]
},
{
text: "During class, you plan to...",
pastChoices: [
"Sleep through the lecture",
"Play mobile games secretly",
"Pass notes to friends"
],
futureChoices: [
"Make your phone battery die",
"Move your seat to front row",
"Tell teacher about your phone"
]
},
{
text: "You need to prepare for a presentation...",
pastChoices: [
"Make up fake technical issues",
"Skip school that day",
"Wing it without preparation"
],
futureChoices: [
"Pre-record your voice practicing",
"Schedule mandatory rehearsal",
"Set your alarm 2 hours earlier"
]
},
{
text: "It's finals week preparation...",
pastChoices: [
"Plan a week-long gaming marathon",
"Organize a party at your house",
"Find ways to cheat on tests"
],
futureChoices: [
"Hide all gaming consoles",
"Tell friends about your schemes",
"Install study monitoring app"
]
}
];

let currentScenario = 0;
let pastScore = 0;
let futureScore = 0;
let currentTurn = 'past';
let pastChoice = null;
let futureChoice = null;

function updateScores() {
document.getElementById("past-score").textContent = pastScore;
document.getElementById("future-score").textContent = futureScore;
}

function determineRoundWinner() {
const winner = Math.random() < 0.5 ? 'past' : 'future';
if (winner === 'past') {
pastScore++;
document.getElementById("result").textContent = 
`Past Self managed to ${pastChoice} despite Future's attempt to ${futureChoice}!`;
} else {
futureScore++;
document.getElementById("result").textContent = 
`Future Self successfully prevented Past's plan to ${pastChoice} by using ${futureChoice}!`;
}

document.getElementById("result").style.color = winner === 'past' ? '#ff6b6b' : '#00f5d4';
updateScores();

if (pastScore >= 5 || futureScore >= 5) {
endGame();
} else {
setTimeout(() => {
currentScenario = (currentScenario + 1) % scenarios.length;
currentTurn = 'past';
pastChoice = null;
futureChoice = null;
document.getElementById("result").textContent = '';
updateStory();
}, 3000);
}
}

function endGame() {
const gameOver = document.getElementById("game-over");
gameOver.style.display = "block";
document.getElementById("choices").style.display = "none";

if (pastScore >= 5) {
gameOver.innerHTML = `
<div style="color: #ff6b6b">Past Self Wins! The procrastination is strong with this one...</div>
<button class="restart-button" onclick="restartGame()">Play Again</button>
`;
} else {
gameOver.innerHTML = `
<div style="color: #00f5d4">Future Self Wins! Your future is now secured!</div>
<button class="restart-button" onclick="restartGame()">Play Again</button>
`;
}
}

function restartGame() {
currentScenario = 0;
pastScore = 0;
futureScore = 0;
currentTurn = 'past';
pastChoice = null;
futureChoice = null;
document.getElementById("game-over").style.display = "none";
document.getElementById("choices").style.display = "block";
document.getElementById("result").textContent = '';
updateScores();
updateStory();
}

function makeChoice(choice) {
if (currentTurn === 'past') {
pastChoice = choice;
currentTurn = 'future';
} else {
futureChoice = choice;
determineRoundWinner();
}
animateImage(itemImageDictionary[choice]);
updateStory();
}

function updateStory() {
const scenario = scenarios[currentScenario];
const turnIndicator = document.getElementById("turn-indicator");
const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

storyText.textContent = scenario.text;
turnIndicator.textContent = `${currentTurn === 'past' ? 'Past' : 'Future'} Self's Turn`;
turnIndicator.style.color = currentTurn === 'past' ? '#ff6b6b' : '#00f5d4';

choices.innerHTML = '';
choices.className = `choices ${currentTurn}-turn`;

const currentChoices = currentTurn === 'past' ? scenario.pastChoices : scenario.futureChoices;
currentChoices.forEach(choice => {
const button = document.createElement('button');
button.textContent = choice;
button.onclick = () => makeChoice(choice);
choices.appendChild(button);
});
}

updateStory(); // Initialize game

function animateImage(imagePath) {
            const img = document.getElementById('animatedImage');
            img.src = imagePath;

            img.onload = function() {
                // Positions: 0 = top, 1 = right, 2 = bottom, 3 = left
                const positions = ['top', 'right', 'bottom', 'left'];
                let startPos = Math.floor(Math.random() * 4);
                let endPos = (startPos + 2) % 4; // Opposite direction

                // Set initial position
                function setStartPosition() {
                    const windowWidth = window.innerWidth - img.width;
                    const windowHeight = window.innerHeight - img.height;

                    switch(positions[startPos]) {
                        case 'top':
                            img.style.top = '-100px';
                            img.style.left = Math.random() * windowWidth + 'px';
                            break;
                        case 'right':
                            img.style.top = Math.random() * windowHeight + 'px';
                            img.style.left = windowWidth + 100 + 'px';
                            break;
                        case 'bottom':
                            img.style.top = windowHeight + 100 + 'px';
                            img.style.left = Math.random() * windowWidth + 'px';
                            break;
                        case 'left':
                            img.style.top = Math.random() * windowHeight + 'px';
                            img.style.left = '-100px';
                            break;
                    }
                }

                // Set end position
                function setEndPosition() {
                    const windowWidth = window.innerWidth - img.width;
                    const windowHeight = window.innerHeight - img.height;

                    // First move to center
                    setTimeout(() => {
                        img.style.top = (windowHeight / 2) + 'px';
                        img.style.left = (windowWidth / 2) + 'px';
                    }, 0);

                    // Then move to exit position
                    setTimeout(() => {
                        switch(positions[endPos]) {
                            case 'top':
                                img.style.top = '-100px';
                                img.style.left = Math.random() * windowWidth + 'px';
                                break;
                            case 'right':
                                img.style.top = Math.random() * windowHeight + 'px';
                                img.style.left = windowWidth + 100 + 'px';
                                break;
                            case 'bottom':
                                img.style.top = windowHeight + 100 + 'px';
                                img.style.left = Math.random() * windowWidth + 'px';
                                break;
                            case 'left':
                                img.style.top = Math.random() * windowHeight + 'px';
                                img.style.left = '-100px';
                                break;
                        }
                    }, 2000);
                }

                // Start the animation
                setStartPosition();
                setEndPosition();
            };
        }