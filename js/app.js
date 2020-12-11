$.ajax(
  "https://spreadsheets.google.com/feeds/list/1IeYXviPRdrdCkF7rBJOWNm2EcqGTxzwiYk9mgsi3H8g/1/public/full?alt=json"
).then((data) => {
  const projects = data.feed.entry.map((item) => {
    return {
      name: item.gsx$name.$t,
      git: item.gsx$git.$t,
      live: item.gsx$live.$t,
      img: item.gsx$img.$t,
    };
  });

  const final = projects.map((project) => {
    return `
        <my-card name=${project.name} git=${project.git} live=${project.live} img=${project.img}></my-card>
        `;
  });

  const $section = $("section");

  $section.html(final.join(""));
});

// ---------SANDWHICH--------

const $sandwhich = $("#sandwhich");
const $menu = $("#menu");

$sandwhich.on("click", (event) => {
  if ($menu.css("display") === "flex") {
    $menu.css("display", "none");
  } else {
    $menu.css("display", "flex");
  }
});
