export class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    // query api
    async queryAPI() {
        const apiResponse = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);
        const lyric = await apiResponse.json();
        return {
            lyric
        }
    }
}