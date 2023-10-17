// seleciona todas as teclas. 
const pianoKeys = document.querySelectorAll(".piano-keys .key"); 
 const volumeSlider = document.querySelector(".volume-slider input"); 
 const keysCheck = document.querySelector(".keys-check input"); 
  
 let mapedKeys = []; 
 let audio = new Audio("a.wav"); 
  // onde vai navegar entre as wavs para retornar a wav correspondente a tecla.
 const playTune = (key) => { 
   audio.src = `${key}.wav`; 
   audio.play(); 
  // aciona a class active e depois do tempo determinado remove.
   const clickedKey = document.querySelector(`[data-key="${key}"]`); 
   clickedKey.classList.add("active"); 
   setTimeout(() => { 
     clickedKey.classList.remove("active"); 
   }, 150); 
 }; 
  // onde designa qual tecla foi clicada.
 pianoKeys.forEach((key) => { 
   key.addEventListener("click", () => playTune(key.dataset.key)); 
   mapedKeys.push(key.dataset.key); 
 }); 
  // permite utilizar o teclado e não só o mouse para interagir com o piano.
 document.addEventListener("keydown", (e) => { 
   if (mapedKeys.includes(e.key)) { 
     playTune(e.key); 
   } 
 }); 
  // controle de volume 
 const handleVolume = (e) => { 
   audio.volume = e.target.value; 
 }; 
  // ativa e desativas as letras da teclas.
 const showHideKeys = () => { 
   pianoKeys.forEach((key) => key.classList.toggle("hide")); 
 }; 
  
 volumeSlider.addEventListener("input", handleVolume); 
  
 keysCheck.addEventListener("click", showHideKeys);
