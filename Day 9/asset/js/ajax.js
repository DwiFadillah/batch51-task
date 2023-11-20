const janji = new Promise((resolve, reject) => {
    const xHttp = new XMLHttpRequest()
    xHttp.open('GET', 'https://api.npoint.io/995da109693365497e5f', true)
    xHttp.onload = () => {
        if (xHttp.status === 200) {
            // console.log('Berhasil', xHttp.response)
            resolve(JSON.parse(xHttp.response))
        }else {
            // console.log('Gagal', xHttp.response)
            reject("Internet Server Error")
        }
    }

    xHttp.onerror = () => {
        reject('Network error')
    }

    xHttp.send()
}) 


function content(item) {
    return `
        <div class="card-testimonials">
            <img src="${item.image}" alt="image testimonial">
            <p>${item.review}</p>
            <h4>${item.author}</h4>
            <p class="ratingItem">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>`
}

async function allRating() {
    let testimonialHTML =``
    const RatingData = await janji



    RatingData.forEach((item)=> {
        testimonialHTML += content(item)
    })

    document.getElementById('testimonialsreview').innerHTML = testimonialHTML
}

allRating()

async function TestimonialsFilter(rating) {
    let testimonialHTML = ``
    const RatingData = await janji
    const testimonialsFiltered = RatingData.filter((item) => {
        return item.rating === rating
    })

    if (testimonialsFiltered.length === 0) {
        testimonialHTML = `<h4> Data not foumd </h4>`
    }else {
        testimonialsFiltered.forEach((item) => {
            testimonialHTML += content(item)
        })
    }

    document.getElementById('testimonialsreview').innerHTML = testimonialHTML
}