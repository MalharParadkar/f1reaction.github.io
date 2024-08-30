let lights = document.querySelectorAll('.light');
let currentIndex = 0;
let StartTime;
let endTime;
let reaction

function start(){
    if(currentIndex < lights.length){
        lights[currentIndex].style.backgroundImage = 'url(lightOn.jpg';
        currentIndex++;
        setTimeout(start, 1000);
    }
    setInterval(react, Math.floor(Math.random()*5000)+5000);
}

function react(){
    let reactButton = document.getElementById('react');
    let lastLight = document.getElementById('light5');
    if(lastLight.style.backgroundImage == 'url("lightOn.jpg")'){
        setTimeout(start, (Math.random()*500)+500);
        let allLights = document.querySelectorAll('.light');
        
        for(let i = 0; i < allLights.length; i++){
            allLights[i].style.backgroundImage = 'url("lightBg.jpg")';
            reactButton.style.display = 'block';
            StartTime = new Date().getTime();
        }
    }
    reactButton.addEventListener('click', () =>{
        endTime = new Date().getTime();
        let reactionTime = (endTime - StartTime) / 1000;
        document.getElementById('time').innerHTML = reactionTime+' ms';
        reactButton.style.display = 'none';
    });
}
