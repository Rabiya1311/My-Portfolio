 const links = document.querySelectorAll('.sidebar nav a');  
    for (let link of links) {  
      link.addEventListener('click', function(e) {  
        e.preventDefault();  
        let target = document.querySelector(link.getAttribute('href'));  
        window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });  

        // active class  
        links.forEach(l => l.classList.remove('active'));  
        link.classList.add('active');  
      });  
    }  

    // Simple form alert  
    document.querySelector('form').addEventListener('submit', function(e) {  
      e.preventDefault();  
      alert('Thank you! Your message has been sent.');  
      this.reset();  
    });  