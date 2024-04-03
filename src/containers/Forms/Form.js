/**
 * Fonction qui permet de voir/cacher un mot de passe
 * @param {PointerEvent} e
 */
export const showHidePassword = (e) => {
  /* Icon */
  const icon = e.currentTarget;
  const iconClass = icon.classList[1];
  /* Input */
  const input = document.getElementById("password");

  if (iconClass === "bi-eye-fill") {
    /* Eye */
    icon.classList.remove("bi-eye-fill");
    icon.classList.add("bi-eye-slash-fill");
    input.type = "text";
  } else {
    /* Eye-slash */
    icon.classList.add("bi-eye-fill");
    icon.classList.remove("bi-eye-slash-fill");
    input.type = "password";
  }
};

/**
 * Fonction qui permet de voir/cacher un mot de passe
 * @param {PointerEvent} e
 */
export const showHideConfirmPassword = (e) => {
  /* Icon */
  const icon = e.currentTarget;
  const iconClass = icon.classList[1];
  /* Input */
  const input = document.getElementById("confirmPassword");

  if (iconClass === "bi-eye-fill") {
    /* Eye */
    icon.classList.remove("bi-eye-fill");
    icon.classList.add("bi-eye-slash-fill");
    input.type = "text";
  } else {
    /* Eye-slash */
    icon.classList.add("bi-eye-fill");
    icon.classList.remove("bi-eye-slash-fill");
    input.type = "password";
  }
};
