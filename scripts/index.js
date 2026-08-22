const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-caption-input");
const profileNamel = document.querySelector(".profile__name");
const profileDescriptionl = document.querySelector(".profile__description");

console.log("editProfileModal");
console.log("modal__close-btn");
console.log("newPostModal");
console.log("profile__add-btn");

newPostForm.addEventListener("submit", handleNewPostFormSubmit);
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});
newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNamel.textContent;
  editProfileDescriptionInput.value = profileDescriptionl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNamel.textContent = editProfileNameInput.value;
  profileDescriptionl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}
