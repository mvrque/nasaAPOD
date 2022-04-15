
document.querySelector("button").addEventListener("click", generateRandomPic)

function generateRandomPic(){ 
fetch("https://api.nasa.gov/planetary/apod?api_key=OGGhfFHQHpzBVS73KbHDGu7I0Bs8uZYpONUhT7Hh&count=1")
    .then(res => res.json())
    .then(data => {
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
