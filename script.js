ticketForm.addEventListener('submit', calcPrice);

function calcPrice(submit)
{
    submit.preventDefault();

    const tripLenghtKm = document.getElementById('tripLenghtKm').value;
    const userAge = document.getElementById('userAge').value;
 
    const pricePerKm = 0.21;
    const childrenDiscount = 0.20;
    const elderDiscount = 0.40;

    let ticketPrice = tripLenghtKm * pricePerKm;
    if (userAge < 18) 
    {
        ticketPrice -= (ticketPrice * childrenDiscount);
    } 
    if (userAge >= 65) 
    {
        ticketPrice -= (ticketPrice * elderDiscount);
    } 
    const ul = document.getElementById('ticketData');

    const li = document.createElement('li');
    li.innerHTML = 'Lunghezza Percorso: ' + tripLenghtKm + '; ' + 'Età passeggero: ' + userAge + '; ' + 'Prezzo: ' + ticketPrice + "€";
    
    ul.appendChild(li);

}