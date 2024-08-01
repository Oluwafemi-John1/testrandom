const btn = document.getElementById('fetchQuotes')
btn.addEventListener('click', () => {
    show.innerHTML = '...loading'
    const url = 'https://api.quotable.io/random'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data); // Handle the data from the API
                show.innerHTML = `
                    <h4>${data.author}</h4>
                    <h2><i>${data.content}</i></h2>
                `
            } else {
                console.error('Error:', xhr.statusText); // Handle errors
                show.innerHTML = err
            }
        }
    };

    xhr.send()




    // fetch(url)
    //     .then(response => response.json())
    //     .then((result) => {
    //         console.log(result);
    //         show.innerHTML = `
    //         <h4>${result.author}</h4>
    //         <h2><i>${result.content}</i></h2>
    //     `
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         show.innerHTML = err
    //     })
})