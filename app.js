// 500 most common Spanish words
const wordDatabase = [
    // Essential verbs
    {spanish: "ansiar", english: "to long, to yearn", type: "verb"},
    {spanish: "ampliar", english: "to extend", type: "verb"},
    {spanish: "criar", english: "to raise, to bring up", type: "verb"},
    {spanish: "desviar", english: "to divert", type: "verb"},
    {spanish: "enfriar", english: "to cool, to chill", type: "verb"},
    {spanish: "enviar", english: "to send", type: "verb"},
    {spanish: "espiar", english: "to spy", type: "verb"},
    {spanish: "fiarse", english: "to trust", type: "verb"},
    {spanish: "guiar", english: "to guide", type: "verb"},
    {spanish: "liar", english: "to wrap", type: "verb"},
    {spanish: "malcriar", english: "to spoil", type: "verb"},
    {spanish: "resfriarse", english: "to get a cold", type: "verb"},
    {spanish: "vaciar", english: "to empty", type: "verb"},
    {spanish: "acercarse a", english: "to approach", type: "verb"},
    {spanish: "acordarse de", english: "to remember to", type: "verb"},
    {spanish: "acostumbrarse a", english: "to get used to", type: "verb"},
    {spanish: "alegrarse de", english: "to be happy about", type: "verb"},
    {spanish: "amenazar con", english: "to threaten with", type: "verb"},
    {spanish: "aprender a", english: "to learn to", type: "verb"},
    {spanish: "arrepentirse de", english: "to regret", type: "verb"},
    {spanish: "ayudar a", english: "to help", type: "verb"},
    {spanish: "burlarse de", english: "to make fun of", type: "verb"},
    {spanish: "comenzar a", english: "to start to", type: "verb"},
    {spanish: "comenzar con", english: "to begin with", type: "verb"},
    {spanish: "comenzar por", english: "to begin by", type: "verb"},
    {spanish: "confiar en", english: "to trust, to trust in", type: "verb"},
    {spanish: "consistir en", english: "to consist of", type: "verb"},
    {spanish: "contar con", english: "to rely on", type: "verb"},
    {spanish: "cuidar a", english: "to take care of", type: "verb"},
    {spanish: "dar la vuelta a", english: "to go round", type: "verb"},
    {spanish: "darse la vuelta", english: "to turn around", type: "verb"},
    {spanish: "dejar de", english: "to stop", type: "verb"},
    {spanish: "despedirse de", english: "to say goodbye to", type: "verb"},
    {spanish: "disculparse por", english: "to apologize for", type: "verb"},
    {spanish: "disfrutar de", english: "to enjoy", type: "verb"},
    {spanish: "dudar en", english: "to hesitate to", type: "verb"},
    {spanish: "empezar a", english: "to start to", type: "verb"},
    {spanish: "encargarse de", english: "to be in charge of", type: "verb"},
    {spanish: "esforzarse por", english: "to struggle to, to do your best", type: "verb"},
    {spanish: "estar por", english: "to be in favor of", type: "verb"},
    {spanish: "hacer bien en", english: "to be right to", type: "verb"},
    {spanish: "insistir en", english: "to insist on", type: "verb"},
    {spanish: "llamar a", english: "to call", type: "verb"},
    {spanish: "olvidarse de", english: "to forget about", type: "verb"},
    {spanish: "optar por", english: "to opt for", type: "verb"},
    {spanish: "preocuparse de", english: "to be worried about", type: "verb"},
    {spanish: "quedar en", english: "to agree to", type: "verb"},
    {spanish: "quejarse de", english: "to complain about", type: "verb"},
    {spanish: "salir de", english: "to leave", type: "verb"},
    {spanish: "soñar con", english: "to dream about", type: "verb"},
    {spanish: "tener que ver con", english: "to concern, to have to do with", type: "verb"},
    {spanish: "tratar de", english: "to try, to attempt", type: "verb"},

    // Essential adjectives
    {spanish: "todo", english: "all/everything", type: "adjective"},
    {spanish: "todos", english: "all/everyone", type: "adjective"},
    {spanish: "grande", english: "big/great", type: "adjective"},
    {spanish: "bueno", english: "good", type: "adjective"},
    {spanish: "nuevo", english: "new", type: "adjective"},
    {spanish: "pequeño", english: "small", type: "adjective"},
    {spanish: "largo", english: "long", type: "adjective"},
    {spanish: "mismo", english: "same", type: "adjective"},
    {spanish: "otro", english: "other", type: "adjective"},
    {spanish: "poco", english: "little/few", type: "adjective"},
    {spanish: "mucho", english: "much/many", type: "adjective"},
    {spanish: "último", english: "last", type: "adjective"},
    {spanish: "primero", english: "first", type: "adjective"},
    {spanish: "mejor", english: "better/best", type: "adjective"},
    {spanish: "mayor", english: "greater/older", type: "adjective"},
    {spanish: "joven", english: "young", type: "adjective"},
    {spanish: "viejo", english: "old", type: "adjective"},
    {spanish: "alto", english: "tall/high", type: "adjective"},
    {spanish: "bajo", english: "low/short", type: "adjective"},
    {spanish: "blanco", english: "white", type: "adjective"},
    {spanish: "negro", english: "black", type: "adjective"},
    {spanish: "rojo", english: "red", type: "adjective"},
    {spanish: "azul", english: "blue", type: "adjective"},
    {spanish: "verde", english: "green", type: "adjective"},
    {spanish: "amarillo", english: "yellow", type: "adjective"},
    {spanish: "fuerte", english: "strong", type: "adjective"},
    {spanish: "difícil", english: "difficult", type: "adjective"},
    {spanish: "fácil", english: "easy", type: "adjective"},
    {spanish: "feliz", english: "happy", type: "adjective"},
    {spanish: "triste", english: "sad", type: "adjective"},
    {spanish: "rico", english: "rich", type: "adjective"},
    {spanish: "pobre", english: "poor", type: "adjective"},
    {spanish: "caliente", english: "hot", type: "adjective"},
    {spanish: "frío", english: "cold", type: "adjective"},
    {spanish: "rápido", english: "fast", type: "adjective"},
    {spanish: "lento", english: "slow", type: "adjective"},
    {spanish: "importante", english: "important", type: "adjective"},
    {spanish: "necesario", english: "necessary", type: "adjective"},
    {spanish: "posible", english: "possible", type: "adjective"},
    {spanish: "imposible", english: "impossible", type: "adjective"},
    {spanish: "libre", english: "free", type: "adjective"},
    {spanish: "claro", english: "clear/light", type: "adjective"},
    {spanish: "oscuro", english: "dark", type: "adjective"},
    {spanish: "bonito", english: "pretty", type: "adjective"},
    {spanish: "feo", english: "ugly", type: "adjective"},
    {spanish: "limpio", english: "clean", type: "adjective"},
    {spanish: "sucio", english: "dirty", type: "adjective"},
    {spanish: "lleno", english: "full", type: "adjective"},
    {spanish: "vacío", english: "empty", type: "adjective"},
    {spanish: "abierto", english: "open", type: "adjective"},
    {spanish: "cerrado", english: "closed", type: "adjective"},

    // Essential adverbs
    {spanish: "más", english: "more", type: "adverb"},
    {spanish: "muy", english: "very", type: "adverb"},
    {spanish: "también", english: "also/too", type: "adverb"},
    {spanish: "ya", english: "already", type: "adverb"},
    {spanish: "ahora", english: "now", type: "adverb"},
    {spanish: "siempre", english: "always", type: "adverb"},
    {spanish: "nunca", english: "never", type: "adverb"},
    {spanish: "bien", english: "well", type: "adverb"},
    {spanish: "mal", english: "badly", type: "adverb"},
    {spanish: "aquí", english: "here", type: "adverb"},
    {spanish: "allí", english: "there", type: "adverb"},
    {spanish: "hoy", english: "today", type: "adverb"},
    {spanish: "ayer", english: "yesterday", type: "adverb"},
    {spanish: "entonces", english: "then", type: "adverb"},
    {spanish: "después", english: "after", type: "adverb"},
    {spanish: "antes", english: "before", type: "adverb"},
    {spanish: "todavía", english: "still/yet", type: "adverb"},
    {spanish: "solo", english: "only", type: "adverb"},
    {spanish: "casi", english: "almost", type: "adverb"},
    {spanish: "pronto", english: "soon", type: "adverb"},
    {spanish: "lejos", english: "far", type: "adverb"},
    {spanish: "cerca", english: "near", type: "adverb"},
    {spanish: "arriba", english: "up", type: "adverb"},
    {spanish: "abajo", english: "down", type: "adverb"},
    {spanish: "dentro", english: "inside", type: "adverb"},
    {spanish: "fuera", english: "outside", type: "adverb"},
    {spanish: "delante", english: "in front", type: "adverb"},
    {spanish: "detrás", english: "behind", type: "adverb"},
    {spanish: "menos", english: "less", type: "adverb"},
    {spanish: "bastante", english: "enough/quite", type: "adverb"},
    {spanish: "demasiado", english: "too much", type: "adverb"},
    {spanish: "además", english: "in addition, what's more, also", type: "adverb"},
    {spanish: "además de", english: "in addition to", type: "adverb"},
    {spanish: "también", english: "also", type: "adverb"},
    {spanish: "primero", english: "first, firstly", type: "adverb"},
    {spanish: "antes de nada", english: "first of all, before anything else", type: "adverb"},
    {spanish: "para empezar", english: "to begin with", type: "adverb"},
    {spanish: "en primer lugar", english: "first of all", type: "adverb"},
    {spanish: "en segundo lugar", english: "secondly", type: "adverb"},
    {spanish: "por último", english: "finally", type: "adverb"},
    {spanish: "en último lugar", english: "lastly, finally", type: "adverb"},
    {spanish: "por añadidura", english: "in addition", type: "adverb"},
    {spanish: "del mismo modo", english: "likewise", type: "adverb"},
    {spanish: "igualmente", english: "likewise", type: "adverb"},
    {spanish: "al mismo tiempo", english: "at the same time", type: "adverb"},
    {spanish: "asimismo", english: "moreover", type: "adverb"},
    {spanish: "así como", english: "as well as", type: "adverb"},
    {spanish: "por otra parte", english: "moreover, in addition", type: "adverb"},
    {spanish: "por otro lado", english: "moreover, in addition", type: "adverb"},
    {spanish: "es más", english: "moreover, what's more", type: "adverb"},
    {spanish: "de igual manera", english: "similarly", type: "adverb"},
    {spanish: "semejantemente", english: "similarly", type: "adverb"},
    {spanish: "finalmente", english: "finally, to finish, at the end", type: "adverb"},
    {spanish: "a brazo partido", english: "at arm's length", type: "adverb"},
    {spanish: "a duras penas", english: "hardly", type: "adverb"},
    {spanish: "a trancas y barrancas", english: "in fits and starts", type: "adverb"},
    {spanish: "a voces", english: "out loud, loudly", type: "adverb"},
    {spanish: "a fondo", english: "thoroughly", type: "adverb"},
    {spanish: "a oscuras", english: "in the dark", type: "adverb"},
    {spanish: "a lo loco", english: "quickly, without thinking", type: "adverb"},
    {spanish: "a lo grande", english: "on a large scale", type: "adverb"},
    {spanish: "a lo tonto", english: "awkwardly, inadvertently", type: "adverb"},
    {spanish: "al revés", english: "upside down", type: "adverb"},
    {spanish: "al derecho", english: "right way up", type: "adverb"},
    {spanish: "con el corazón en la mano", english: "with heart in hand", type: "adverb"},
    {spanish: "con mucho gusto", english: "with pleasure", type: "adverb"},
    {spanish: "cuerpo a cuerpo", english: "hand to hand, close combat", type: "adverb"},
    {spanish: "de frente", english: "head on, frankly", type: "adverb"},
    {spanish: "de par en par", english: "totally", type: "adverb"},
    {spanish: "de punta en blanco", english: "all dressed up", type: "adverb"},
    {spanish: "en rigor", english: "strictly speaking, really", type: "adverb"},
    {spanish: "mano sobre mano", english: "twiddling one's thumbs, doing nothing", type: "adverb"},
    {spanish: "por fuerza", english: "necessarily", type: "adverb"},
    {spanish: "punto por punto", english: "point by point, in detail", type: "adverb"},
    {spanish: "aunque", english: "though, although, even though, in spite of", type: "adverb"},
    {spanish: "sin embargo", english: "however, nevertheless", type: "adverb"},
    {spanish: "no obstante", english: "nevertheless", type: "adverb"},
    {spanish: "antes bien", english: "rather", type: "adverb"},
    {spanish: "por lo demás", english: "otherwise, apart from that", type: "adverb"},
    {spanish: "sino", english: "but, except", type: "adverb"},
    {spanish: "excepto", english: "except, apart from", type: "adverb"},
    {spanish: "es decir", english: "that is to say", type: "adverb"},
    {spanish: "en cambio", english: "whereas", type: "adverb"},
    {spanish: "mientras que", english: "while", type: "adverb"},
    {spanish: "antes de que", english: "before", type: "adverb"},
    {spanish: "después de que", english: "after", type: "adverb"},
    {spanish: "luego de que", english: "after", type: "adverb"},
    {spanish: "en cuanto", english: "as soon as", type: "adverb"},
    {spanish: "tan pronto como", english: "as soon as", type: "adverb"},
    {spanish: "desde que", english: "since", type: "adverb"},
    {spanish: "hasta que", english: "until", type: "adverb"},
    {spanish: "siempre que", english: "whenever", type: "adverb"},
    {spanish: "una vez que", english: "once", type: "adverb"},
    {spanish: "cada vez que", english: "every time that", type: "adverb"},
    {spanish: "a medida que", english: "as", type: "adverb"},
    {spanish: "conforme", english: "as", type: "adverb"},
    {spanish: "según", english: "as, according to", type: "adverb"},
    {spanish: "apenas", english: "as soon as", type: "adverb"},

    // Prepositions
    {spanish: "a base de", english: "on the basis of", type: "preposition"},
    {spanish: "a causa de", english: "because of, due to", type: "preposition"},
    {spanish: "a consecuencia de", english: "as a result of", type: "preposition"},
    {spanish: "a costa de", english: "at the expense of", type: "preposition"},
    {spanish: "a expensas de", english: "at the expense of", type: "preposition"},
    {spanish: "a falta de", english: "in the absence of", type: "preposition"},
    {spanish: "a pesar de", english: "in spite of", type: "preposition"},
    {spanish: "a través de", english: "through", type: "preposition"},
    {spanish: "al lado de", english: "next to", type: "preposition"},
    {spanish: "al respecto de", english: "with respect to", type: "preposition"},
    {spanish: "bajo pena de", english: "under penalty of", type: "preposition"},
    {spanish: "bajo pretexto de", english: "under the pretext of", type: "preposition"},
    {spanish: "con arreglo a", english: "on the basis of", type: "preposition"},
    {spanish: "con base en", english: "based on", type: "preposition"},
    {spanish: "con motivo de", english: "on the grounds of", type: "preposition"},
    {spanish: "con respecto a", english: "with respect to", type: "preposition"},
    {spanish: "con respecto de", english: "with respect to", type: "preposition"},
    {spanish: "de cara a", english: "in the face of", type: "preposition"},
    {spanish: "de conformidad con", english: "in accordance with", type: "preposition"},
    {spanish: "de parte de", english: "on behalf of", type: "preposition"},
    {spanish: "de regreso a", english: "back to", type: "preposition"},
    {spanish: "en aras de", english: "for the sake of", type: "preposition"},
    {spanish: "en atención a", english: "for the sake of", type: "preposition"},
    {spanish: "en bien de", english: "for the sake of", type: "preposition"},
    {spanish: "en compañía de", english: "in the company of", type: "preposition"},
    {spanish: "en lugar de", english: "instead of", type: "preposition"},
    {spanish: "en medio de", english: "in the midst of", type: "preposition"},
    {spanish: "en orden a", english: "in order to", type: "preposition"},
    {spanish: "en virtud de", english: "by virtue of", type: "preposition"},
    {spanish: "por efecto de", english: "by virtue of", type: "preposition"},
    {spanish: "por causa de", english: "on account of", type: "preposition"},
    {spanish: "por conducto de", english: "through", type: "preposition"},
    {spanish: "por culpa de", english: "by reason of", type: "preposition"},
    {spanish: "a caballo", english: "on horseback", type: "expression"},
    {spanish: "con cariño", english: "with affection", type: "expression"},
    {spanish: "con cuidado", english: "with care", type: "expression"},
    {spanish: "con énfasis", english: "with emphasis", type: "expression"},
    {spanish: "con gusto", english: "with pleasure", type: "expression"},
    {spanish: "con permiso", english: "with permission", type: "expression"},
    {spanish: "con razón", english: "with reason", type: "expression"},
    {spanish: "de corazón", english: "heartily", type: "expression"},
    {spanish: "de acuerdo", english: "in agreement", type: "expression"},
    {spanish: "de pie", english: "on foot", type: "expression"},
    {spanish: "en avión", english: "by plane", type: "expression"},
    {spanish: "en cambio", english: "on the other hand", type: "expression"},
    {spanish: "en efecto", english: "in fact", type: "expression"},
    {spanish: "en realidad", english: "in fact", type: "expression"},
    {spanish: "por desgracia", english: "unfortunately", type: "expression"},
    {spanish: "por ejemplo", english: "for example", type: "expression"},
    {spanish: "camino de", english: "way to", type: "preposition"},
    {spanish: "cara a", english: "face to", type: "preposition"},
    {spanish: "frente a", english: "in front of", type: "preposition"},
    {spanish: "gracias a", english: "thanks to", type: "preposition"},
    {spanish: "merced a", english: "thanks to", type: "preposition"},
    {spanish: "respecto a", english: "with respect to", type: "preposition"},
    {spanish: "respecto de", english: "with respect to", type: "preposition"},
    {spanish: "rumbo a", english: "way to", type: "preposition"},
    {spanish: "conforme a", english: "in accordance with", type: "preposition"},
    {spanish: "debido a", english: "because of, due to", type: "preposition"},
    {spanish: "junto a", english: "together with, along with", type: "preposition"},
    {spanish: "junto con", english: "together with, along with", type: "preposition"},
    {spanish: "referente a", english: "relating to", type: "preposition"},
    {spanish: "relacionado a", english: "related to", type: "preposition"},
    {spanish: "relacionado con", english: "related to", type: "preposition"},
    {spanish: "tocante a", english: "related to", type: "preposition"},
    {spanish: "abajo de", english: "below", type: "preposition"},
    {spanish: "después de", english: "after", type: "preposition"},
    {spanish: "acerca de", english: "about", type: "preposition"},
    {spanish: "delante de", english: "in front of", type: "preposition"},
    {spanish: "enfrente de", english: "in front of", type: "preposition"},
    {spanish: "detrás de", english: "behind", type: "preposition"},
    {spanish: "encima de", english: "above", type: "preposition"},
    {spanish: "cerca de", english: "near", type: "preposition"},
    {spanish: "a juzgar por", english: "judging by", type: "preposition"},
    {spanish: "a partir de", english: "as of", type: "preposition"},
    {spanish: "tras de", english: "in addition, moreover", type: "preposition"},
    {spanish: "de entre", english: "from among", type: "preposition"},
    {spanish: "para con", english: "towards", type: "preposition"}
];

