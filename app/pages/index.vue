<template>
  <div class="background">
    <div class="container signUp-container">
      <img
        class="d-none d-md-inline img-fluid"
        src="/img/left.png"
        alt="online todo list image"
      />
      <img
        class="d-md-none img-fluid mb-3"
        src="/img/logo_lg.png"
        alt="todo list logo"
      />
      <div class="signUpForm ms-md-3 ms-lg-5 p-3 p-md-0">
        <h2 class="signUpForm__title">註冊帳號</h2>
        <form class="signUpForm__body needs-validation" novalidate>
          <div class="signUpForm__body__inputGroup">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              placeholder="請輸入email"
              required
            />
            <div class="invalid-tooltip">請輸入有效的email</div>
            <div class="invalid-tooltip d-none" id="email-used">
              Email已被使用
            </div>
          </div>
          <div class="signUpForm__body__inputGroup">
            <label for="nickname" class="form-label">暱稱</label>
            <input
              type="text"
              name="nickname"
              class="form-control"
              id="nickname"
              placeholder="請輸入暱稱"
              autocomplete="off"
              required
            />
            <div class="invalid-tooltip">請輸入暱稱</div>
          </div>
          <div class="signUpForm__body__inputGroup">
            <label for="password" class="form-label">密碼</label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="password"
              placeholder="請輸入密碼"
              autocomplete="off"
              required
            />
            <div class="invalid-tooltip">密碼至少需6個字元</div>
          </div>
          <div class="signUpForm__body__inputGroup">
            <label for="password2" class="form-label">請再次輸入密碼</label>
            <input
              type="password"
              name="password2"
              class="form-control"
              id="password2"
              placeholder="請再次輸入密碼"
              autocomplete="off"
              required
            />
            <div class="invalid-tooltip">密碼不一致</div>
          </div>

          <div class="signUpForm__body__buttonGroup">
            <input
              class="btn btn-dark"
              id="submitBtn"
              type="submit"
              value="註冊帳號"
            />
            <NuxtLink class="btn btn-primary" to="/login">登入</NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.background {
  background-color: #ffd370;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signUp-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (min-width: 767px) {
  .signUp-container {
    flex-direction: row;
    justify-content: center;

    gap: 2rem;
  }
}
.signUpForm {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
}
.signUpForm__title {
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bold;
}
.signUpForm__body {
  display: flex;
  flex-direction: column;
}
.signUpForm__body__inputGroup {
  margin-bottom: 0.7rem;
  position: relative;
}
.signUpForm__body__inputGroup label {
  font-weight: bold;
  margin: 0;
  font-size: 1.2rem;
}
.signUpForm__body__inputGroup input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
}
.signUpForm__body__buttonGroup {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
  gap: 10px;
}
.signUpForm__body__buttonGroup .btn {
  border-radius: 10px;
  padding: 10px 20px;

  font-size: 1.2rem;
}
.signUpForm__body__buttonGroup .btn-primary {
  box-shadow: #fcc84f 1.5px 1.5px 0px;
  &:hover {
    color: white;
  }
}
</style>
