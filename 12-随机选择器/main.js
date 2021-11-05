let tagEl = document.getElementById('tags')
let textArea = document.getElementById('input')

textArea.focus()

textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if (e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)

        randomSelect()
    }
})

function createTags(input){
    let tags = input.split(',').filter(tag => tag.trim()!=='').map(tag=>tag.trim())
    tagEl.innerHTML = ''

    tags.forEach(tag=>{
        let ele = document.createElement('span')
        ele.classList.add('tag')
        ele.innerText = tag
        tagEl.appendChild(ele)
    })
}

function randomSelect(){
    let times = 30

    let interval = setInterval(()=>{
        let randomTag = pickRandomTag()

        if(randomTag !== undefined){
            highlightTag(randomTag)

            setTimeout(()=>{
                unhighlightTag(randomTag)
            }, 100)
        }
    }, 100)

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            let randomTag = pickRandomTag()
            highlightTag(randomTag)
        },100)
    }, times*100)
}

function pickRandomTag(){
    let tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unhighlightTag(tag){
    tag.classList.remove('highlight')
}