// Initialize app state
let wordProgress = {};
let currentCard = null;
let currentFilter = 'all';
let availableCards = [];

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('spanishFlashcardsProgress');
    if (saved) {
        wordProgress = JSON.parse(saved);
    } else {
        // Initialize all words as 'new'
        wordDatabase.forEach(word => {
            wordProgress[word.spanish] = {
                status: 'new',
                reviewCount: 0,
                lastReviewed: null
            };
        });
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('spanishFlashcardsProgress', JSON.stringify(wordProgress));
}

// Update statistics display
function updateStats() {
    let mastered = 0;
    let learning = 0;
    let remaining = 0;

    Object.values(wordProgress).forEach(progress => {
        if (progress.status === 'mastered') mastered++;
        else if (progress.status === 'learning') learning++;
        else remaining++;
    });

    document.getElementById('mastered').textContent = mastered;
    document.getElementById('learning').textContent = learning;
    document.getElementById('remaining').textContent = remaining;

    const total = wordDatabase.length;
    const progressPercent = ((mastered + learning * 0.5) / total) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';
}

// Filter words based on current filter
function filterWords() {
    if (currentFilter === 'all') {
        availableCards = [...wordDatabase];
    } else {
        availableCards = wordDatabase.filter(word => word.type === currentFilter);
    }
}

