
document.querySelector("button").addEventListener("click", generateRandomPic)
document.querySelector("#searchByDate").addEventListener("click", generateByDate)

function generateByDate(){
    let dateChoice = document.querySelector("#gimmeDate").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=OGGhfFHQHpzBVS73KbHDGu7I0Bs8uZYpONUhT7Hh&date=${dateChoice}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.code === 400){
            document.querySelector("img").src =  ""
            document.querySelector("#photoAuthor").innerText = ""
            document.querySelector("#photoName").innerText = ""
            document.querySelector("#photoDate").innerText = ""
            document.querySelector("#photoExplanation").innerText = ""
        

            document.querySelector("h2").innerText = "This photo has not been chosen yet! Choose a different date."
        }else{
            document.querySelector("h2").innerText = ""
            document.querySelector("img").src =  data.url
            if(data.copyright != undefined){
                document.querySelector("#photoAuthor").innerText = data.copyright + "\n"
            }else{
                document.querySelector("#photoAuthor").innerText = "Author Unknown" + "\n"
        }
        document.querySelector("#photoName").innerText = data.title + "\n"
        document.querySelector("#photoDate").innerText = data.date + "\n"
        document.querySelector("#photoExplanation").innerText = data.explanation + "\n"
        

        }
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function generateRandomPic(){ 
fetch("https://api.nasa.gov/planetary/apod?api_key=OGGhfFHQHpzBVS73KbHDGu7I0Bs8uZYpONUhT7Hh&count=1")
    .then(res => res.json())
    .then(data => {
        document.querySelector("h2").innerText = ""
        document.querySelector("img").src =  data[0].url
        if(data[0].copyright != undefined){
            document.querySelector("#photoAuthor").innerText = data[0].copyright + "\n"
        }else{
            document.querySelector("#photoAuthor").innerText = "Author Unknown" + "\n"
        }
        document.querySelector("#photoName").innerText = data[0].title + "\n"
        document.querySelector("#photoDate").innerText = data[0].date + "\n"
        document.querySelector("#photoExplanation").innerText = data[0].explanation + "\n"
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
