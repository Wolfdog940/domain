function domain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domanis = "";

  let texto = document.getElementById("domain");

  for (var i = 0; i <= pronoun.length - 1; i++) {
    for (var j = 0; j <= adj.length - 1; j++) {
      for (var k = 0; k <= noun.length - 1; k++) {
        domanis = domanis + pronoun[i] + adj[j] + noun[k] + "<br>";

        texto.innerHTML = domanis;
      }
    }
  }
  return;
}

domain();
