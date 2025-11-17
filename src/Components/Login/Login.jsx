import { useState } from "react";
import { useAuthContext} from "../../Context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css';

export const Login = () => {
    const [userForm, setUserForm] = useState({name: "", password:""});
    const {user, login} = useAuthContext();// Llama a useAuthContext una vez
    const navigate = useNavigate()
// Redirigir si el usuario ya está autenticado
    if(user){
    console.log("Usuario autenticado:", user);
    return <Navigate to="/admin/alta-productos" />
}
const handleChange = (e) => {
const {name, value} = e.target;
setUserForm({ ...userForm, [name]: value}); 
};
const handleSubmit = (e)  => {
e.preventDefault();
const success = login(userForm.name, userForm.password);   

console.log("Intento de inicio de sesión:", userForm);
console.log("Inicio de sesión exitoso:", success);

    if(success){
    navigate("/admin/alta-productos");

}
else {
    alert("Credenciales incorrectas");
    setUserForm({name: "", password: ""})
}
};
return (
<form onSubmit={handleSubmit}>
    <h2>Iniciar sesion</h2>
    <div>
        <label>Usuario:</label>
        <input
        type="text"
        name="name"
        value={userForm.name}
        onChange={handleChange}        
        />
    </div>
    <div>
    <label>Contraseña:</label>
        <input
        type="password"
        name="password"
        value={userForm.password}
        onChange={handleChange}        
        />    
    </div>
<button type="submit">Iniciar sesion</button>
</form>
);
};
