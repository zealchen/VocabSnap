function createTranslateBox() {
  const box = document.createElement('div');
  box.id = 'quick-translator-box';
  box.className = 'translator-box';
  box.style.display = 'none';
  document.body.appendChild(box);
  return box;
}

function getSelectedText() {
  return window.getSelection().toString().trim();
}

async function showTranslation(text, x, y) {
  const box = document.getElementById('quick-translator-box') || createTranslateBox();
  
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      const word = data[0];
      let html = `
        <h3>${word.word}</h3>
        ${word.phonetics[0]?.text ? `<p class="phonetic">${word.phonetics[0].text}</p>` : ''}
        ${word.phonetics[0]?.audio ? `
          <audio controls src="${word.phonetics[0].audio}" class="audio-player"></audio>
        ` : ''}
        <div class="meanings">
      `;
      
      word.meanings.forEach(meaning => {
        html += `
          <div class="meaning">
            <p class="part-of-speech">${meaning.partOfSpeech}</p>
            <ul>
              ${meaning.definitions.slice(0, 3).map(def => `
                <li>${def.definition}</li>
              `).join('')}
            </ul>
          </div>
        `;
      });
      
      html += '</div>';
      box.innerHTML = html;
    } else {
      box.innerHTML = '<p>未找到释义</p>';
    }
    
    box.style.display = 'block';
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    
  } catch (error) {
    box.innerHTML = '<p>获取释义失败</p>';
  }
}

document.addEventListener('mouseup', (e) => {
  const selectedText = getSelectedText();
  if (selectedText && /^[a-zA-Z]+$/.test(selectedText)) {
    showTranslation(selectedText, e.pageX, e.pageY);
  }
});

document.addEventListener('click', (e) => {
  const box = document.getElementById('quick-translator-box');
  if (box && !box.contains(e.target)) {
    box.style.display = 'none';
  }
}); 