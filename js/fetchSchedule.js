// api url
const getAllScheduleUrl = "https://backendthecryptohub.online:3000/api/getAllSchedules";

// Defining async function
const getAllDays = async (url) => {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  if (data.data) {
    getDay1(data.data?.filter((item) => item.dayName === "March 2, 2023"));
    getDay2(data.data?.filter((item) => item.dayName === "March 3, 2023"));
  }
};
// Calling that async function
getAllDays(getAllScheduleUrl);

const getDay1 = (data) => {
  let only4 = data?.slice(0, 4);
  let allDay1 = ``;
  for (let schedule of only4) {
    let a = schedule.logo;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]
      ?.join("")
      .replace(" ", "%20");

    allDay1 += `
    <div class="schedule-listing">
        <div class="schedule-item">
            <div class="sc-time">${schedule.startTime} - ${
      schedule.endTime
    }</div>
            <div class="sc-pic">
            <img
                src=${`https://backendthecryptohub.online:3000/${images}`}
                class="img-circle"
                alt=""
            />
            </div>
            <div class="sc-name">
            <h4>${schedule.name}</h4>
            <span>${schedule.position}</span>
            </div>
            <div class="sc-info">
            <h3>${schedule.scheduleTitle}</h3>
            <p>
            ${schedule.scheduleDescription}
            </p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    `;
  }
  document.getElementById("allDay1M").innerHTML = allDay1;
};

const getDay2 = (data) => {
  let only4 = data?.slice(0, 4);

  let allDay2 = ``;
  for (let schedule of only4) {
    let a = schedule.logo;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]
      ?.join("")
      .replace(" ", "%20");

    allDay2 += `
    <div class="schedule-listing">
        <div class="schedule-item">
            <div class="sc-time">${schedule.startTime} - ${
      schedule.endTime
    }</div>
            <div class="sc-pic">
            <img
                src=${`https://backendthecryptohub.online:3000/${images}`}
                class="img-circle"
                alt=""
            />
            </div>
            <div class="sc-name">
            <h4>${schedule.name}</h4>
            <span>${schedule.position}</span>
            </div>
            <div class="sc-info">
            <h3>${schedule.scheduleTitle}</h3>
            <p>
            ${schedule.scheduleDescription}
            </p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    `;
  }
  document.getElementById("allDay2M").innerHTML = allDay2;
};
