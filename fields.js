function validateForm(event) {
    event.preventDefault();


    const callNumber = document.getElementById('activeCallNumber').value;
    const whatsappNumber = document.getElementById('activeWhatsappNumber').value;

    if (!/^\d+$/.test(callNumber) || !/^\d+$/.test(whatsappNumber)) {
        alert("Please enter valid phone numbers.");
        return;
    }

    const formData = {
        name: document.getElementById('name').value,
        parts: document.getElementById('parts').value,
        program: document.getElementById('program').value,
        campusLocation: document.getElementById('campusLocation').value,
        hallOfResidence: document.getElementById('hallOfResidence').value,
        activeCallNumber: callNumber,
        activeWhatsappNumber: whatsappNumber,
        society: document.getElementById('society').value,
        circuit: document.getElementById('circuit').value,
        Diocese: document.getElementById('Diocese').value,
    };

    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while submitting the form.");
    });
}