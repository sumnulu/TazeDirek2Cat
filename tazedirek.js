
var BLOCKED_WORDS = ["Tazedirekt", "tazedirekt" ];

// Start the loop
loop();
window.setInterval(loop, 2000);

function loop() {
  var userPosts = document.getElementsByClassName("userContent");
  for (var i = 0; i < userPosts.length; i++) {

    if (userPosts[i] !== undefined && isTazadirekt(userPosts[i])) {

        var postContainer = userPosts[i].parentNode.parentNode.parentNode;

        replacePostWithCat(postContainer)
    }
  }
}

// Replace with some cat gifs
function replacePostWithCat(post) {
  //to invalidate cache
  var randomId = Math.random();
  post.innerHTML = "<a href=\"http://thecatapi.com\"><img style=\"width:100%;\" src=\"http://edgecats.net/?" + randomId+"\"></a>"
}

// Returns true if the post is sensed as a spoiler.
function isTazadirekt(post) {
  var postString = getHTMLString(post);
  for (var i = 0; i < BLOCKED_WORDS.length; i++) {
    if (postString.indexOf(BLOCKED_WORDS[i]) > -1) {
      return true;
    }
  }
  return false;
}

// Get string representation of node.
function getHTMLString(node) {
  node = node.cloneNode(true);
  var tmp = document.createElement("div");
  tmp.appendChild(node);
  return tmp.innerHTML.toLowerCase();
}
