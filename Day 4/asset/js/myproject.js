let myProject = []

function addProject(event) {

    event.preventDefault()

    let project_name    = document.getElementById('projectName').value
    let startDate       = document.getElementById('startDate').value
    let endDate         = document.getElementById('endDate').value
    let descInput     = document.getElementById('description').value

    let node    = document.getElementById('node')
    if (node.checked) {
        node = '<i class="fa-brands fa-node"></i>'
    }else{
        node = ''
    }

    let next    = document.getElementById('next')
    if (next.checked) {
        next = '<i class="fa-brands fa-node-js"></i>'
    }else{
        next = ''
    }

    let react    = document.getElementById('react')
    if (react.checked) {
        react = '<i class="fa-brands fa-react"></i>'
    }else{
        react = ''
    }

    let typescript  = document.getElementById('typescript')
    if (typescript.checked) {
        typescript  = '<i class="fa-solid fa-text-height"></i>'
    }else{
        typescript  = ''
    }

    let imageInput      = document.getElementById('inputImage').files
    imageInput = URL.createObjectURL(imageInput[0])


    const project = {
        projectName : project_name,
        start       : startDate,
        end         : endDate,
        description : descInput,
        nodejs      : node,
        nextjs      : next,
        reactjs     : react,
        typescript  : typescript,
        image       : imageInput
    }

    myProject.push(project)
    renderProject()
}

function renderProject(){
    document.getElementById("contents").innerHTML = ''
    for (let index = 0; index < myProject.length; index++) {
        document.getElementById("contents").innerHTML += `
        <div class="blog-item">
            <img src="${myProject[index].image}" alt="">
            <a href="detail-myproject.html">${myProject[index].projectName}</a>
            <p class="time">3 days ago</p>
            <p class="description">
                ${myProject[index].description}
            </p>
            <div class="logo" id="logo-tech">
                ${myProject[index].nodejs}
                ${myProject[index].nextjs}
                ${myProject[index].reactjs}
                ${myProject[index].typescript}
            </div>
            <div class="button-group">
                <a href="#" class="button">edit</a>
                <a href="#" class="button">delete</a>
            </div>
        </div>`
    }
}