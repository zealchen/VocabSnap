# Quick Word Translator Chrome Extension

This is a simple Chrome word translation extension that helps users quickly view the definitions, phonetics, and pronunciations of English words.

## Features

- Supports word translation: Simply select an English word on the webpage to view its translation
- Displays phonetics: Provides standard phonetic representation for words
- Pronunciation feature: Supports word pronunciation (requires internet connection)
- Multiple definitions: Displays multiple parts of speech and corresponding definitions for words
- Clean interface: Clear popup design that does not interfere with normal browsing

## Installation Instructions

1. Download the `chrome_extension` folder of this project
2. Open Chrome browser and go to the extensions page (chrome://extensions/)
3. Enable "Developer mode" in the upper right corner
4. Click "Load unpacked"
5. Select the downloaded `chrome_extension` folder

## Usage Instructions

1. After installing the extension, an extension icon will appear in the Chrome browser toolbar
2. While browsing the web, simply select any English word
3. A translation window will automatically pop up, displaying the word's definition, phonetics, and pronunciation
4. Click anywhere else on the page to close the translation window

## Notes

- Only supports queries for English words
- Requires an internet connection to obtain translation data
- The current version uses a free dictionary API, which may have access limitations

## Technical Information

This extension uses the following technologies:
- Chrome Extension Manifest V3
- JavaScript ES6+
- Free Dictionary API (https://dictionaryapi.dev/)

## Privacy Statement

This extension:
- Does not collect users' personal information
- Only sends query requests when users actively select a word
- Does not track users' browsing history

## License

MIT License