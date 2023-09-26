
const btn = document.getElementById('toggle')
const bulbs = document.getElementById('bulb')
btn.addEventListener('click',toggleBulb)
function toggleBulb(e){
    if(btn.textContent.includes('off')){
        bulbs.src = "images/blub_off.jpg"
        btn.textContent = 'Turn on'
        }
        else{
            bulbs.src = 'images/blub_on.jpeg'
            btn.textContent = 'Turn off'
            }
    }