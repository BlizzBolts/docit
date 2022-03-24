import ghpages from "gh-pages";

ghpages.publish("docs-dist", function (err) {
  console.error(err);
});
