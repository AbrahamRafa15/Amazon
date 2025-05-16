import React from 'react';

const Canjear = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#ffffff',
      color: '#0f1111',
    },
    breadcrumb: {
      color: '#555',
      fontSize: '14px',
      marginBottom: '20px',
    },
    breadcrumbLink: {
      color: '#007185',
      textDecoration: 'none',
    },
    breadcrumbStrong: {
      color: '#c45500',
    },
    a: {
      color: '#007185',
      textDecoration: 'none',
    },
    aHover: {
      textDecoration: 'underline',
    },
    h1: {
      fontSize: '28px',
      marginBottom: '20px',
    },
    label: {
      fontWeight: 'bold',
    },
    labelSpan: {
      fontWeight: 'normal',
    },
    input: {
      width: '100%',
      maxWidth: '400px',
      padding: '10px',
      fontSize: '16px',
      marginTop: '10px',
    },
    applyButton: {
      backgroundColor: '#ffd814',
      border: '1px solid #fcd200',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 'bold',
      marginLeft: '10px',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    linkBelowButton: {
      marginTop: '10px',
      display: 'inline-block',
      color: '#007185',
      textDecoration: 'none',
    },
    balance: {
      marginTop: '30px',
      fontSize: '20px',
      color: '#0f1111',
    },
    amount: {
      color: '#007600',
    },
    divider: {
      borderTop: '1px solid #ccc',
      margin: '30px 0',
    },
    info: {
      fontSize: '15px',
      lineHeight: 1.5,
      color: '#0f1111',
    },
    infoLink: {
      color: '#007185',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.body}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <div style={styles.breadcrumb}>
          <a href="#" style={styles.breadcrumbLink}>Mi cuenta</a> ›{' '}
          <a href="#" style={styles.breadcrumbLink}>Saldo de tarjeta de regalo</a> ›{' '}
          <strong style={styles.breadcrumbStrong}>Canjea una Tarjeta de Regalo</strong>
        </div>

        <h1 style={styles.h1}>Canjea una Tarjeta de Regalo</h1>

        <label htmlFor="codigo" style={styles.label}>
          Ingresar código de canje <span style={styles.labelSpan}>(no utilizar guiones)</span>
        </label>
        <br />
        <input type="text" id="codigo" style={styles.input} />
        <button style={styles.applyButton}>Aplicar al saldo</button>
        <br />
        <a href="#" style={styles.linkBelowButton}>¿Cómo encuentro el código de canje?</a>

        <div style={styles.balance}>
          Saldo actual de tarjeta de regalo: <span style={styles.amount}>$0.00</span><br />
          <a href="#" style={styles.a}>Ver historial del saldo</a>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.info}>
          Una vez aplicado a tu cuenta de Amazon, el monto total de la tarjeta de regalo será añadido al saldo de tu tarjeta de regalo. El saldo de tu tarjeta de regalo, incluida la Recarga de Amazon, no tiene vencimiento y no puede transferirse a otras cuentas, utilizarse para comprar otras tarjetas de regalo o, a excepción de que lo exija la ley, canjearse por efectivo. Si recientemente pagaste parte de una compra con una tarjeta de regalo, y ese artículo aún no se ha enviado, cualquier fondo nuevo que se agregue al saldo de tu tarjeta de regalo hasta el monto total de la compra, se aplicará a ese pedido una vez que se haya enviado. Consulta los{' '}
          <a href="#" style={styles.infoLink}>términos y condiciones</a>.
        </div>
      </div>
    </div>
  );
};

export default Canjear;