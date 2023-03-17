import { LoginValues } from "../../types/auth";

export default function loginValidation({ username, password }: LoginValues) {
  const errors: LoginValues = {};
  const idRegex = /[a-z0-9]{6,10}/g;
  const passwordRegex = /[A-Za-z0-9]{8,12}/g;

  if (!username) {
    errors.username = "아이디를 입력해주세요.";
  } else if (!idRegex.test(username)) {
    errors.username = "입력된 아이디가 유효하지 않습니다. (소문자 또는 숫자 6 ~ 10자)";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else if (!passwordRegex.test(password)) {
    errors.password = "입력된 비밀번호가 유효하지 않습니다.";
  }

  return errors;
}
