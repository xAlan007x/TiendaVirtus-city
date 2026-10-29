# Contribuir a Virtus City

¡Gracias por querer ayudar a construir una ciudad con la comunidad! Puedes contribuir con código, documentación, ideas o reportes de errores.

## Antes de empezar

1. Revisa las [issues abiertas](https://github.com/xAlan007x/TiendaVirtus-city/issues) para ver si alguien ya está trabajando en la misma idea.
2. Para un cambio grande, abre primero una issue y comenta qué propones.
3. No publiques contraseñas, tokens, claves privadas, datos personales ni archivos de configuración con secretos.

## Preparar el proyecto

Necesitas Node.js 18 o posterior y npm.

```bash
npm install
npm run dev
```

Abre la dirección local que indique Vite para probar la aplicación.

## Hacer un cambio

- Crea una rama para tu propuesta y mantén los cambios enfocados.
- Conserva el estilo y los patrones que ya usa el proyecto.
- Si cambias una función visible, comprueba que siga siendo usable en pantallas pequeñas y con movimiento reducido cuando corresponda.
- Actualiza la documentación si cambia la forma de instalar, configurar o usar el proyecto.

## Comprobar los cambios

Antes de abrir un pull request, ejecuta los comandos disponibles para el proyecto:

```bash
npm run typecheck
npm run lint
npm run build
```

Si un comando no está disponible en tu entorno, indícalo en la descripción del pull request junto con lo que sí pudiste comprobar.

## Abrir un pull request

Incluye un resumen breve, el motivo del cambio y cómo lo comprobaste. Enlaza la issue relacionada para que sea fácil seguir el trabajo. Mantén un tono amable y enfocado en mejorar Virtus City para todas las personas que participan.

¡Gracias por contribuir!