const nasa = [
  {
    date: "2020-08-08",
    explanation:
      "From Earth, Saturn never shows a crescent phase. But when viewed from a spacecraft the majestic giant planet can show just a sunlit slice. This image of crescent Saturn in natural color was taken by the robotic Cassini spacecraft in 2007. It captures Saturn's rings from the side of the ring plane opposite the Sun -- the unilluminated side -- another vista not visible from Earth. Visible are subtle colors of cloud bands, the complex shadows of the rings on the planet, and the shadow of the planet on the rings. The moons Mimas, at 2 o'clock, and Janus 4 o'clock, can be seen as specks of light, but the real challenge is to find Pandora (8 o'clock).  From Earth, Saturn's disk is nearly full now and opposite the Sun. Along with bright fellow giant planet Jupiter it rises in the early evening.",
    hdurl:
      "https://apod.nasa.gov/apod/image/2008/CrescentSaturn_cassini_4824.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Crescent Saturn",
    url:
      "https://apod.nasa.gov/apod/image/2008/CrescentSaturn_cassini_1080.jpg",
  },
];
document.getElementById("date").innerHTML = nasa[0].date;

console.log(date);

let nextButton = document.getElementById("next");

nextButton.addEventListener("click", () => {
  console.log("button");
  sendApiRequest();
});

async function sendApiRequest() {
  let apiKey = "fq8213QYO2fk7z4rJcaUC9KYt8VxdAkK4TeO2SEF";
  let response = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?camera=mast&earth_date=2020-08-04&api_key=fq8213QYO2fk7z4rJcaUC9KYt8VxdAkK4TeO2SEF"
  );
  console.log(response);
  let data = await response.json();
  console.log(data.photos);
  useApiData(data);
}

function useApiData(data) {
  document.querySelector("#picture-data").innerHTML = data.photos;

  for (let i = 0; i < data.photos.length; i++) {
    let picture = document.createElement("img");
    picture.src = data.photos[i].img_src;

    let src = document.getElementById("picture");

    src.appendChild(picture);
    document.querySelector(
      "#picture-data"
    ).innerHTML += `<img src="${date.url}"`;
  }
}
