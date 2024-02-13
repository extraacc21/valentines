$(document).ready(function () {
  $('.container').mouseenter(function () {
      $('.card').stop().animate({
          top: '-90px'
      }, 'slow');
  }).mouseleave(function () {
      $('.card').stop().animate({
          top: 0
      }, 'slow');
  });
});

  $(document).ready(function() {
    const numConfetti = 50; 
    const colors = ['#ffcc00', '#ff6699', '#99ff99', '#66ccff']; 
  
    for (let i = 0; i < numConfetti; i++) {
      const confetti = $('<div class="confetti"></div>');
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
      confetti.css({
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 10 + 's', 
        backgroundColor: randomColor 
      });
      $('.confetti-container').append(confetti);
    }
  });
  
  