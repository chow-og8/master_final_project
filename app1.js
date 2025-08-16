document.addEventListener('DOMContentLoaded', function(){ 
    const form = document.querySelector('form'); 
    const participants = JSON.parse(localStorage.getItem('participants')); 

    form.addEventListener('submit', function(event){ 
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim(); 
        const email = document.getElementById('email').value.trim(); 
        const message = document.getElementById('message').value.trim(); 

        setTimeout(() => {
            alertbox.classList.add('fade-out'); 
            setTimeout(() => alertBox.remove(), 500);
        }, timeout);

        //if fill --> save 
        if (name && email && message){ 
            participants.push({name,email,message}); 
            localStorage.setItem('participants',JSON.stringify(participants)); 

            showAlert('Thank you for your message'); 
            form.reset();
        } else{ 
            showAlert('Please fill in the table');
        }
    })
})
