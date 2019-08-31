export function getCollectionLength(request){
    fetch(request, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
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
            this.setState({total: data.length})
        })
        .catch(error => {
            console.log('Request failed', error);
        });
}