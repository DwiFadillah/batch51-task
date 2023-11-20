class Testimonial {
    constructor(name, image, review) {
        this.nama = name
        this.img = image
        this.review = review
    }

    website() {
        return `
            <div class="card-testimonials">
                <img src="${this.img}" alt="image testimonial">
                <p>${this.review}</p>
                <h4>${this.nama}</h4>
            </div>
        `
    }
}

let testimonials1 = new Testimonial('Cantika', 'https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=600', 'OK tak')
let testimonials2 = new Testimonial('Bagas', 'https://images.pexels.com/photos/3621960/pexels-photo-3621960.jpeg?auto=compress&cs=tinysrgb&w=600', 'Mantaps recomended')
let testimonials3 = new Testimonial('Intan', 'https://images.pexels.com/photos/4668553/pexels-photo-4668553.jpeg?auto=compress&cs=tinysrgb&w=600', 'Kerenlah desainnya')


let review = [testimonials1, testimonials2, testimonials3] 
let testiweb = `` 
for (let index = 0; index < review.length; index++) {
    testiweb += review[index].website() 
}

document.getElementById('testimonialsreview').innerHTML = testiweb




