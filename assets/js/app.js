// Parámetros de tu cuenta Grist
const API_KEY    = 'TU_API_KEY';
const DOC_ID     = 'TU_DOC_ID';
const TABLE_NAME = 'TablaModeradores';

document.getElementById('signup-form').addEventListener('submit', async e => {
  e.preventDefault();
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  try {
    const resp = await fetch(
      `https://docs.getgrist.com/api/docs/${DOC_ID}/tables/${TABLE_NAME}/records`,
      {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ fields: { name, email } })
      }
    );
    if (!resp.ok) {
      throw new Error(`Status ${resp.status}`);
    }
    alert('¡Registro enviado correctamente!');
    e.target.reset();
  }
  catch (err) {
    console.error('Error al enviar a Grist:', err);
    alert('Hubo un error al registrar tus datos. Revisa consola.');
  }
});
