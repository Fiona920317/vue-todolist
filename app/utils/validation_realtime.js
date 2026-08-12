//驗證email
export function validateEmail(email) {
  if (!email) {
    return { state: false, text: "請輸入email" };
  }
  if (!email.includes("@")) {
    return { state: false, text: "email格式不正確" };
  }
  return { state: true, text: "密碼格式正確" };
}

//驗證password
export function validatePassword(password) {
  if (!password) {
    return { state: false, text: "請輸入密碼" };
  }
  if (password.length < 6) {
    return { state: false, text: "密碼不可少於6個字元" };
  }
  return { state: true, text: "密碼格式正確" };
}
