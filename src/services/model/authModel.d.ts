declare interface LoginParams {
  username: string;
  password: string;
}
declare interface LoginModel {
  token: string;
  type?: string
  expiration?: string
}
