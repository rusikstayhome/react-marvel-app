

class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?apikey=d9734759d1df6a614046f354d5c66a66`);
    }
}

export default MarvelService;