export const apiService = {
    get(url = ''){
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }})
            .then(response => response.json())
    },

    post(url= '', data={}){
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)})
            .then(response => response.json())
    }
}