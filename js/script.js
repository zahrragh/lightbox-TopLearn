const imgbox = document.querySelectorAll('.imgbox')

imgbox.forEach(popup => popup.addEventListener('click',function(){
     popup.classList.toggle('active')

}))
