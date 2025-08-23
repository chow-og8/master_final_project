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


//Apify Crawling - showing result 


document.addEventListener('DOMContentLoaded',() => {
    fetch('dataset.json') 
    .then(response => response.json()) 
    .then(data => { 
        const musicList = document.querySelector('feature-list'); 

        data.forEach(music => { 
            const div = document.createElement('div'); 
            div.classList.add('feature-item'); 

            div.innerHTML = `
            <img src="${}" alt="${music.name}" style="width:100%, max-height:200px; 
            <h3>${music.name}</h3> 
            <p>${hotel.description.substring(0,150)}...</p> 
            <p><strong>Rating:</strong> ${music.rating}  (${music.reviews} reviews)</p> 
            <a href="#" target="_blank" class="cta-button">View Details</a> 
        `; 
            musicList.appendChild(div);
        });
    })
    .catch(error => console.error('Error fetching dataset:', error))
})
