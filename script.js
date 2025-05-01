// Automatically play background music when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    music.play().catch(() => {
      document.body.addEventListener('click', () => {
        music.play();
      }, { once: true });
    });
  });
  
  // Function to handle card click
  function openCard() {
    document.getElementById('card').classList.add('hidden');
    document.getElementById('proposal').classList.remove('hidden');
  }
  
  // Function to handle "Yes, I will!" button click
  function acceptProposal() {
    const music = document.getElementById('bgMusic');
    music.play(); // Ensure music starts when proposal is accepted
    
    // Show fireworks
    document.getElementById('fireworks').classList.remove('hidden');
    
    // Start fireworks animation
    startFireworks();
  
    // Delay before showing the next button (1.5 seconds after fireworks)
    setTimeout(function() {
      document.getElementById('next').classList.remove('hidden');
    }, 1500);  // 1500ms = 1.5 seconds
  }
  
  // Function to start fireworks animation
  function startFireworks() {
    const container = document.getElementById('fireworks');
    for (let i = 0; i < 20; i++) {
      const div = document.createElement('div');
      div.className = 'firework';
      div.style.left = Math.random() * 100 + '%';
      div.style.top = Math.random() * 100 + '%';
      container.appendChild(div);
    }
  }
  
  // Function to reveal Instagram link when clicking "Next"
  function showInsta() {
    document.getElementById('insta').classList.remove('hidden');
  }
  
  // Function to redirect to Instagram profile
  function goToInsta() {
    window.open('https://instagram.com/pe_g_s', '_blank');
  }
  