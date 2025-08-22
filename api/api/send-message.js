<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>piunlockcoin</title>
    <style>
      body { font-family: system-ui, Arial, sans-serif; margin: 24px; }
      h1 { margin: 0 0 8px; }
      .ok { padding: 12px 16px; background:#f0f7ff; border:1px solid #b5d6ff; border-radius:8px; }
      form { margin-top: 24px; display:flex; gap:8px; }
      input, button { padding:10px 12px; }
    </style>
  </head>
  <body>
    <h1>Website aktif 🎉</h1>
    <p class="ok">Vercel + GitHub sudah siap. (Halaman ini dari <code>index.html</code>)</p>

    <h2>Kirim pesan ke Telegram (opsional)</h2>
    <form id="f">
      <input id="msg" placeholder="Tulis pesan…" required />
      <button type="submit">Kirim</button>
    </form>
    <pre id="out"></pre>

    <script>
      const f = document.getElementById('f');
      const out = document.getElementById('out');
      f.addEventListener('submit', async e => {
        e.preventDefault();
        out.textContent = 'Mengirim…';
        const res = await fetch('/api/send-message', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ text: document.getElementById('msg').value })
        });
        const data = await res.json().catch(()=> ({}));
        out.textContent = res.ok ? 'OK: ' + JSON.stringify(data) : 'ERROR: ' + JSON.stringify(data);
      });
    </script>
  </body>
</html>