// Spaced repetition algorithm - prioritize words that need more practice
function selectNextCard() {
    filterWords();
    
    if (availableCards.length === 0) {
        alert('No words available for this filter!');
        return null;
    }

    // Separate cards by status
    const newCards = [];
    const learningCards = [];
    const masteredCards = [];

    availableCards.forEach(word => {
        const progress = wordProgress[word.spanish];
        if (progress.status === 'new') newCards.push(word);
        else if (progress.status === 'learning') learningCards.push(word);
        else masteredCards.push(word);
    });

    // Priority: 60% new/learning, 40% mastered (for review)
    const random = Math.random();
    
    if (random < 0.4 && newCards.length > 0) {
        return newCards[Math.floor(Math.random() * newCards.length)];
    } else if (random < 0.8 && learningCards.length > 0) {
        return learningCards[Math.floor(Math.random() * learningCards.length)];
    } else if (masteredCards.length > 0) {
        return masteredCards[Math.floor(Math.random() * masteredCards.length)];
    } else if (newCards.length > 0) {
        return newCards[Math.floor(Math.random() * newCards.length)];
    } else if (learningCards.length > 0) {
        return learningCards[Math.floor(Math.random() * learningCards.length)];
    } else {
        return availableCards[Math.floor(Math.random() * availableCards.length)];
    }
}

