# Virtus City — Una ciudad construida por la comunidad

**«Tu imaginación construye nuestra ciudad».**

Virtus City es una aplicación web donde cualquier persona puede dibujar personajes,
casas, árboles, vehículos y todo lo que imagine, publicarlos en una galería comunitaria
y ver cómo sus creaciones pasan a formar parte de una ciudad virtual 2D compartida.

---

## ✨ Qué incluye

- **Inicio** con hero animado, indicadores reales (creaciones, participantes, elementos),
  los tres pasos del proyecto, galería de novedades, llamada a la acción y redes sociales.
- **Estudio de dibujo** completo: lápiz, pincel, borrador, línea, rectángulo, círculo,
  relleno por inundación, selector de color y paleta, grosor, deshacer/rehacer, limpiar
  con confirmación, zoom y desplazamiento, vista previa, guardado de borradores,
  descarga en PNG e indicador de tamaño/formato.
- **Personajes animados reales** mediante fotogramas (frames): creador de animación con
  previsualización y control de velocidad. Si no hay animación válida, la creación se
  publica como estática (no se simula animación inexistente).
- **Ciudad virtual 2D** (`Canvas`): calles, manzanas, césped, personajes que caminan por
  las calles, elementos estáticos en las manzanas, cámara con zoom/desplazamiento,
  selección de elementos con ficha (nombre, autor, categoría, fecha), distribución que
  evita amontonamientos, posiciones persistentes y mapa que crece con las creaciones.
- **Galería comunitaria**: buscador, filtros por categoría, orden por novedades y por
  popularidad (votos reales), paginación progresiva, estados vacíos/carga/error y
  adaptación a móviles.
- **Perfil y participación**: explorar y dibujar sin cuenta; cuenta con alias para
  guardar borradores y publicar; editar metadatos, retirar creaciones e historial básico.
- **Moderación**: revisión automática de contenido + panel para aprobar o rechazar
  creaciones pendientes antes de que se sumen al mapa principal.
- **Modo oscuro y claro** auténticos, con interruptor sol/luna, preferencia recordada y
  respeto por la preferencia del sistema.
- **Animaciones ligeras** con `IntersectionObserver`, respeto por `prefers-reduced-motion`
  y transiciones suaves.

---

## 🧱 Tecnologías

- **React 18 + TypeScript**, empaquetado con **Vite 5**.
- **Tailwind CSS 3** (modo oscuro por clase).
- **React Router 6** para la navegación.
- **Canvas 2D** nativo para el estudio de dibujo y la ciudad virtual (sin motores pesados).
- **Zod** para esquemas de validación compartidos.
- Persistencia en **almacenamiento local del navegador** (modo demostración).

---

## 🚀 Cómo ejecutar

Requisitos: **Node.js 18+** y npm.

```bash
# 1. Entrar a la carpeta del proyecto
cd virtus-city

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# 4. Abrir http://localhost:5173
```

Otros comandos:

```bash
npm run build      # Compila para producción en /dist
npm run preview    # Sirve la compilación de producción
npm run typecheck  # Comprueba tipos con TypeScript
npm run lint       # Analiza el código con ESLint
```

> En Windows, si `npm` está bloqueado por la política de ejecución de PowerShell,
> usá `npm.cmd` (por ejemplo, `npm.cmd run dev`).

---

## 🔐 Variables de entorno

Copiá `.env.example` como `.env` y completá los valores.

| Variable | Descripción | Valor por defecto |
| --- | --- | --- |
| `VITE_DATA_MODE` | `local` (demostración) o `remote` (backend real) | `local` |
| `VITE_SUPABASE_URL` | URL del proyecto Supabase (solo modo remoto) | vacío |
| `VITE_SUPABASE_ANON_KEY` | Clave **pública** (anon) de Supabase | vacío |
| `VITE_MAX_IMAGE_DIMENSION` | Lado máximo al que se reescalan las imágenes | `1024` |
| `VITE_MAX_UPLOAD_BYTES` | Tamaño máximo permitido de imagen | `2097152` (2 MB) |
| `VITE_PUBLISH_COOLDOWN_SECONDS` | Ventana anti-spam entre publicaciones | `30` |

> **Nunca** pongas la clave `service_role` ni secretos privados en variables `VITE_*`:
> quedan expuestas en el navegador.

---

## 🗂️ Estructura del proyecto

