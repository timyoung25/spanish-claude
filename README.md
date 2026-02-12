# Spanish Flashcards PWA

A Progressive Web App for learning the 500 most common Spanish words with interactive flashcards and spaced repetition.

## Features

- 📱 **Installable**: Works as a standalone app on mobile and desktop
- 🔄 **Offline Support**: Works without internet connection after first load
- 💾 **Progress Tracking**: Automatically saves your learning progress
- 🎯 **Spaced Repetition**: Smart algorithm shows words you struggle with more often
- 🏷️ **Filters**: Focus on specific word types (verbs, nouns, adjectives, etc.)
- 📊 **Statistics**: Track mastered, learning, and remaining words

## Setup Instructions for GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** button in the top right and select **New repository**
3. Name it something like `spanish-flashcards`
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface

1. On your repository page, click **Add file** → **Upload files**
2. Drag and drop all these files:
   - `index.html`
   - `app.js`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `README.md`
3. Click **Commit changes**

#### Option B: Using Git Command Line

```bash
# Navigate to the folder with your files
cd /path/to/pwa-flashcards

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Spanish Flashcards PWA"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/spanish-flashcards.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your App

Your app will be live at:
```
https://YOUR_USERNAME.github.io/spanish-flashcards/
```

### Step 5: Install as PWA

**On Mobile (iOS):**
1. Open the URL in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Tap "Add"

**On Mobile (Android):**
1. Open the URL in Chrome
2. Tap the menu (3 dots)
3. Tap "Install app" or "Add to Home Screen"

**On Desktop (Chrome/Edge):**
1. Open the URL
2. Click the install icon in the address bar (➕ or 💻)
3. Click "Install"

## Files Included

- **index.html** - Main HTML structure with PWA meta tags
- **app.js** - All flashcard functionality and word database
- **manifest.json** - PWA configuration
- **sw.js** - Service worker for offline support
- **icon-192.png** - App icon (192x192)
- **icon-512.png** - App icon (512x512)

## Customization

### Adding More Words

Edit `app.js` and add entries to the `wordDatabase` array:

```javascript
{spanish: "perro", english: "dog", type: "noun"}
```

### Changing Colors

Edit the CSS in `index.html` to change the color scheme. Main colors:
- Primary: `#667eea`
- Secondary: `#764ba2`

### Updating Cache

When you make changes, update the `CACHE_NAME` in `sw.js`:

```javascript
const CACHE_NAME = 'spanish-flashcards-v2'; // increment version
```

## Browser Support

- ✅ Chrome/Edge (Windows, Mac, Android)
- ✅ Safari (iOS, Mac)
- ✅ Firefox (Windows, Mac, Android)

## License

Free to use and modify for personal or educational purposes.

## Credits

Created with the 500 most common Spanish words across all parts of speech.