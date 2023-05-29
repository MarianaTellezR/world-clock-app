function updateTime() {
  // LOS ANGELES
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date h3");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time h4");

    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // NEW YORK
  let newYorkElement = document.querySelector("#new-york");

  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date h3");
    let newYorkTimeElement = newYorkElement.querySelector(".time h4");

    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // LONDON
  let londonElement = document.querySelector("#london");

  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date h3");
    let londonTimeElement = londonElement.querySelector(".time h4");

    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // MOSCOW
  let moscowElement = document.querySelector("#moscow");

  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date h3");
    let moscowTimeElement = moscowElement.querySelector(".time h4");

    let moscowTime = moment().tz("Europe/Moscow");

    moscowDateElement.innerHTML = moscowTime.format("MMMM Do, YYYY");
    moscowTimeElement.innerHTML = moscowTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // MALDIVES
  let maldivesElement = document.querySelector("#maldives");

  if (maldivesElement) {
    let maldivesDateElement = maldivesElement.querySelector(".date h3");
    let maldivesTimeElement = maldivesElement.querySelector(".time h4");

    let maldivesTime = moment().tz("Indian/Maldives");

    maldivesDateElement.innerHTML = maldivesTime.format("MMMM Do, YYYY");
    maldivesTimeElement.innerHTML = maldivesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // TOKYO
  let tokyoElement = document.querySelector("#tokyo");

  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date h3");
    let tokyoTimeElement = tokyoElement.querySelector(".time h4");

    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  citiesElement = document.querySelector("#cities-section");
  citiesElement.innerHTML = `
    <div class="row">
        <div class="col-lg-12">
            <div class="city">
                <div class="name">
                    <h2>${cityName}</h2>
                </div>
                <div class="date">
                    <h3>${cityTime.format("MMMM Do, YYYY")}</h3>
                </div>
                <div class="time">
                    <h4>${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></h4>
                </div>
            </div>
        </div>
    </div>
    <a href="index.html">Return to all cities</a>
    `;
}

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
