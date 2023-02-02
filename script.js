const cardArray = [
        {
            name: 'fries',
            img: 'image/fries.png'
        },
      
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
       
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
       
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
    
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
        {
            name: 'fries',
            img: 'image/fries.png'
        },
      
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
       
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
       
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
    
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
       
        

    ]

cardArray.sort(()=> 0.5 - Math.random() )
// console.log(cardArray)

const gridDisplay = document.getElementById('grid')
const cardsChosen = []
// create your board

function createBoard(){
    for (let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img')
        // console.log(card, i)
        card.setAttribute('src', 'image/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipCard(){

    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    console.log('clicked' , cardId)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
}











