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
