export function getCaptureDate(id){
    fetch(`http://localhost:3000/caught_pokemons?id=${id}`, {
    headers: {
    'Content-Type': 'application/json',
    }})
    .then(response => {
        if (response.ok) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(response.statusText));
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length!=0){
            this.setState({captureDate: data[0].capture_date});
        }
    })
    .catch(error => {
        console.log('Request failed', error);
    });
}