// api url
const getAllBrandsUrl = "https://backendthecryptohub.online:3000/api/getAllBrands";

// Defining async function
const getAllSponsors = async (url) => {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  if (data.data) {
    getAllPlatinumSponsors(
      data.data?.filter((item) => item.category === "Platinum")
    );
    getAllGoldSponsors(data.data?.filter((item) => item.category === "Gold"));
    getAllSilverSponsors(
      data.data?.filter((item) => item.category === "Silver")
    );
  }
};
// Calling that async function
getAllSponsors(getAllBrandsUrl);

const getAllPlatinumSponsors = (data) => {
  let allPlatinumSponsors = ``;
  for (let sponsor of data) {
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]
      ?.join("")
      .replace(" ", "%20");

    allPlatinumSponsors += `
    <div class="client-block col-lg-3 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`https://backendthecryptohub.online:3000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("allPlatinumSponsors").innerHTML =
    allPlatinumSponsors;
};

const getAllGoldSponsors = (data) => {
  let allGoldSponsors = ``;
  for (let sponsor of data) {
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]
      ?.join("")
      .replace(" ", "%20");

    allGoldSponsors += `
    <div class="client-block col-lg-3 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`https://backendthecryptohub.online:3000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("allGoldSponsors").innerHTML = allGoldSponsors;
};

const getAllSilverSponsors = (data) => {
  let allSilverSponsors = ``;
  for (let sponsor of data) {
    console.log(sponsor);
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]
      ?.join("")
      .replace(" ", "%20");

    allSilverSponsors += `
    <div class="client-block col-lg-3 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`https://backendthecryptohub.online:3000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("allSilverSponsors").innerHTML = allSilverSponsors;
};
