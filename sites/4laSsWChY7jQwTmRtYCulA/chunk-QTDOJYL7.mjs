import{f as e}from"./chunk-ENK4YSX5.mjs";e();function n(t,o){return{bodyClassName:"framer-body-augiA20Il",breakpoints:[{hash:"78vzxf",mediaQuery:"(min-width: 1920px)"},{hash:"11dq",mediaQuery:"(min-width: 1440px) and (max-width: 1919px)"},{hash:"72rtr7",mediaQuery:"(min-width: 1200px) and (max-width: 1439px)"},{hash:"1jcwr6q",mediaQuery:"(min-width: 810px) and (max-width: 1199px)"},{hash:"d5vedj",mediaQuery:"(max-width: 809px)"}],customHTMLBodyStart:`<script>
  document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.querySelector(".framer-j41owv");
    var audio = new Audio("https://framerusercontent.com/assets/9wMpVIDEEO9AJYMxDljTePsRb0.mp3");
    audio.loop = true; // Set audio to loop continuously
    audio.volume = 0.95; // Set default volume to 15%
    var overlay = document.getElementById("overlay");
    var musicToggleButton = document.querySelector(".framer-u8lm9r");
    var gif = musicToggleButton.querySelector(".framer-xuoh79");

    // Add event listener to play button
    playButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior
      audio.play(); // Play the audio
      overlay.style.display = "none"; // Hide the overlay
    });

    // Add event listener to music toggle button
    musicToggleButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior
      if (audio.paused) {
        audio.play(); // Play the audio if it is paused
        gif.style.display = "block"; // Show the GIF
      } else {
        audio.pause(); // Pause the audio if it is playing
        gif.style.display = "none"; // Hide the GIF
      }
    });
  });




document.addEventListener("DOMContentLoaded", function() {
  document.body.style.overflow = "hidden";

  var button = document.querySelector("[data-framer-name='Continue']");

  button.addEventListener("click", function(event) {
    event.preventDefault();

    document.body.style.overflow = "auto";

    var containerToHide = document.querySelector("#over");

    containerToHide.style.visibility = "hidden";
    containerToHide.style.zIndex = "-5";
    containerToHide.style.pointerEvents = 'none';

    containerToHide.remove();
  });
});







document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll("[data-framer-name='Copier']");

  buttons.forEach(function(button) {
    const initialText = button.querySelector(".framer-text").textContent;
    button.addEventListener("click", function(event) {
      event.preventDefault();
      var textToCopy = "I said it's TBA, come back later";

      navigator.clipboard.writeText(textToCopy).then(function() {
        button.querySelector(".framer-text").textContent = "Address copied";
        setTimeout(function() {
          button.querySelector(".framer-text").textContent = initialText;
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy: ', err);
      });
    });
  });
});
<\/script>
`,customHTMLHeadEnd:`<script>
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};
window.onload = function() {
    window.scrollTo(0, 0);
};
<\/script>`,description:"EAZY from EZPZ is a crypto degenerate alien that came down to Earth to multiply his net worth.",elements:{CPHYjnsmd:"memes",GBH3U51zl:"tokenomics",H0ZCSOLAT:"beginning",JnTW97ZcH:"now",RR_3jd_Cd:"community",rsvdJmiDn:"about",XF19k8AEQ:"overlay"},framerSearch:{index:!0},robots:"max-image-preview:large",serializationId:"framer-dL08a",socialImage:"https://framerusercontent.com/assets/gGbrBArek7Q37eqC9vUVZCe53Y.png",title:"Eazy Peazy | EZPZ",viewport:"width=device-width"}}var a=1,r={exports:{default:{type:"function",annotations:{framerContractVersion:"1"}},metadataVersion:{type:"variable",annotations:{framerContractVersion:"1"}},__FramerMetadata__:{type:"variable"}}};export{n as a,a as b,r as c};
//# sourceMappingURL=chunk-QTDOJYL7.mjs.map
