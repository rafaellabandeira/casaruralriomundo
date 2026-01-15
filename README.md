# Cabañas Río Mundo - Sitio Web

Sitio web moderno y responsivo para las cabañas rurales "Río Mundo" en Riópar, Albacete.

## Características

✨ **Diseño Mobile First**
- Completamente responsivo desde mobile hasta desktop
- Optimizado para todas las pantallas

📱 **Carrusel de Fotos**
- Carrusel interactivo con autoplay
- Navegación por botones o gestos touch (deslizar)
- Indicadores visuales de posición

🎨 **Interfaz Moderna**
- Tipografía mejorada y legible
- Paleta de colores coherente
- Transiciones y animaciones suaves

💬 **Botón WhatsApp Flotante**
- Con icono SVG profesional
- Acceso rápido al contacto directo
- Disponible en todas las páginas

## Estructura del Proyecto

```
casaruralriomundo/
├── index.html                    # Página principal
├── aviso-legal.html             # Información legal
├── privacidad.html              # Política de privacidad
├── cookies.html                 # Política de cookies
├── cabana-campanilla.html       # Detalles cabaña Campanilla
├── cabana-el-tejo.html          # Detalles cabaña El Tejo
├── css/
│   ├── global.css               # Estilos globales
│   ├── index.css                # Estilos página principal
│   └── cabanas.css              # Estilos páginas de cabañas
├── js/
│   └── main.js                  # Funcionalidad del carrusel
└── images/                      # Fotos del sitio
```

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsivo con mobile first
- **JavaScript Vanilla** - Carrusel interactivo
- **SVG** - Iconos escalables

## Cómo Ver el Sitio

### Opción 1: Servidor Python local
```bash
cd casaruralriomundo
python3 -m http.server 8000
# Luego abre: http://localhost:8000
```

### Opción 2: Abrir directamente en el navegador
```bash
firefox index.html
# o tu navegador favorito
```

## Características Principales

### 1. Carrusel de Fotos
- 21 imágenes de calidad
- Autoplay cada 5 segundos
- Navegación por botones (prev/next)
- Desliz tactil en móviles
- Indicadores de posición actualizados en tiempo real

### 2. Botón de WhatsApp
- Posicionado de forma fija en la esquina inferior derecha
- Hover effect con animación
- SVG profesional en lugar de emoji
- Acceso rápido al número: +34 620 419 157

### 3. Diseño Responsivo
- **Mobile** (< 768px): Una columna, fuentes optimizadas
- **Tablet** (768px - 1023px): Dos columnas
- **Desktop** (> 1024px): Diseño completo y espacioso

## Notas Técnicas

- Todos los estilos están organizados en archivos CSS separados
- El JavaScript es vanilla (sin dependencias)
- Las imágenes están optimizadas en la carpeta `/images`
- El sitio es completamente accesible

## Próximas Mejoras Sugeridas

- [ ] Formulario de contacto con validación
- [ ] Mapa interactivo de ubicación
- [ ] Galería de fotos con modal/lightbox
- [ ] Animaciones de scroll
- [ ] Chat en vivo

---

Desarrollado para Cabañas Río Mundo | Riópar, Albacete
