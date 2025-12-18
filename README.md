# Portfolio de Lautaro Serrano

Portfolio personal de desarrollador web con diseño responsive, animaciones modernas y accesibilidad optimizada.

## 🚀 Características

- **Diseño Responsive**: Mobile-first, se adapta a todos los dispositivos
- **Animaciones Suaves**: Efectos de fade-in y slide-up al hacer scroll
- **Navegación Anclada**: Header fijo con navegación suave entre secciones
- **Formulario de Contacto**: Integración con mailto para envío de emails
- **Accesibilidad**: Cumple con estándares básicos de accesibilidad web
- **CSS Moderno**: Variables CSS, Flexbox y Grid
- **Sin Dependencias**: Código puro HTML, CSS y JavaScript

## 📁 Estructura del Proyecto

```
portfolio/
│
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── main.js         # Scripts y funcionalidades
├── assets/
│   └── favicon.ico     # Favicon (puedes agregar más imágenes aquí)
└── README.md           # Este archivo
```

## 🛠️ Instalación y Uso Local

### Opción 1: Live Server (Recomendado para desarrollo)

Si usas Visual Studio Code:

1. Instala la extensión "Live Server" de Ritwick Dey
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 2: Python HTTP Server

Si tienes Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 3: Node.js (http-server)

Si tienes Node.js instalado:

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar el servidor
http-server -p 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 4: PHP (si tienes PHP instalado)

```bash
php -S localhost:8000
```

## 📝 Personalización

### Cambiar el Email de Contacto

Edita el archivo `js/main.js` y busca la línea:

```javascript
const emailTo = 'lautaro.serrano@ejemplo.com';
```

Reemplaza con tu email real.

### Agregar tus Proyectos Reales

Edita la sección de proyectos en `index.html`:

1. Reemplaza las URLs de placeholder de imágenes con tus propias imágenes
2. Actualiza los títulos, descripciones y enlaces de tus proyectos
3. Asegúrate de que las imágenes estén en la carpeta `assets/` o usa URLs externas

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-primary: #667eea;      /* Color principal */
    --color-secondary: #4a90e2;    /* Color secundario */
    --color-accent: #ff6b6b;       /* Color de acento */
    /* ... más variables ... */
}
```

### Agregar tus Redes Sociales

Edita la sección del footer en `index.html` y actualiza los enlaces:

```html
<a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
    GitHub
</a>
```

## 🌐 Despliegue

### GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a **Settings** > **Pages**
4. Selecciona la rama `main` (o `master`) como fuente
5. Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repositorio`

### Netlify

1. Ve a [netlify.com](https://www.netlify.com) y crea una cuenta
2. Arrastra la carpeta del proyecto a Netlify Drop
3. O conecta tu repositorio de GitHub para despliegue automático
4. Tu sitio estará disponible inmediatamente con una URL de Netlify

### Vercel

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Importa tu proyecto desde GitHub o sube los archivos
3. Vercel detectará automáticamente que es un sitio estático
4. Tu sitio estará disponible inmediatamente

## 📱 Secciones del Portfolio

- **Header**: Logo y navegación anclada (fija al hacer scroll)
- **Hero**: Sección de presentación con título y botón CTA
- **Proyectos**: Grid de cards con tus proyectos (Demo y Repo)
- **Sobre mí**: Información personal con foto
- **Contacto**: Formulario que abre el cliente de correo
- **Footer**: Información de copyright y enlaces a redes sociales

## 🎨 Animaciones Incluidas

- **Fade-in**: Animación de aparición suave en el Hero
- **Slide-up**: Elementos que aparecen desde abajo al hacer scroll
- **Hover en Cards**: Elevación y escala al pasar el mouse
- **Botón con Gradiente**: Efecto de brillo animado en el botón principal
- **Pulse**: Animación de pulso en el botón CTA

## ♿ Accesibilidad

- Etiquetas semánticas HTML5
- Atributos `alt` en todas las imágenes
- Navegación por teclado funcional
- Focus visible en todos los elementos interactivos
- Contraste de colores adecuado
- Soporte para `prefers-reduced-motion`

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 👤 Autor

**Lautaro Serrano**

- Portfolio: [Tu URL aquí]
- GitHub: [@lautaro](https://github.com/lautaro)
- LinkedIn: [Lautaro Serrano](https://linkedin.com/in/lautaro-serrano)

## 🙏 Agradecimientos

Gracias por visitar mi portfolio. Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

---

⭐ Si te gustó este proyecto, considera darle una estrella en GitHub.




