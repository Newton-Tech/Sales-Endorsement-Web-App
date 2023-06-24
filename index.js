import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const myContent = [
  {
    to: "Jane Doe",
    text: "I love this app",
    from: "John Doe",
    isLiked: false,
    likes: 1,
    id: "e2fb8758-a373-4981-addc-0b943dcb428a",
  },
];

document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  } else if (e.target.id === "publish-btn") {
    handlePulishClick();
  }
});

function handlePulishClick() {
  const contentInput = document.getElementById("content");
  const toInput = document.getElementById("to");
  const fromInput = document.getElementById("from");
  from;
  if (contentInput.value) {
    myContent.unshift({
      to: toInput.value,
      text: contentInput.value,
      from: fromInput.value,
      isLiked: false,
      likes: 0,
      id: uuidv4(),
    });
  }
  render();
  contentInput.value = "";
  toInput.value = "";
  fromInput.value = "";
}

function handleLikeClick(likesId) {
  const likeObj = myContent.filter(function (content) {
    return content.id === likesId;
  })[0];

  likeObj.isLiked ? likeObj.likes-- : likeObj.likes++;
  likeObj.isLiked = !likeObj.isLiked;
  render();
}

function getContent() {
  let feedHtml = ``;

  myContent.forEach(function (content) {
    feedHtml += ` <div class="endorsments">
    <h2 class="h-to">${content.to}</h2>
    <p class="p-text">${content.text}</p>
    <h2 class="h-from">${content.from}</h2>

    <span>
        <i class="fa-solid fa-heart" style="color: #e1630e;" data-like=${content.id}></i>
    <span>${content.likes}</span>
    </span>

`;
  });

  return feedHtml;
}

function render() {
  document.getElementById("endorsments").innerHTML = getContent();
}

render();
