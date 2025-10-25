const images = [
      "asuka_image1.jpg",
      "misato_image2.jpg",
      "mari_image3.jpg",
      "rei_image4.jpg"
    ];
    function submitVote() {
if (document.getElementById("bestGirl_Vote").value.toLowerCase() === "asuka") {
  document.getElementById("votingresult").innerText = "Agreed";
} 
else if (document.getElementById("bestGirl_Vote").value.toLowerCase() === "misato") {
  document.getElementById("votingresult").innerText = "Agreed";
}
else if (document.getElementById("bestGirl_Vote").value.toLowerCase() === "mari") {
  document.getElementById("votingresult").innerText = "Agreed";
}
else if (document.getElementById("bestGirl_Vote").value.toLowerCase() === "rei") {
  document.getElementById("votingresult").innerText = "Agreed";
}
else {
  document.getElementById("votingresult").innerText = "Incorrect, try again!";
}
}
  
  const names = [
      "Asuka",
      "Misato",
      "Mari",
      "Rei"
    ];

    let index = 0;
    let smashCount = 0;
    let passCount = 0;

    // Track individual smashes per character
    let smashPerImage = new Array(images.length).fill(0);

    // Preload images
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    function vote(type) {
      if (type === 'smash') {
        smashCount++;
        smashPerImage[index]++;
      } else if (type === 'pass') {
        passCount++;
      }

      // Go to next image
      index = (index + 1) % images.length;
      document.getElementById("mainImage").src = images[index];
      document.getElementById("charName").innerText = names[index];

      updateCounter();
    }

    function updateCounter() {
      document.getElementById("counter").innerText = `Smash: ${smashCount} | Pass: ${passCount}`;

      let scoreboardHTML = "<h3>Scoreboard:</h3><ul>";
      names.forEach((name, i) => {
        scoreboardHTML += `<li>${name}: ${smashPerImage[i]} Smash(es)</li>`;
      });
      scoreboardHTML += "</ul>";
      document.getElementById("scoreboard").innerHTML = scoreboardHTML;
    }

    // Initialize scoreboard on page load
    updateCounter();