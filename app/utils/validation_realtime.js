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
