$(document).ready(function () {
  // Get current weather
  getWeather(1850147);

  var tempC = document.getElementById('tempC');
  var tempF = document.getElementById('tempF');

  // Get weather information from OpenWeatherMap
  function getWeather(cityID) {
    var key = '4ef8bc90a34c28ca38f802304b4a2249';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key).then(function (resp) {
      return resp.json()
    }).then(function (data) {
      readWeather(data)
    }).catch(function () { })
  }
  function readWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    tempC.innerHTML = celcius;
    tempF.innerHTML = fahrenheit;
    $('#tempC').removeClass("invisible");
    $('#tempF').removeClass("invisible");
  }

  // $("#searchInput").on("keyup", function () {
  //   var value = $(this).val().toLowerCase();
  //   $("#stationList li").filter(function () {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //   })
  // });

  // Toggle navbar transparency
  $(window).scroll(function () {
    if ($(this).scrollTop() > 15) {
      $('.navbar').removeClass('navbar-transparent pt-4');
    } else {
      $('.navbar').addClass('navbar-transparent pt-4');
    }
  });

  // Get the current date and time
  function update() {
    var dt = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#currentTime").html(dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear() + "&nbsp;&nbsp;&nbsp;&nbsp;" + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + ":" + (("0" + dt.getSeconds()).slice(-2)));
    $("#currentTime").removeClass("invisible");
    $("#currentTimeZH").html(dt.getFullYear() + "年" + dt.getMonth() + "月" + dt.getDate() + "日" + "&nbsp;&nbsp;&nbsp;&nbsp;" + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + ":" + (("0" + dt.getSeconds()).slice(-2)));
    $("#currentTimeZH").removeClass("invisible");
  }
  update();
  window.setInterval(update, 1000);

  // Desktop and mobile search detector
  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //   $(".mobileSearch").removeClass("d-none")
  // } else {
  //   $(".desktopSearch").removeClass("d-none")
  // }

  // Dynamic background image based on time of the day
  var d = new Date();
  var h = d.getHours();
  if (h >= 6 && h < 8) {
    $("#home-banner").addClass("home-banner-sunrise");
    $("#weather-logo").addClass("fas fa-cloud-sun fa-3x");
  }
  else if (h >= 8 && h < 18) {
    $("#home-banner").addClass("home-banner-day");
    $("#weather-logo").addClass("fas fa-cloud-sun fa-3x");
  }
  else if (h >= 18 && h < 20) {
    $("#home-banner").addClass("home-banner-sunset");
    $("#weather-logo").addClass("fas fa-cloud-moon fa-3x");
  }
  else {
    $("#home-banner").addClass("home-banner-night");
    $("#weather-logo").addClass("fas fa-cloud-moon fa-3x");
  }

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.closing').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
      $('#videoModal').on('hidden.bs.modal', function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  }
  autoPlayYouTubeModal();
})