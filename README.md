# DIATOMUSA: Sutil elegancia en tu ritual diario

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

**DIATOMUSA** es una marca de accesorios de baño que fusiona ingeniería de materiales y diseño sereno. Este repositorio contiene el código fuente del sitio web oficial (e-commerce), construido con una arquitectura moderna enfocada en la velocidad, la estética y la conversión.

## 🌊 Narrativa y Visión

> *"El encuentro es una composición de líneas que respiran. Dos trazos que se buscan hasta tocarse, se cruzan y se funden en una misma forma. No representan cuerpos, sino emociones: la calma que llega después del agua, el instante en que el movimiento se detiene y el baño se vuelve refugio."*

Nuestro propósito es convertir un gesto cotidiano en serenidad palpable. Utilizamos **piedra de diatomita**, un material lito-cerámico formado por fósiles marinos, para crear superficies que absorben la humedad al contacto y secan en minutos.

### Valores Clave
- **Secado Visible:** Microcapilaridad que disipa el agua instantáneamente.
- **Higiene:** Menos humedad residual reduce bacterias y olores.
- **Diseño Editorial:** Minimalismo cálido inspirado en el País Vasco.
- **Sostenibilidad:** Material natural, duradero y regenerable.

---

## 🏗️ Estructura del Proyecto

El proyecto está construido sobre **Next.js (App Router)** y **Tailwind CSS**, priorizando un diseño limpio y una arquitectura de componentes reutilizable.

```bash
diatomusa_site/
├── app/                  # Rutas y páginas (Next.js App Router)
│   ├── legal/            # Páginas legales (MDX/Markdown renderizado)
│   ├── layout.tsx        # Layout principal (fuentes, metadatos)
│   └── page.tsx          # Página de inicio (Landing Page)
├── components/           # Componentes de UI
│   ├── ui/               # Componentes base (botones, inputs)
│   ├── Header.tsx        # Navegación principal
│   └── Footer.tsx        # Pie de página y enlaces legales
├── data/                 # Gestión de contenidos (CMS ligero)
│   ├── content.ts        # Textos de UI, navegación y traducciones
│   └── legal/            # Documentos legales en Markdown
├── public/               # Assets estáticos
│   ├── images/           # Fotografía de producto y ambiente
│   └── videos/           # Clips de demostración de microcapilaridad
└── styles/               # Estilos globales y configuración de Tailwind
```

### Tecnologías Destacadas
- **Renderizado de Contenido:** Uso de `react-markdown` para renderizar políticas legales con estilos personalizados (Tipografía *Playfair Display* para títulos).
- **Internacionalización (i18n):** Estructura preparada en `data/content.ts` y `LanguageContext` para soporte multi-idioma (ES/EN).
- **Diseño Responsivo:** Interfaz *Mobile-First* adaptada a cualquier dispositivo.

---

## 🚀 Instalación y Desarrollo

Para ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/JavierVelez88/diatomusa_site.git
    cd diatomusa_site
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Visita `http://localhost:3000` en tu navegador.

---

## 📦 Despliegue

Este proyecto está optimizado para ser desplegado en **Vercel** o cualquier plataforma compatible con Next.js.
El repositorio principal está conectado para despliegues automáticos (CI/CD) desde la rama `master`.

---

© 2026 DIATOMUSA. *Designed in Spain.*
