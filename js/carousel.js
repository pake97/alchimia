
$(function () {

  let prevIndex = 0;
  let currentIndex = 1;
  let nextIndex = 2;
  let nextIndex2 = 3;
  let nextIndex3 = 4;
  let lastIndex = $('#quotes-carousel').find('.quote').length - 1;
  console.log(lastIndex)
  $('#quotes-carousel').on('click', '.previous', showQuote);
  $('#quotes-carousel').on('click', '.next', showQuote);
  $('#quotes-carousel').on('click', '.next2', showQuote);
  $('#quotes-carousel').on('click', '.next3', showQuote);
  $('#quotes-carousel-pips').on('click', '.pip', showFromPip);

  generatePips();
  setLeftClass();

  let carouselRunning = false;
  let carouselRestartTimeout;
  let interval = setInterval(function () {
    if (carouselRunning) {
      showNextQuote();
    }
  }, 4000);

  function showNextQuote() {
    if (currentIndex === lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateState(currentIndex);
  }

  function showQuote(e) {
    let target;
    if ($(e.target).hasClass('quote')) {
      target = $(e.target);
    } else {
      target = $(e.target).parent();
    }
    let index = $('.quote').index(target);
    updateState(index);
    clearTimeout(carouselRestartTimeout);
    carouselRunning = false;
    carouselRestartTimeout = setTimeout(function () {
      carouselRunning = false;
    }, 10000);
  }

  function updateState(index) {
    console.log(prevIndex, currentIndex,nextIndex,nextIndex2,nextIndex3);
    console.log(lastIndex)
    prevIndex = index === 0 ? lastIndex : index - 1;
    currentIndex = index;
    nextIndex = index === lastIndex ? 0 : index + 1;
    nextIndex2 = nextIndex === lastIndex? 0 : nextIndex + 1;
    nextIndex3 = nextIndex2 === lastIndex? 0 : nextIndex2 + 1;
    console.log(prevIndex, currentIndex,nextIndex,nextIndex2,nextIndex3);
    updateCarouselPosition();
    setLeftClass();
    updatePips();
  }

  function updateCarouselPosition() {
    $('#quotes-carousel').find('.previous').removeClass('previous');
    $('#quotes-carousel').find('.current').removeClass('current');
    $('#quotes-carousel').find('.next').removeClass('next');
    $('#quotes-carousel').find('.next2').removeClass('next2');
    $('#quotes-carousel').find('.next3').removeClass('next3');

    let allQuotes = $('#quotes-carousel').find('.quote');
    $(allQuotes[prevIndex]).addClass('previous');
    $(allQuotes[currentIndex]).addClass('current');
    $(allQuotes[nextIndex]).addClass('next');
    $(allQuotes[nextIndex2]).addClass('next2');
    $(allQuotes[nextIndex3]).addClass('next3');
  }

  function generatePips() {
    let listContainer = $('#quotes-carousel-pips').find('ul');
    for (let i = lastIndex; i >= 0; i--) {
      let newPip = $('<li class="pip"></li>');
      $(listContainer).append(newPip);
    }
    updatePips();
  }

  function updatePips() {
    $('#quotes-carousel-pips').find('.previous').removeClass('previous');
    $('#quotes-carousel-pips').find('.current').removeClass('current');
    $('#quotes-carousel-pips').find('.next').removeClass('next');
    let allPips = $('#quotes-carousel-pips').find('.pip');
    $(allPips[prevIndex]).addClass('previous');
    $(allPips[currentIndex]).addClass('current');
    $(allPips[nextIndex]).addClass('next');
  }

  function showFromPip(e) {
    let index = $('#quotes-carousel-pips li').index(e.target);
    updateState(index);
  }

  function setLeftClass() {
    let allQuotes = $('#quotes-carousel').find('.quote');
    $('.quote.left').removeClass('left');
    if (prevIndex > 0) {
      let index = prevIndex - 1;
      $(allQuotes[index]).addClass('left');
    } else {
      $(allQuotes[lastIndex]).addClass('left');
    }
  }

  // pause carousel when on different browser tab
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      carouselRunning = false;
    } else {
      carouselRunning = false;
    }
  });


});
