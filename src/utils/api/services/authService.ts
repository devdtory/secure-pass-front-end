import axios from "axios";

interface RefreshTokenRequest {
  data: any;
  status: number;
  refreshToken: string;
}

interface RefreshTokenResponse {
  accessToken: string;
}

export async function refreshToken(): Promise<string> {
  const refreshToken = getRefreshTokenFromStorage(); // Retrieve refresh token securely
  const response = await axios.post<RefreshTokenResponse, RefreshTokenRequest>(
    "/refresh",
    { refreshToken }
  );

  if (response.status === 200) {
    storeAccessToken(response.data.accessToken); // Store new access token securely
    return response.data.accessToken;
  } else {
    throw new Error("Refresh token failed");
  }
}

// Helper functions for secure storage and retrieval of refresh token
function getRefreshTokenFromStorage(): string | undefined {
  // Implement logic to securely retrieve refresh token from storage (e.g., localStorage with HttpOnly flag)
  // You might use a library like `js-cookie` or a custom solution
  return undefined; // Replace undefined with the actual implementation
}

function storeAccessToken(accessToken: string): void {
  // Implement logic to securely store access token (e.g., cookie with HttpOnly flag)
  // You might use a library like `js-cookie` or a custom solution
}

export function getCookie(cookieName: string) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].trim().split("=");
    if (key === cookieName) {
      return value;
    }
  }
  return null;
}
