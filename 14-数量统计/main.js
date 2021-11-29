let counter = document.querySelectorAll('.counter')

counter.forEach(counter=>{
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const text = +counter.innerText
        const increment = target / 200

        if(text < target){
            counter.innerText = `${Math.ceil(text+increment)}`
            setTimeout(updateCounter,1)
        }else {
            counter.innerText = target
        }
    }

    updateCounter()

})
