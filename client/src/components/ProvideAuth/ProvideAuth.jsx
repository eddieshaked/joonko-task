import {authContext, useProvideAuth} from "../../context/auth";

const ProvideAuth = ({ children })  => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export default ProvideAuth