export class StorageHelper {

  static setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  static getToken(): string | null {
    return localStorage.getItem('token');
  }

  static removeToken(): void {
    localStorage.removeItem('token');
  }

  static clearStorage(): void {
    localStorage.clear();
  }
}