export async function fetchFromCMS(url:string, token :string, method :string = "GET" ){
    let response = await fetch(
                url,
                {
                    method: method,
                    headers:{
                        "api-key" : token,
                        "accept" : "application/json"
                    }
                }
            )
            .then(response => {
                console.log(response, "util funciton");
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