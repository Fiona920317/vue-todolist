//驗證password
export function validatePassword(password) {
  if (!password) {
    return "請輸入密碼";
  }
  if (password.length < 6) {
    return "密碼不可少於6個字元";
  }
  return "密碼格式正確";
}
