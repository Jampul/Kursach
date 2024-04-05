const form = document.getElementById('consultation-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');

    try {
        const response = await fetch('http://localhost:3000/save-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, email })
        });
        
        if (response.ok) {
            alert('Contact saved successfully.');
        } else {
            alert('There was a problem saving your contact.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem saving your contact.');
    }
});