const btnPre = document.getElementById('pre')
const btnNext = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progress= document.getElementById('progress')

let currentActive = 1

btnPre.addEventListener('click', () => {
  currentActive --
  if(currentActive > circles.length){
      currentActive = circles.length
  }
  changeStyle()
})

btnNext.addEventListener('click', () => {
  currentActive ++
  if(currentActive < 1){
      currentActive = 1
  }
  changeStyle()
})

function changeStyle(){
    circles.forEach((ele, ind)=>{
        if(ind < currentActive){
            ele.classList.add('active')
        }else {
            ele.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length-1)/(circles.length-1)*100+'%'

    if(currentActive === 1){
        btnPre.disabled = true
    }else if(currentActive === circles.length){
        btnNext.disabled = true
    }else {
        btnPre.disabled = false
        btnNext.disabled = false
    }

}
