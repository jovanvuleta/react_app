class Communicators {
    static baseURL = 'https://cbs20-d56a4.firebaseio.com/people';

    static Fetch = () => {
        return fetch(Communicators.baseURL + '.json')
            .then(response => response.json());
    }

    static Post = (data) => {
        return fetch(Communicators.baseURL + '.json', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    static Delete = (cardId) => {
        return fetch(`${Communicators.baseURL}/${cardId}.json`, {
            method: 'DELETE'
        });
    }

    static Put = (cardId, data) => {
        return fetch(`${Communicators.baseURL}/${cardId}.json`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
}

export { Communicators };