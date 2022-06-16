

document.getElementById('send').addEventListener('click', function() {
    
    email= document.getElementById('name').value;
     const data = {
        from_email:email
       }
        emailjs.send('service_q3yo51l', 'template_ra99k8y' , data, 'user_AEsKrYgNC9ouLDTQeHFY7')
        .then((result) => {
        alert("Email inviata");
        },
        (error) => {
        alert("Errore invio email");
        console.log(error);
        }); 
})

   
    