export class URLConstants {
  public static readonly BASE_URL = "http://localhost:5656";
  public static readonly login = () => {
    return `${URLConstants.BASE_URL}/auth/login`;
  };
  public static readonly logout = () => {
    return `${URLConstants.BASE_URL}/auth/logout`;
  }
  public static readonly registration = () => {
    return `${URLConstants.BASE_URL}/auth/register`;
  };
  public static readonly getRefreshToken = () => {
    return `${URLConstants.BASE_URL}/auth/refresh`;
  };
  public static readonly getStatus = () => {
    return `${URLConstants.BASE_URL}/auth/status`;
  }
}
