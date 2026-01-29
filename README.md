# DIATOMUSA - Sitio web

Sitio corporativo y comercial de DIATOMUSA construido con Next.js (App Router)
y exportacion estatica. El build genera `out/`, lista para hosting estatico.

## Objetivo del sitio
- Contar la historia del producto "El Encuentro".
- Explicar beneficios, ciencia y cuidado.
- Mostrar variantes reales y material visual.
- Dirigir a compra en Amazon desde puntos clave.

## Arquitectura general
- **Next.js App Router**: cada carpeta en `app/` es una ruta.
- **Contenido centralizado**: `data/content.ts` concentra textos, listas y media.
- **Componentes reutilizables**: `components/` (header, footer, etc.).
- **Assets estaticos**: `public/images/` y `public/videos/`.
- **Export estatico**: `next.config.ts` usa `output: 'export'`.
- **Hosting estatico**: `firebase.json` apunta a `out/`.

## Estructura del proyecto
| Ruta | Proposito |
| --- | --- |
| `app/` | Paginas, layout y estilos globales. |
| `app/layout.tsx` | Layout base y estructura compartida. |
| `app/globals.css` | Tokens visuales y estilos globales. |
| `components/` | UI reutilizable (Header, Footer, etc.). |
| `data/content.ts` | Copy, links, arrays y media usados en paginas. |
| `public/images/` | Imagenes estaticas (incluye `public/images/encuentro/`). |
| `public/videos/` | Videos estaticos (actualmente `video_1_v1.mp4`, `video_2_v1.mp4`). |
| `README-storytelling.md` | Narrativa visual y guion de imagenes. |

## Mapa de rutas
| Ruta web | Archivo | Descripcion |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home con narrativa, video principal y secciones clave. |
| `/producto` | `app/producto/page.tsx` | Detalle del producto y variantes. |
| `/ciencia` | `app/ciencia/page.tsx` | Ciencia y material. |
| `/historia` | `app/historia/page.tsx` | Origen y manifiesto. |
| `/cuidado` | `app/cuidado/page.tsx` | Uso y cuidado. |
| `/opiniones` | `app/opiniones/page.tsx` | Reseñas. |
| `/comprar` | `app/comprar/page.tsx` | Enlaces de compra. |
| `/garantia` | `app/garantia/page.tsx` | Garantia y soporte. |
| `/aviso-legal` | `app/aviso-legal/page.tsx` | Legal. |
| `/privacidad` | `app/privacidad/page.tsx` | Privacidad. |
| `/cookies` | `app/cookies/page.tsx` | Cookies. |

## Arquitectura de la Home (`app/page.tsx`)
Orden y proposito de las secciones:
1. **Hero**: historia y presentacion de "El Encuentro".
2. **Video principal**: seccion dedicada que muestra el uso real del producto.
3. **Beneficios clave**: lista de ventajas del material.
4. **Como funciona**: microcapilaridad y proceso de secado.
5. **Colecciones cromaticas**: variantes reales y medidas.
6. **Ciencia**: pilares del producto.
7. **Historia**: contexto de marca.
8. **Uso y cuidado**: pasos de mantenimiento.
9. **Resenas**: testimonios.
10. **Garantia y soporte**: condiciones y FAQ.
11. **Video ambiente**: pieza visual para sensacion y atmosfera.

## Como correr en local (desarrollo)
1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:3000`

## Compilacion (build)
- `npm run build`
- Salida: `out/`

## Previsualizar build estatico (Importante para ver imagenes)
Si abres los archivos HTML de la carpeta `out/` directamente en el navegador, las imagenes NO se veran correctamente porque las rutas absolutas requieren un servidor web.

Para ver el sitio tal como se vera en produccion:
1. Ejecutar `npm run build`
2. Ejecutar `npm run preview`
3. Abrir la URL que se muestra (usualmente `http://localhost:3000`)

## Produccion (deploy estatico)
1. Ejecutar `npm run build`.
2. Publicar la carpeta `out/` en hosting estatico.

Notas:
- Firebase Hosting ya esta configurado en `firebase.json`.
- Si usas Firebase CLI: `firebase deploy`.

## Como actualizar contenido
- **Textos y listas**: editar `data/content.ts`.
- **Imagenes**: agregar en `public/images/` con nombres ASCII y claros.
- **Videos**: agregar en `public/videos/` y actualizar `data/content.ts`.
- **Narrativa visual**: ver `README-storytelling.md` y
  `public/images/encuentro/README.md`.

## Convenciones recomendadas
- Mantener nombres ASCII y descriptivos.
- No editar `out/` manualmente (es generado).
- Centralizar copy en `data/content.ts` antes de tocar paginas.
