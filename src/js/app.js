import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
                ${cover}
              <img src="${variables.avatarURL}" class="photo" />
              <h1>${variables.name || "MC"} ${variables.lastName ||
    "Lovin"}</h1>
              <h2>${variables.role || ""}</h2>
              <h3>${variables.city || ""}, ${variables.country || ""}</h3>
              <ul class=${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/${
              variables.twitter ? variables.twitter : "4geeksacademy"
            }" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github ? variables.github : "4geeksacademy"
            }" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin ? variables.linkedin : "school/4geeksacademy"
            }" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram ? variables.instagram : "4geeksacademy"
            }" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
            </div>
        `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,

    background: "https://m.media-amazon.com/images/I/61DpzbmqsWL.jpg",

    avatarURL:
      "https://i.scdn.co/image/ab67616d0000b273a0c28fb519ef61862c3e81cb",

    socialMediaPosition: "left",

    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
