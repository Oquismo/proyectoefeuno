import { useState, createContext, useContext, children } from "react";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
  const login = (datosUsu) => {
    localStorage.setItem("usuario", datosUsu);
    setUsuario(datosUsu); //Para guardar el inicio de sesion
  };

  const logout = () => {
    localStorage.removeItem("usuario", datosUsu);
    setUsuario(null); //Para que cuando se haga logout se cierre sesion
  };

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};
export { UsuarioContext, UsuarioProvider };