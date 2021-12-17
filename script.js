let videos = ['السيسي ياريتني كنت أنا يا أخي.mp4','رضا.mp4','مرزق من يومك.mp4','الله اكبر عليك ايه الحلاوة دي.mp4','ارحم دين امي.mp4']


let mainPage = document.getElementById('mainPage')
let videoPage = document.getElementById('theVideoContainer')
let theVideo = document.getElementById('theVideo')
let theInput = document.getElementById('theInput')


Bravo3alek = () =>{
    mainPage.style.display = 'none'
    videoPage.style.display = 'block'
    theVideo.setAttribute('src',videos[Math.floor(Math.random() * 5)])
    theVideo.play()
    
}

theVideo.onended = function() {
    theInput.value = ''
    mainPage.style.display = 'flex'
    videoPage.style.display = 'none'
}