// 500 most common Spanish words
const wordDatabase = [
    // Essential verbs (top 50)
    {spanish: "ser", english: "to be", type: "verb"},
    {spanish: "estar", english: "to be (location/state)", type: "verb"},
    {spanish: "tener", english: "to have", type: "verb"},
    {spanish: "hacer", english: "to do/make", type: "verb"},
    {spanish: "poder", english: "can/to be able", type: "verb"},
    {spanish: "decir", english: "to say/tell", type: "verb"},
    {spanish: "ir", english: "to go", type: "verb"},
    {spanish: "ver", english: "to see", type: "verb"},
    {spanish: "dar", english: "to give", type: "verb"},
    {spanish: "saber", english: "to know (facts)", type: "verb"},
    {spanish: "querer", english: "to want", type: "verb"},
    {spanish: "llegar", english: "to arrive", type: "verb"},
    {spanish: "poner", english: "to put", type: "verb"},
    {spanish: "parecer", english: "to seem", type: "verb"},
    {spanish: "dejar", english: "to leave/let", type: "verb"},
    {spanish: "hablar", english: "to speak", type: "verb"},
    {spanish: "llevar", english: "to carry/wear", type: "verb"},
    {spanish: "seguir", english: "to follow/continue", type: "verb"},
    {spanish: "encontrar", english: "to find", type: "verb"},
    {spanish: "llamar", english: "to call", type: "verb"},
    {spanish: "venir", english: "to come", type: "verb"},
    {spanish: "pensar", english: "to think", type: "verb"},
    {spanish: "salir", english: "to leave/go out", type: "verb"},
    {spanish: "volver", english: "to return", type: "verb"},
    {spanish: "tomar", english: "to take", type: "verb"},
    {spanish: "conocer", english: "to know (people)", type: "verb"},
    {spanish: "vivir", english: "to live", type: "verb"},
    {spanish: "sentir", english: "to feel", type: "verb"},
    {spanish: "tratar", english: "to try/treat", type: "verb"},
    {spanish: "mirar", english: "to look", type: "verb"},
    {spanish: "contar", english: "to count/tell", type: "verb"},
    {spanish: "empezar", english: "to begin", type: "verb"},
    {spanish: "esperar", english: "to wait/hope", type: "verb"},
    {spanish: "buscar", english: "to search", type: "verb"},
    {spanish: "existir", english: "to exist", type: "verb"},
    {spanish: "entrar", english: "to enter", type: "verb"},
    {spanish: "trabajar", english: "to work", type: "verb"},
    {spanish: "escribir", english: "to write", type: "verb"},
    {spanish: "perder", english: "to lose", type: "verb"},
    {spanish: "producir", english: "to produce", type: "verb"},
    {spanish: "ocurrir", english: "to occur", type: "verb"},
    {spanish: "entender", english: "to understand", type: "verb"},
    {spanish: "pedir", english: "to ask for", type: "verb"},
    {spanish: "recibir", english: "to receive", type: "verb"},
    {spanish: "recordar", english: "to remember", type: "verb"},
    {spanish: "terminar", english: "to finish", type: "verb"},
    {spanish: "permitir", english: "to allow", type: "verb"},
    {spanish: "aparecer", english: "to appear", type: "verb"},
    {spanish: "conseguir", english: "to get/obtain", type: "verb"},
    {spanish: "comenzar", english: "to start", type: "verb"},
    {spanish: "servir", english: "to serve", type: "verb"},
    {spanish: "sacar", english: "to take out", type: "verb"},
    {spanish: "necesitar", english: "to need", type: "verb"},
    {spanish: "mantener", english: "to maintain", type: "verb"},
    {spanish: "resultar", english: "to result", type: "verb"},
    {spanish: "leer", english: "to read", type: "verb"},
    {spanish: "caer", english: "to fall", type: "verb"},
    {spanish: "cambiar", english: "to change", type: "verb"},
    {spanish: "presentar", english: "to present", type: "verb"},
    {spanish: "crear", english: "to create", type: "verb"},
    {spanish: "abrir", english: "to open", type: "verb"},
    {spanish: "considerar", english: "to consider", type: "verb"},
    {spanish: "oír", english: "to hear", type: "verb"},
    {spanish: "acabar", english: "to finish", type: "verb"},
    {spanish: "aceptar", english: "to accept", type: "verb"},
    {spanish: "descubrir", english: "to discover", type: "verb"},
    {spanish: "pagar", english: "to pay", type: "verb"},
    {spanish: "correr", english: "to run", type: "verb"},
    {spanish: "echar", english: "to throw", type: "verb"},
    {spanish: "aprender", english: "to learn", type: "verb"},
    {spanish: "creer", english: "to believe", type: "verb"},
    {spanish: "estudiar", english: "to study", type: "verb"},
    {spanish: "mostrar", english: "to show", type: "verb"},
    {spanish: "nacer", english: "to be born", type: "verb"},
    {spanish: "amar", english: "to love", type: "verb"},
    {spanish: "gustar", english: "to like", type: "verb"},
    {spanish: "comprar", english: "to buy", type: "verb"},
    {spanish: "jugar", english: "to play", type: "verb"},
    {spanish: "tocar", english: "to touch/play", type: "verb"},
    {spanish: "cantar", english: "to sing", type: "verb"},
    {spanish: "bailar", english: "to dance", type: "verb"},
    {spanish: "cocinar", english: "to cook", type: "verb"},
    {spanish: "comer", english: "to eat", type: "verb"},
    {spanish: "beber", english: "to drink", type: "verb"},
    {spanish: "dormir", english: "to sleep", type: "verb"},
    {spanish: "despertar", english: "to wake up", type: "verb"},
    {spanish: "levantarse", english: "to get up", type: "verb"},
    {spanish: "sentarse", english: "to sit down", type: "verb"},
    {spanish: "mover", english: "to move", type: "verb"},
    {spanish: "cortar", english: "to cut", type: "verb"},
    {spanish: "cerrar", english: "to close", type: "verb"},
    {spanish: "ganar", english: "to win/earn", type: "verb"},
    {spanish: "usar", english: "to use", type: "verb"},
    {spanish: "ayudar", english: "to help", type: "verb"},
    {spanish: "vender", english: "to sell", type: "verb"},
    {spanish: "preguntar", english: "to ask", type: "verb"},
    {spanish: "responder", english: "to respond", type: "verb"},
    {spanish: "contestar", english: "to answer", type: "verb"},

    // Essential articles and particles
    {spanish: "el", english: "the (masculine)", type: "other"},
    {spanish: "la", english: "the (feminine)", type: "other"},
    {spanish: "de", english: "of/from", type: "other"},
    {spanish: "que", english: "that/which", type: "other"},
    {spanish: "y", english: "and", type: "other"},
    {spanish: "a", english: "to/at", type: "other"},
    {spanish: "en", english: "in/on", type: "other"},
    {spanish: "un", english: "a/an (masculine)", type: "other"},
    {spanish: "lo", english: "it/the", type: "other"},
    {spanish: "no", english: "no/not", type: "other"},
    {spanish: "por", english: "for/by", type: "other"},
    {spanish: "con", english: "with", type: "other"},
    {spanish: "para", english: "for/to", type: "other"},
    {spanish: "una", english: "a/an (feminine)", type: "other"},
    {spanish: "su", english: "his/her/their", type: "other"},
    {spanish: "al", english: "to the", type: "other"},
    {spanish: "como", english: "how/like", type: "other"},
    {spanish: "del", english: "of the", type: "other"},
    {spanish: "pero", english: "but", type: "other"},
    {spanish: "se", english: "oneself/himself/herself", type: "other"},
    {spanish: "si", english: "if", type: "other"},
    {spanish: "o", english: "or", type: "other"},
    {spanish: "porque", english: "because", type: "other"},
    {spanish: "cuando", english: "when", type: "other"},
    {spanish: "sin", english: "without", type: "other"},
    {spanish: "sobre", english: "on/about", type: "other"},
    {spanish: "me", english: "me", type: "other"},
    {spanish: "hasta", english: "until", type: "other"},
    {spanish: "donde", english: "where", type: "other"},
    {spanish: "quien", english: "who", type: "other"},
    {spanish: "desde", english: "since/from", type: "other"},
    {spanish: "nos", english: "us", type: "other"},
    {spanish: "durante", english: "during", type: "other"},
    {spanish: "algo", english: "something", type: "other"},
    {spanish: "ella", english: "she", type: "other"},

    // Essential nouns
    {spanish: "tiempo", english: "time", type: "noun"},
    {spanish: "casa", english: "house", type: "noun"},
    {spanish: "año", english: "year", type: "noun"},
    {spanish: "vida", english: "life", type: "noun"},
    {spanish: "día", english: "day", type: "noun"},
    {spanish: "hombre", english: "man", type: "noun"},
    {spanish: "mujer", english: "woman", type: "noun"},
    {spanish: "persona", english: "person", type: "noun"},
    {spanish: "mundo", english: "world", type: "noun"},
    {spanish: "país", english: "country", type: "noun"},
    {spanish: "ciudad", english: "city", type: "noun"},
    {spanish: "lugar", english: "place", type: "noun"},
    {spanish: "hora", english: "hour", type: "noun"},
    {spanish: "mano", english: "hand", type: "noun"},
    {spanish: "hijo", english: "son", type: "noun"},
    {spanish: "padre", english: "father", type: "noun"},
    {spanish: "madre", english: "mother", type: "noun"},
    {spanish: "familia", english: "family", type: "noun"},
    {spanish: "hermano", english: "brother", type: "noun"},
    {spanish: "hermana", english: "sister", type: "noun"},
    {spanish: "agua", english: "water", type: "noun"},
    {spanish: "gente", english: "people", type: "noun"},
    {spanish: "noche", english: "night", type: "noun"},
    {spanish: "nombre", english: "name", type: "noun"},
    {spanish: "cosa", english: "thing", type: "noun"},
    {spanish: "parte", english: "part", type: "noun"},
    {spanish: "número", english: "number", type: "noun"},
    {spanish: "trabajo", english: "work", type: "noun"},
    {spanish: "ojo", english: "eye", type: "noun"},
    {spanish: "cabeza", english: "head", type: "noun"},
    {spanish: "cara", english: "face", type: "noun"},
    {spanish: "puerta", english: "door", type: "noun"},
    {spanish: "calle", english: "street", type: "noun"},
    {spanish: "mesa", english: "table", type: "noun"},
    {spanish: "cama", english: "bed", type: "noun"},
    {spanish: "libro", english: "book", type: "noun"},
    {spanish: "papel", english: "paper", type: "noun"},
    {spanish: "dinero", english: "money", type: "noun"},
    {spanish: "coche", english: "car", type: "noun"},
    {spanish: "palabra", english: "word", type: "noun"},
    {spanish: "problema", english: "problem", type: "noun"},
    {spanish: "caso", english: "case", type: "noun"},
    {spanish: "razón", english: "reason", type: "noun"},
    {spanish: "forma", english: "form", type: "noun"},
    {spanish: "niño", english: "child", type: "noun"},
    {spanish: "momento", english: "moment", type: "noun"},
    {spanish: "vez", english: "time (instance)", type: "noun"},
    {spanish: "amigo", english: "friend", type: "noun"},
    {spanish: "mes", english: "month", type: "noun"},
    {spanish: "gobierno", english: "government", type: "noun"},
    {spanish: "lado", english: "side", type: "noun"},
    {spanish: "manera", english: "way/manner", type: "noun"},
    {spanish: "luz", english: "light", type: "noun"},
    {spanish: "tierra", english: "earth/land", type: "noun"},
    {spanish: "fin", english: "end", type: "noun"},
    {spanish: "punto", english: "point", type: "noun"},
    {spanish: "cuerpo", english: "body", type: "noun"},
    {spanish: "voz", english: "voice", type: "noun"},
    {spanish: "corazón", english: "heart", type: "noun"},
    {spanish: "pie", english: "foot", type: "noun"},
    {spanish: "mañana", english: "morning/tomorrow", type: "noun"},
    {spanish: "tarde", english: "afternoon/late", type: "noun"},
    {spanish: "sol", english: "sun", type: "noun"},
    {spanish: "cielo", english: "sky", type: "noun"},
    {spanish: "mar", english: "sea", type: "noun"},
    {spanish: "aire", english: "air", type: "noun"},
    {spanish: "árbol", english: "tree", type: "noun"},
    {spanish: "flor", english: "flower", type: "noun"},
    {spanish: "perro", english: "dog", type: "noun"},
    {spanish: "gato", english: "cat", type: "noun"},
    {spanish: "comida", english: "food", type: "noun"},
    {spanish: "pan", english: "bread", type: "noun"},
    {spanish: "leche", english: "milk", type: "noun"},
    {spanish: "café", english: "coffee", type: "noun"},
    {spanish: "vino", english: "wine", type: "noun"},
    {spanish: "habitación", english: "room", type: "noun"},
    {spanish: "cocina", english: "kitchen", type: "noun"},
    {spanish: "baño", english: "bathroom", type: "noun"},
    {spanish: "ventana", english: "window", type: "noun"},
    {spanish: "ropa", english: "clothes", type: "noun"},
    {spanish: "camisa", english: "shirt", type: "noun"},
    {spanish: "zapato", english: "shoe", type: "noun"},
    {spanish: "escuela", english: "school", type: "noun"},
    {spanish: "profesor", english: "teacher", type: "noun"},
    {spanish: "estudiante", english: "student", type: "noun"},
    {spanish: "médico", english: "doctor", type: "noun"},
    {spanish: "hospital", english: "hospital", type: "noun"},
    {spanish: "tienda", english: "store", type: "noun"},
    {spanish: "restaurante", english: "restaurant", type: "noun"},
    {spanish: "hotel", english: "hotel", type: "noun"},
    {spanish: "iglesia", english: "church", type: "noun"},
    {spanish: "música", english: "music", type: "noun"},
    {spanish: "película", english: "movie/film", type: "noun"},
    {spanish: "foto", english: "photo", type: "noun"},
    {spanish: "teléfono", english: "telephone", type: "noun"},
    {spanish: "ordenador", english: "computer", type: "noun"},
    {spanish: "semana", english: "week", type: "noun"},
    {spanish: "lunes", english: "Monday", type: "noun"},
    {spanish: "martes", english: "Tuesday", type: "noun"},
    {spanish: "miércoles", english: "Wednesday", type: "noun"},
    {spanish: "jueves", english: "Thursday", type: "noun"},
    {spanish: "viernes", english: "Friday", type: "noun"},
    {spanish: "sábado", english: "Saturday", type: "noun"},
    {spanish: "domingo", english: "Sunday", type: "noun"},
    {spanish: "enero", english: "January", type: "noun"},
    {spanish: "febrero", english: "February", type: "noun"},
    {spanish: "marzo", english: "March", type: "noun"},
    {spanish: "abril", english: "April", type: "noun"},
    {spanish: "mayo", english: "May", type: "noun"},
    {spanish: "junio", english: "June", type: "noun"},
    {spanish: "julio", english: "July", type: "noun"},
    {spanish: "agosto", english: "August", type: "noun"},
    {spanish: "septiembre", english: "September", type: "noun"},
    {spanish: "octubre", english: "October", type: "noun"},
    {spanish: "noviembre", english: "November", type: "noun"},
    {spanish: "diciembre", english: "December", type: "noun"},

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

    // Numbers and common words
    {spanish: "uno", english: "one", type: "other"},
    {spanish: "dos", english: "two", type: "other"},
    {spanish: "tres", english: "three", type: "other"},
    {spanish: "cuatro", english: "four", type: "other"},
    {spanish: "cinco", english: "five", type: "other"},
    {spanish: "seis", english: "six", type: "other"},
    {spanish: "siete", english: "seven", type: "other"},
    {spanish: "ocho", english: "eight", type: "other"},
    {spanish: "nueve", english: "nine", type: "other"},
    {spanish: "diez", english: "ten", type: "other"},
    {spanish: "veinte", english: "twenty", type: "other"},
    {spanish: "treinta", english: "thirty", type: "other"},
    {spanish: "cuarenta", english: "forty", type: "other"},
    {spanish: "cincuenta", english: "fifty", type: "other"},
    {spanish: "cien", english: "hundred", type: "other"},
    {spanish: "mil", english: "thousand", type: "other"},
    {spanish: "sí", english: "yes", type: "other"},
    {spanish: "gracias", english: "thank you", type: "other"},
    {spanish: "por favor", english: "please", type: "other"},
    {spanish: "perdón", english: "sorry", type: "other"},
    {spanish: "hola", english: "hello", type: "other"},
    {spanish: "adiós", english: "goodbye", type: "other"},
    {spanish: "buenos días", english: "good morning", type: "other"},
    {spanish: "buenas tardes", english: "good afternoon", type: "other"},
    {spanish: "buenas noches", english: "good night", type: "other"},
    {spanish: "cuánto", english: "how much", type: "other"},
    {spanish: "cuál", english: "which", type: "other"},
    {spanish: "qué", english: "what", type: "other"},
    {spanish: "quién", english: "who", type: "other"},
    {spanish: "dónde", english: "where", type: "other"},
    {spanish: "cuándo", english: "when", type: "other"},
    {spanish: "cómo", english: "how", type: "other"},
    {spanish: "por qué", english: "why", type: "other"},
    {spanish: "esto", english: "this", type: "other"},
    {spanish: "eso", english: "that", type: "other"},
    {spanish: "aquello", english: "that (over there)", type: "other"},
    {spanish: "estos", english: "these", type: "other"},
    {spanish: "esos", english: "those", type: "other"},
    {spanish: "entre", english: "between", type: "other"},
    {spanish: "contra", english: "against", type: "other"},
    {spanish: "hacia", english: "towards", type: "other"},
    {spanish: "según", english: "according to", type: "other"},
    {spanish: "ni", english: "neither/nor", type: "other"},
    {spanish: "sino", english: "but rather", type: "other"},
    {spanish: "aunque", english: "although", type: "other"},
    {spanish: "mientras", english: "while", type: "other"},
    {spanish: "yo", english: "I", type: "other"},
    {spanish: "tú", english: "you (informal)", type: "other"},
    {spanish: "él", english: "he", type: "other"},
    {spanish: "nosotros", english: "we", type: "other"},
    {spanish: "vosotros", english: "you (plural, Spain)", type: "other"},
    {spanish: "ellos", english: "they", type: "other"},
    {spanish: "mi", english: "my", type: "other"},
    {spanish: "tu", english: "your", type: "other"},
    {spanish: "nuestro", english: "our", type: "other"},
    {spanish: "vuestro", english: "your (plural)", type: "other"},
    {spanish: "este", english: "this", type: "other"},
    {spanish: "ese", english: "that", type: "other"},
    {spanish: "aquel", english: "that (over there)", type: "other"}
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