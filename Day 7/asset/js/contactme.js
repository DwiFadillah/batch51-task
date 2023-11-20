function Submit() {
    const Name = document.getElementById('name').value
    const Email = document.getElementById('email').value
    const phoneNumber = document.getElementById('phonenumber').value
    const Subject = document.getElementById('subject').value
    const Message = document.getElementById('message').value

    if (Name == ""){
        alert("Isi dong emailnya")
    } else if (Email == ""){
        alert("Isi dong emailnya")
    } else if (phoneNumber == ""){
        alert("Isi dong Phone Numbernya")
    } else if (Subject == ""){
        alert("Isi dong Subjectnya")
    } else if(Message == ""){
        alert("Isi dong Massagenya")
    } else {
        console.log (`${Name}\n${Email}\n${phoneNumber}\n${Subject}\n${Message}`)
        let link = document.createElement('a')
        link.href = `mailto:${Email}?subject=${Subject}&body=${Message}`
        link.click()
    }
}