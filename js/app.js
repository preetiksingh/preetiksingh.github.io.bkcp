    $(document).ready(function(){

    $('#project-ul-custom').mixItUp();
    particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
    });

    var ctx = $("#mycanvas").get(0).getContext("2d");
    //pie chart data
    //sum of values = 360
    var data = [
    {
    value: 270,
    color: "cornflowerblue",
    highlight: "lightskyblue",
    label: "Html/Css"
    },
    {
    value: 50,
    color: "lightgreen",
    highlight: "yellowgreen",
    label: "Javascript"
    },
    {
    value: 40,
    color: "orange",
    highlight: "darkorange",
    label: "Ruby"
    }
    ];
    //draw
    var piechart = new Chart(ctx).Pie(data);
    });

    $(document).ready(function() {
  try {
    $('body').ripples({
      resolution: 512,
      dropRadius: 20, //px
      perturbance: 0.04,
    });
    $('main').ripples({
      resolution: 128,
      dropRadius: 10, //px
      perturbance: 0.04,
      interactive: false
    });
  }
  catch (e) {
    $('.error').show().text(e);
  }
  $('.js-ripples-disable').on('click', function() {
    $('body, main').ripples('destroy');
    $(this).hide();
  });
  $('.js-ripples-play').on('click', function() {
    $('body, main').ripples('play');
  });
  $('.js-ripples-pause').on('click', function() {
    $('body, main').ripples('pause');
  });
  // Automatic drops
  setInterval(function() {
    var $el = $('main');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;
    $el.ripples('drop', x, y, dropRadius, strength);
  }, 400);
});
