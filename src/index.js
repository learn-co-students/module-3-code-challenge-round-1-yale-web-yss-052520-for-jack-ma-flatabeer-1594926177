// Code here

document.addEventListener("DOMContentLoaded", () => {

    function qs(selector) {
        return document.querySelector(selector)
    }

    function ce(element) {
        return document.createElement(element)
    }

    const beerDiv = qs(".beer-details")
    const updateForm = qs("form.description")

    function fetchBeers() {

        beerDiv.innerHTML = ""

        fetch("http://localhost:3000/beers")
            .then(response => response.json())
            .then(beers => beers.forEach(beer => displayBeer(beer)))
    }

    function displayBeer(beer) {

        let h2 = ce("h2")
        h2.innerText = beer.name

        let img = ce("img")
        img.src = beer.image_url

        let form1 = ce("form")
        form1.className = "description"

        form1.addEventListener("submit", () => {
            event.preventDefault()
            console.log(form1)
            
        //     fetch(`http://localhost:3000/beers/${beer.id}`, {
        //         method: "PATCH",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(
        //             "description" : 
        //         )
        //     })
        })

        let textarea1 = ce("textarea")
        textarea1.innerText = beer.description

        let button1 = ce("button")
        button1.innerText = "Update Beer"

        let h3_1 = ce("h3")
        h3_1.innerText = "Leave a Review"

        let form2 = ce("form")
        form2.className = "review-form"

        // form2.addEventListener("submit", () => {
        //     event.preventDefault()
        //     fetch(`http://localhost:3000/beers/${beer.id}`, {
        //         method: "PATCH",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(
        //             "reviews" : 
        //         )
        //     })
        // })

        let textarea2 = ce("textarea")
        textarea2.innerText = []

        let button2 = ce("button")
        button2.innerText = "Submit"

        let h3_2 = ce("h3")
        h3_2.innerText = "Customer Reviews"

        let ul = ce("ul")
        ul.className = "reviews"

        beer.reviews.forEach(function (item) {
            let li = ce("li")
            let text = document.createTextNode(item)
            li.appendChild(text)
            ul.appendChild(li)
        })

        form1.append(textarea1, button1)

        form2.append(textarea2, button2)

        beerDiv.append(h2, img, form1, h3_1, form2, h3_2, ul)

    }

    fetchBeers()









})