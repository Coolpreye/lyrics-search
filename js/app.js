import { API } from './api.js';
import * as UI from './ui.js';

UI.searchForm.addEventListener('submit', e => {

    // read data from the form
    const artistName = UI.artistInput.value,
            songName = UI.songInput.value;

    // validate the form
    if(artistName === '' || songName === '') {
        UI.messageDiv.innerHTML = 'Error... All fields are mandatory';
        UI.messageDiv.classList.add('error');
        
        setTimeout(() => {
            UI.messageDiv.innerHTML = '';
            UI.messageDiv.classList.remove('error');
        }, 3000);
    } else {
        // query the API
        const lyric = new API(artistName, songName);
        lyric.queryAPI()
            .then(lyric => {
                if(lyric.lyric.lyrics) {
                    const result = lyric.lyric.lyrics;
                    UI.resultDiv.textContent = result;
                    UI.searchForm.reset(); 
                } else {
                    // no results found
                    UI.messageDiv.innerHTML = 'No lyrics found';
                    UI.messageDiv.classList.add('error');
        
                    setTimeout(() => {
                        UI.messageDiv.innerHTML = '';
                        UI.messageDiv.classList.remove('error');
                        UI.searchForm.reset();
                    }, 3000);
                }
            })
    }

})