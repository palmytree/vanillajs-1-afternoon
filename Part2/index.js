const cardId = document.getElementById('card-id')
const cardStyle = document.getElementById('card-style')


console.log(cardId.value, cardStyle.value)

function setCard() {
    const selectedCard = document.getElementById(cardId.value)
    console.log(cardId.value)
}