export function  loadItem(request){
    this.setState({loading:true});

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
            this.setState(prevState => (
                {
                    loading:false,
                    page: prevState.page+1,
                    pokemons: [...prevState.pokemons, ...data]
                }
            ))
        })
        .catch(error => {
            this.setState({loading:false});
            console.log('Request failed', error);
        });
}