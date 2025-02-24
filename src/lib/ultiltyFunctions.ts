export async function fetchFromCMS(url:string, method :string = "GET" ){
    let response = await fetch(
                url,
                {
                    method: method,
                    headers:{
                        "api-key" : "USR-b6045a4a530091cff52259d9a26fd1468e448ed4",
                        "accept" : "application/json"
                    }
                }
            )
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not get content');
                }
                return response.json();
            }).catch(error => {
                // Handle any errors
                console.error('There was a problem with the fetch operation:', error);
            });
    return response;
}