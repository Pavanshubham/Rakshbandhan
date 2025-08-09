const btn = document.getElementById('startBtn');
    const msg = document.getElementById('message');
    const song = document.getElementById('bgSong');
    const gif = document.getElementById('gif');
    const leftFw = document.getElementById('leftFw');
    const rightFw = document.getElementById('rightFw');

    const sequence = ["1", "2", "3", "HAPPY RAKSHABANDHAN"];
    let index = 0;

    // Create sparkles
    const sparkleContainer = document.getElementById('sparkleContainer');
    for (let i = 0; i < 40; i++) {
      let s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = Math.random() * 100 + 'vw';
      s.style.animationDuration = (3 + Math.random() * 2) + 's';
      sparkleContainer.appendChild(s);
    }

    btn.addEventListener('click', () => {
      btn.style.display = "none"; // Hide button
      gif.style.display = "block"; // Show GIF
      showNext();
    });

    function showNext() {
      if (index < sequence.length) {
        msg.style.opacity = 0;
        setTimeout(() => {
          msg.textContent = sequence[index];
          msg.style.opacity = 1;
          index++;
          setTimeout(showNext, 700);
        }, 300);
      } else {
        msg.classList.add("glow"); // Add glow effect to Happy Diwali
        leftFw.style.display = "block";
        rightFw.style.display = "block";
        song.play().catch(err => console.log("Autoplay blocked:", err));
      }
    }