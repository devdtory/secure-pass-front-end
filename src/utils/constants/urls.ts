export class URLConstants {
  public static readonly BASE_URL = "https://secure-password-s5d9.onrender.com";
  public static readonly login = () => {
    return `${URLConstants.BASE_URL}/auth/login`;
  };
  public static readonly registration = () => {
    return `${URLConstants.BASE_URL}/auth/register`;
  };
  public static readonly getRefreshToken = () => {
    return `${URLConstants.BASE_URL}/auth/refresh`;
  };
}
