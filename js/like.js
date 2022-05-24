let form = document.querySelector('.needs-validation')
let ism = document.querySelector('.lastism')
let fam = document.querySelector('.firsFam')
let email = document.querySelector('.imail')
let file = document.querySelector('.file')


form.addEventListener('submit', (event)=>{
    event.preventDefault()
})

function constuc(ism, fam, amail, file) {
    this.Ism = ism.value;
    this.Fam = fam.value;
    this.Email = amail.value,
    this.File = file.value
    return this.Ism, this.Fam, this.Email, this.File
}


async function formw() {
   let contr = new constuc(ism, fam, email, file)
   let yangi = await fetch('https://reqres.in/api/users',{
       method: 'post',
       body: JSON.stringify({
         avatar: contr.File,
         last_name: contr.Ism,
         email: contr.Email,
         first_name: contr.Fam,
       }),
       headers:{
          'Content-type':'application/json; charset=UTF-8'
       }
   })

   let yanggi = await fetch('https://reqres.in/api/users')
   let copy = (await yanggi.json()).data
   console.log(copy);
   
   
}

formw()

