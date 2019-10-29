// let data = data.results[0].books
// data = []


fetch("https://api.myjson.com/bins/zyv02")
        .then(response => {
                return response.json()
        }).then(result => {
                controller(result)
        })

function controller(data) {
        console.log(data)
        showData(data.books)
}

function showData(data) {
        const bookBox = document.getElementById("bookList")
        const divBox = document.getElementById("divList")

        data.forEach((item, index) => {
                let flipcard = document.createElement("div")
                flipcard.className = "flip-card"

                let flipcardinner = document.createElement("div")
                flipcardinner.className = "flip-card-inner"

                let flipcardfront = document.createElement("div")
                flipcardfront.className = "flip-card-front"

                let coverImg = document.createElement("img")
                coverImg.src = item.cover

                let flipcardback = document.createElement("div")
                flipcardback.className = "flip-card-back"

                let backTitle = document.createElement("h1")
                backTitle.innerHTML = item.title

                let backLanguage = document.createElement("p")
                backLanguage.innerHTML = item.language

                let backButton = document.createElement("button")
                backButton.className = "detailButton"
                backButton.innerHTML = "More Information"

                divBox.style.display = ""
                divBox.className = "divBoxSlide"
                let backImg = document.createElement("img")
                backImg.src = item.detail
                let backDivP = document.createElement("p")
                backDivP.innerHTML = item.description


                bookBox.appendChild(flipcard)
                flipcard.appendChild(flipcardinner)
                flipcardinner.appendChild(flipcardfront)
                flipcardfront.appendChild(coverImg)
                flipcardinner.appendChild(flipcardback)
                flipcardback.appendChild(backTitle)
                flipcardback.appendChild(backLanguage)
                flipcardback.appendChild(backButton)
                divBox.appendChild(backImg)
                divBox.appendChild(backDivP)

        })
        console.log(divBox)
        addEventListener(data.books);
        createDivSliderBox(data.books);
}


function addEventListener() {
        document.querySelectorAll("button[class=detailButton]").forEach(node => {
                node.addEventListener("click", () => {
                        console.log("CLICK MICH");

                })
        })
}

let slides = function createDivSliderBox() {
        document.querySelectorAll("div[class=divBoxSlide]").forEach(divBox => {
                divBox[i].setAttribute("style", "display:none")
        })
        let count = 0;
        count++;
        if (count > divBox.length) {
                count = 1;
        }
        divBox[count - 1].setAttribute("style", "display:block");
        setTimeout(slides, 3600);
}
console.log()