```
virtus-city/
├── index.html                # Documento raíz
├── public/
│   ├── favicon.svg           # Logotipo
│   └── _headers              # Cabeceras de seguridad para producción (CSP, etc.)
├── supabase/
│   └── schema.sql            # Esquema + políticas RLS de referencia
└── src/
    ├── App.tsx               # Rutas y proveedores de contexto
    ├── components/
    │   ├── city/             # Motor de la ciudad 2D (layout, sprites, canvas)
    │   ├── gallery/          # Tarjetas y ficha de creación
    │   ├── home/             # Secciones de la página de inicio
    │   ├── layout/           # Navbar, Footer, Logo, tema, scroll
    │   ├── profile/          # Modal de sesión
    │   ├── social/           # Enlaces a redes sociales
    │   ├── studio/           # Estudio de dibujo (herramientas, animación, publicación)
    │   └── ui/               # Componentes reutilizables (Button, Card, Modal…)
    ├── data/categories.ts    # Categorías y tamaños recomendados
    ├── hooks/                # Hooks de revelado, movimiento reducido, etc.
    ├── lib/                  # Config, validación, moderación, almacenamiento, utilidades
    ├── pages/                # Inicio, Ciudad, Galería, Estudio, Perfil, Legal, Moderación
    ├── state/                # Contextos: tema, sesión, creaciones, borradores
    └── types/                # Tipos compartidos
```

---

## 🛡️ Seguridad y privacidad

La aplicación aplica varias medidas de reducción de riesgos:

- **Validación doble**: esquemas **Zod** compartidos en el cliente y comprobaciones
  equivalentes pensadas para repetirse en el servidor.
- **Renderizado seguro**: React escapa el texto automáticamente; no se usa
  `dangerouslySetInnerHTML`. La función `sanitizeText` limpia entradas de usuario.
- **Validación real de imágenes**: se comprueba el contenido (`data:image/...`), se
  limita el tamaño y las dimensiones, y **se reprocesan** las imágenes redibujándolas en
  un `canvas` (esto descarta cargas ejecutables y metadatos inesperados).
- **Límites de frecuencia (anti-spam)** en la publicación.
- **Moderación** automática de contenido con panel de revisión.
- **Sin datos sensibles**: no se piden dirección, teléfono, escuela ni ubicación exacta.
- **CSP** en `public/_headers` para producción, además de `X-Content-Type-Options`,
  `Referrer-Policy`, `X-Frame-Options` y `Permissions-Policy`.
- **Sesiones**: la demostración guarda la sesión en el navegador; en producción la
  autenticación y la autorización se gestionan del lado del servidor.

### ⚠️ Limitaciones (documentadas a propósito)

- **Este proyecto se entrega en modo demostración.** Los datos (creaciones, borradores,
  sesión) se guardan **solo en tu navegador** con `localStorage`. Lo que publicás **no**
  es público ni permanente para otras personas: no hay servidor y las imágenes se
  guardan como `dataURL` en el almacenamiento local.
- No prometemos una web libre de vulnerabilidades. Para un despliegue real hay que
  conectar un backend (ver más abajo), activar RLS, subir las imágenes a un bucket de
  almacenamiento de objetos y ejecutar la moderación y la validación en el servidor.
- El panel de moderación y el inicio de sesión son de demostración y **no** están
  protegidos por roles reales.

---

## 🔌 Cómo conectar un backend real (Supabase)

1. Creá un proyecto en Supabase y ejecutá `supabase/schema.sql` en el editor SQL.
2. Activá **RLS** en todas las tablas (ya incluido en el script).
3. Configurá `.env` con `VITE_DATA_MODE=remote`, `VITE_SUPABASE_URL` y
   `VITE_SUPABASE_ANON_KEY`.
4. Implementá un adaptador que cumpla la interfaz `IStorage` (ver
   `src/lib/storage.ts`) usando el cliente de Supabase, y usalo en
   `src/lib/repository.ts`. Subí las imágenes al bucket `creations` y guardá solo la
   ruta y los metadatos en la base de datos.
5. Enviá la CSP como **cabecera HTTP** (no como meta) usando `public/_headers`.

---

## 🤝 Contribuir

¿Querés ayudar a construir Virtus City? Consultá la [guía para contribuir](CONTRIBUTING.md) para preparar el proyecto, comprobar tus cambios y abrir un pull request.

---

## 🤝 Comunidad y redes

- **Instagram**: [@tiendavirtus.oficial](https://www.instagram.com/tiendavirtus.oficial/)
- **YouTube**: [TiendaVirtus](https://www.youtube.com/@tiendavirtus)
- **GitHub**: [xalan007x](https://github.com/xalan007x)

Los tres enlaces son reales y se abren en una nueva pestaña (`target="_blank"` con
`rel="noopener noreferrer"`).

---

**Una ciudad, miles de ideas y un mundo construido entre todos.**
