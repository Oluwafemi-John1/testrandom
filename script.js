const btn = document.getElementById('fetchQuotes')
btn.addEventListener('click',()=>{
    show.innerHTML = '...loading'
    const url = 'https://api.quotable.io/random'
    fetch(url)
    .then(response=>response.json())
    .then((result)=>{
        console.log(result);
        show.innerHTML = `
            <h4>${result.author}</h4>
            <h2><i>${result.content}</i></h2>
        `
    })
    .catch((err)=>{
        console.log(err);
        show.innerHTML = err
    })
})