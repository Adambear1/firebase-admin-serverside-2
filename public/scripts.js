const userId = document.getElementById("userId"),
  firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  age = document.getElementById("age"),
  addBtn = document.getElementById("addBtn"),
  updateBtn = document.getElementById("updateBtn"),
  removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  axios({
    method: "POST",
    url: "/save",
    data: {
      user_id: userId.value,
      first_name: firstName.value,
      last_name: lastName.value,
      age: age.value,
    },
  });
});

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  axios({
    method: "PUT",
    url: "/update",
    data: {
      user_id: userId.value,
      first_nam: firstName.value,
      last_name: lastName.value,
      age: age.value,
    },
  });
});

removeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  axios({
    method: "delete",
    url: "/remove",
    data: {
      user_id: userId.value,
    },
  });
});
