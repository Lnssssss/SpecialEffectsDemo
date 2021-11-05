let btn = document.querySelector('.btn')
let ele = document.querySelector('.joke-show')

btn.addEventListener('click',generateJoke)
generateJoke()

async function generateJoke(){
    let config={
        headers:{
            Accept:'application/json',
        },
    }
    let res = await fetch('https://icanhazdadjoke.com', config)
    let data = await res.json()

    ele.innerHTML = data.joke
}

// function generateJoke(){
//     let config={
//         headers:{
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com',config)
//         .then((res)=> res.json())
//         .then((data)=>{
//             ele.innerHTML = data.joke
//         })
// }


