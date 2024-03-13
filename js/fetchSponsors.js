// api url
const getAllBrandsUrl = "https://backendthecryptohub.online:3000/api/getAllBrands";

// Defining async function
const getAllSponsors = async (url) => {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  if (data.data) {
    getPlatinumSponsors(
      data.data?.filter((item) => item.category === "Platinum")
    );
    getGoldSponsors(data.data?.filter((item) => item.category === "Gold"));
    getSilverSponsors(data.data?.filter((item) => item.category === "Silver"));
  }
};
// Calling that async function
getAllSponsors(getAllBrandsUrl);

const getPlatinumSponsors = (data) => {
  let only2p = data?.slice(0, 2);
  let platinumSponsors = ``;
  for (let sponsor of only2p) {
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    platinumSponsors += `
    <div class="client-block col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`https://backendthecryptohub.online:3000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("platinumSponsors").innerHTML = platinumSponsors;
};

const getGoldSponsors = (data) => {
  let only3g = data?.slice(0, 3);
  let goldSponsors = ``;
  for (let sponsor of only3g) {
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    goldSponsors += `
    <div class="client-block col-lg-4 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`https://backendthecryptohub.online:3000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("goldSponsors").innerHTML = goldSponsors;
};

const getSilverSponsors = (data) => {
  let only6s = data?.slice(0, 6);
  let silverSponsors = ``;
  for (let sponsor of only6s) {
    console.log(sponsor);
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    silverSponsors += `
    <div class="client-block col-lg-3 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`https://backendthecryptohub.online:3000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("silverSponsors").innerHTML = silverSponsors;
};
