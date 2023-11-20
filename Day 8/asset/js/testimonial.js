// class Testimonial {
//     constructor(name, image, review) {
//         this.nama = name
//         this.img = image
//         this.review = review
//     }

//     website() {
//         return `
//             <div class="card-testimonials">
//                 <img src="${this.img}" alt="image testimonial">
//                 <p>${this.review}</p>
//                 <h4>${this.nama}</h4>
//             </div>
//         `
//     }
// }

// let testimonials1 = new Testimonial('Cantika', 'https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=600', 'OK tak')
// let testimonials2 = new Testimonial('Bagas', 'https://images.pexels.com/photos/3621960/pexels-photo-3621960.jpeg?auto=compress&cs=tinysrgb&w=600', 'Mantaps recomended')
// let testimonials3 = new Testimonial('Intan', 'https://images.pexels.com/photos/4668553/pexels-photo-4668553.jpeg?auto=compress&cs=tinysrgb&w=600', 'Kerenlah desainnya')


// let review = [testimonials1, testimonials2, testimonials3] 
// let testiweb = `` 
// for (let index = 0; index < review.length; index++) {
//     testiweb += review[index].website() 
// }

// document.getElementById('testimonialsreview').innerHTML = testiweb

const RatingData = [
    {
        author : 'Dwi',
        review : 'Indah',
        image  : 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600', 
        rating : 5
    },
    {
        author : 'Cantika',
        review : 'Bagus oklah',
        image  : 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=600', 
        rating : 4
    },
    {
        author : 'Bagas',
        review : 'Desain yang indah',
        image  : 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600', 
        rating : 4
    },
    {
        author : 'Aldo',
        review : 'Oke mantap',
        image  : 'https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=600', 
        rating : 3
    },
    {
        author : 'Icha',
        review : 'Skip',
        image  : 'https://images.pexels.com/photos/4350202/pexels-photo-4350202.jpeg?auto=compress&cs=tinysrgb&w=600', 
        rating : 2
    },
]

function content(item) {
    return `
        <div class="card-testimonials">
            <img src="${item.image}" alt="image testimonial">
            <p>${item.review}</p>
            <h4>${item.author}</h4>
            <p class="ratingItem">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>`
}

function allRating() {
    let testimonialHTML =``
    RatingData.forEach((item)=> {
        testimonialHTML += content(item)
    })

    document.getElementById('testimonialsreview').innerHTML = testimonialHTML
}

allRating()

function TestimonialsFilter(rating) {
    let testimonialHTML = ``
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