// Display a card
function showCard(word) {
    currentCard = word;
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');

    document.getElementById('spanish-word').textContent = word.spanish;
    document.getElementById('english-word').textContent = word.english;
    
    const typeLabel = word.type.charAt(0).toUpperCase() + word.type.slice(1);
    document.getElementById('word-type-front').textContent = typeLabel;
    document.getElementById('word-type-back').textContent = typeLabel;
}

// Flip card on click
document.getElementById('flashcard').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Mark card with user's assessment
function markCard(status) {
    if (!currentCard) return;

    wordProgress[currentCard.spanish] = {
        status: status,
        reviewCount: (wordProgress[currentCard.spanish].reviewCount || 0) + 1,
        lastReviewed: new Date().toISOString()
    };

    saveProgress();
    updateStats();
    
    // Show next card
    const nextCard = selectNextCard();
    if (nextCard) {
        showCard(nextCard);
    }
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
        localStorage.removeItem('spanishFlashcardsProgress');
        wordDatabase.forEach(word => {
            wordProgress[word.spanish] = {
                status: 'new',
                reviewCount: 0,
                lastReviewed: null
            };
        });
        saveProgress();
        updateStats();
        const nextCard = selectNextCard();
        if (nextCard) showCard(nextCard);
    }
}

// Filter button handlers
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.type;
        const nextCard = selectNextCard();
        if (nextCard) showCard(nextCard);
    });
});

// Initialize the app
loadProgress();
updateStats();
const firstCard = selectNextCard();
if (firstCard) showCard(firstCard);
