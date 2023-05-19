import { useState, useEffect, createContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cliente from '../config/cliente';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [autentication, setAutentication] = useState({})
    const [cargando, setCargando] = useState(true)
    const Navigate = useNavigate();


    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setCargando(false);
                return
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await cliente('/usuarios/perfil', config)
                setAutentication(data)
            } catch (error) {
                console.log(error);
                setAutentication({})
            } finally {
                setCargando(false)
            }
        }
        autenticarUsuario()
    },[])


    const handleCerrarSesion = () => {
        localStorage.removeItem('token')
        Navigate('/');
    }
    return (
        <AuthContext.Provider value={
            {
                autentication,
                setAutentication,
                cargando,
                handleCerrarSesion,
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;