const seatLeftCounterOutputElement = document.querySelector('#seatLeftCounterOutput')
const seatLeftCounterOutput = seatLeftCounterOutputElement.innerText
let seatLeftCounter = parseInt(seatLeftCounterOutput)

let seatSelected = 0
document.querySelector('#seatContainer').addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON' && seatSelected < 4 && seatLeftCounter > 0) {
        seatSelected++
        seatLeftCounter--
        e.target.classList.remove('bg-[#F7F8F8]')
        e.target.classList.add('bg-[#1DD100]', 'hover:bg-[#1DD100]', 'text-white', 'selected')
        e.target.classList.contains('selected')

        const seat = e.target.innerText
        const ticketsOutput = document.querySelector('#ticketsOutput')
        const li = document.createElement('li')
        li.classList.add('flex', 'justify-between')
        li.innerHTML = `<span>${seat}</span><span>Economic</span><span>550 TK</span>`
        ticketsOutput.appendChild(li)

        const seats = ticketsOutput.querySelectorAll('li')
        const seatsCount = seats.length

        const seatsCounterElement = document.querySelector('#seatsCounterElement')
        seatsCounterElement.innerText = seatsCount

        const totalCostElement = document.querySelector('#totalCost')
        const totalCost = seatsCount * 550
        totalCostElement.innerText = totalCost

        if(seatSelected === 4) {
            const seatAlert = document.querySelector('#seatAlert')
            seatAlert.innerHTML = `<p style="color: red; text-align: center">Your are selected maximum seats</p>`
        }
        seatLeftCounterOutputElement.innerText = seatLeftCounter
    }
    
})

document.querySelector('#couponField').addEventListener('keyup', function(e) {
    const inputValue = e.target.value 
    const btn = document.querySelector('#couponBtn')
    const couponNewElement = document.querySelector('#couponNew')
    const couponNew = couponNewElement.innerText
    const couponCoupleElement = document.querySelector('#couponCouple')
    const couponCouple = couponCoupleElement.innerText

    console.log(couponNew, couponCouple);

    if(inputValue === couponNew) {
        btn.removeAttribute('disable')
    }
    else {
        btn.setAttribute('disable', true)
    }
})