<<<<<<< HEAD
=======
//src/frontend/src/auth/AuthProvider.js
>>>>>>> companero/develop
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
<<<<<<< HEAD
  loading: true, // 👈 nuevo estado
=======
>>>>>>> companero/develop
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
<<<<<<< HEAD
  const [loading, setLoading] = useState(true); // 👈 inicia en "cargando"

  // Recuperar sesión al iniciar
  useEffect(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken) {
      fetch("http://127.0.0.1:5000/auth/me", {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.usuario) {
            setUser(data.usuario);
            setToken(savedToken);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(data.usuario));
          } else {
            logout();
          }
        })
        .catch(() => logout())
        .finally(() => setLoading(false)); // 👈 terminamos de verificar
    } else {
      setLoading(false);
=======

  // Al iniciar, cargar desde localStorage si ya estaba logueado
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
>>>>>>> companero/develop
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    setIsAuthenticated(true);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
<<<<<<< HEAD
      value={{ isAuthenticated, user, token, login, logout, loading }}
    >
=======
      value={{ isAuthenticated, user, token, login, logout }}>
>>>>>>> companero/develop
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
