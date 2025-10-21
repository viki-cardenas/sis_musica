# Prototipos del Proyecto

## Información del Documento

**Última actualización:** [13/10/2025]  
**Versión del prototipo:** [v1.0]  
**Herramienta:** Figma  

---

## Propósito del Prototipo

Este documento centraliza toda la información sobre los **diseños y prototipos** creados en Figma para el proyecto. Sirve como **puente entre el diseño UX/UI y el desarrollo técnico**, facilitando la implementación durante los sprints.

**Objetivos del prototipo:**
- Validar la **experiencia de usuario** antes de desarrollar
- Alinear la **visión del producto** entre todos los miembros del equipo
- Servir como **referencia visual** durante el desarrollo backend y frontend
- Documentar las **decisiones de diseño** tomadas en cada sprint

---

## Enlaces Principales

### Proyecto Principal
**URL:** https://www.figma.com/design/zZK4bNG6YoRS9ERrSnBhPC/Music_Spotify?node-id=1-2&t=RqQdASL2TSE88cEe-1

---

## Estructura del Prototipo

### Sistema de Diseño

**Paleta de colores:**
- **Color primario:** #000000 - Acciones principales
- **Color secundario:** #2B9348 - Elementos complementarios
- **Color de texto:** #D9D9D9 - Llamadas a la acción
- **Color de texto_2:** #000000 - Llamadas a la acción
- **Colores de estado:**
  - Éxito: #70D1E0
  - Error: #B12B38
  - Advertencia: #C0B057
  - Color de enlace: #1E1E1E

**Tipografía:**
- **Principal: Mobile** Inter 24 - Textos y contenido
- **Principal: Desktop** Inter 36 - Textos y contenido
- **Títulos: Mobile** Inter 24  - Encabezados
- **Títulos: Desktop** Inter 36 - Encabezados


**Espaciado:**
- Sistema de **8px grid**
- Espaciado base de mobile: 5px
- Espaciado base de desktop: 5px

---

## Pantallas incluidas:**
### Flujo Principal
1. **Página de bienvenida**
docs/figma/Pantallas-Bienvenida de spotify.svg
2. **Login**
docs/figma/Pantallas-Login.svg
3. **Registro de cuenta**
docs/figma/Pantallas-Registro.svg
4. **Inicio de Sesión**
docs/figma/Pantallas-Iniciar Sesión.svg
5. **Datos del Usuario al Ingresar**
docs/figma/Pantallas-Datos usuario.svg
6. **Notificaciones al ingresar**
docs/figma/Pantallas-Notificaciones.svg
7. **Pantalla principal de Music Spotify**
docs/figma/Pantallas-Pantalla principal.svg
8. **Búsqueda de Músicas de Spotify**
docs/figma/Pantallas-Búsqueda de músicas.svg
9. **Búsqueda de artista**
docs/figma/Pantallas-Búsqueda de artista.svg
10. **Explorar canciones en Spotify**
docs/figma/Pantallas-Explorar canción.svg
11. **Dar me gusta a la canción**
docs/figma/Pantallas-Opción de me gusta.svg
12. **Biografía del artista**
docs/figma/Pantallas-Biografía del artista.svg
13. **Seguimiento al artista**
docs/figma/Pantallas-Siguiendo al artista.svg
14. **Crear Playlist en Spotify**
docs/figma/Pantallas-Crear playlist.svg
15. **Playlist de las Canciones en Spotify**
docs/figma/Pantallas-Playlist de canciones.svg
16. **Cerrando sesión en Spotify**
docs/figma/Pantallas-Cerrar sesión.svg
17. **Volviendo al Inicio en Spotify**
docs/figma/Pantallas-Volver al inicio.svg   

**Interacciones prototipadas:**
- Navegación entre pantallas
- Validación de formularios
- Mensajes de error/éxito
- Estados de carga (loading)


## 🧩 Componentes Reutilizables


**Componentes diseñados:**

#### Botones
- **Botón Principal de Registro** se utiliza para guardar los datos que se han ingresado
- **Botón Principal de Inicio:** se utiliza para ingresar con tus datos(correo y contraseña)
- **Botón Secundario de Continuar con Gmail:** el usuario apreta el botón e ingresa correctamente
- **Botón Terciario de Activar notificaciones:** el usuario apreta el botón de activar notificación y te manda a la pantalla principal
- **Botón Terciario de ahora no:** el usuario apreta el botón de ahora no y te manda a la pantalla principal
- **Botón con Icono:** Combina texto e icono(gmail)
- **Botón con Icono:** Combina texto e icono(teléfono)
- **Botón con Icono:** Combina texto e icono(google)
- **Botón con Icono:** Combina texto e icono(facebook)

#### Iconos
**Icono Spotify:** Al momento de ingresar el usuario podrá ver el icono y saber reconocerlo
**Icono Teléfono:** El usuario pondrá su número de teléfono
**Icono Google:** El usuario sabrá donde poner su correo o contraseña
**Icono Facebook:**El usuario sabrá donde poner su correo, teléfono o contraseña

#### Textos de Spotify
**Texto principal:** Se puede ver el tipo de letra del tamaño en (Bienvenida,Login) 
**Texto secundario:**  Se puede ver el tipo de letra del tamaño (Registro,Inicio Sesión)

#### Imagenes de Spotify
**Imagen de artista:** El usuario puede ver la imagen del artista
**Imagen de explorar canciones:** El usuario puede visualizar las imagenes al explorar canciones

#### Formularios
- **Input text:** Entrada de texto estándar
- **Input password:** Con toggle de visibilidad
- **Select dropdown:** Con búsqueda
- **Checkbox:** Individual y grupos
- **Radio buttons:** Opciones excluyentes
- **Date picker:** Selección de fechas
- **File upload:** Carga de archivos

#### Navegación
- **Navbar:** Barra superior de navegación
- **Sidebar:** Menú lateral colapsable
- **Tabs:** Pestañas para contenido
- **Pagination:** Paginación de listas

#### Feedback
- **Toast notifications:** Mensajes temporales
- **Modals:** Ventanas emergentes
- **Alerts:** Avisos en contexto
- **Loading spinners:** Indicadores de carga
- **Progress bars:** Barras de progreso

#### Visualización de datos
- **Cards:** Tarjetas de información
- **Tables:** Tablas de datos
- **Charts:** Gráficos (si aplica)
- **Stats cards:** Tarjetas de estadísticas

---

### Responsive Design

**Breakpoints definidos:**
- **Mobile:** 430px - 932px
- **Desktop:** 1440px - 1024px

### Accesibilidad

**Criterios implementados:**
- Contraste de colores según WCAG 2.1 AA
- Textos alternativos para imágenes
- Navegación por teclado
- Estados de foco visibles
- Jerarquía semántica de encabezados



## 📋 Checklist de Implementación

### Para el Equipo de Desarrollo

**Antes de comenzar un sprint:**
- [ ] Revisar el prototipo de Figma correspondiente al sprint
- [ ] Identificar todos los componentes necesarios(botones,etc)
- [ ] Validar los endpoints de backend requeridos
- [ ] Confirmar las historias de usuario vinculadas

**Durante el desarrollo:**
- [ ] Consultar especificaciones de diseño (colores, tipografía, espaciado)
- [ ] Implementar estados de los componentes (hover, active, disabled)
- [ ] Validar responsive design en todos los breakpoints
- [ ] Solicitar feedback del diseñador si hay dudas

**Al finalizar:**
- [ ] Comparar implementación con el prototipo
- [ ] Actualizar este documento con notas de implementación
- [ ] Marcar las pantallas como completadas

---

## 🎨 Assets y Recursos

### Imágenes y Gráficos

**Ubicación:** `src/frontend/assets/images/`

**Assets exportados de Figma:**
- Logotipo (SVG, PNG)
- Iconos personalizados (SVG)
- Imágenes de placeholder (PNG, WebP)
- Ilustraciones (SVG)

**Convención de nombres:**
```
[tipo]-[descripcion]-[tamaño].[extension]

Ejemplos:
icon-user-24px.svg
logo-primary-full.svg
img-hero-1920x1080.webp
illus-empty-state.svg
```


### Preguntas Frecuentes

**P: ¿Dónde encuentro las medidas exactas de espaciado?**  
R: En Figma, selecciona cualquier elemento y revisa el panel de propiedades. Todos los espaciados siguen el sistema de 8px grid.

**P: ¿Puedo modificar un componente para un caso específico?**  
R: Consulta primero con el equipo. Si es un caso único, crea una variante. Si es recurrente, actualiza el componente base en Figma.

**P: ¿Cómo exporto assets de Figma?**  
R: Selecciona el elemento → Export → Configura formato y resolución → Export [nombre].

---

## Contacto y Soporte

**Responsable de diseño:** Victoria Cardenas 
**Canal de comunicación:** [Slack, Discord, etc.]  
**Horario de disponibilidad:** 11:00 a 18:00

**Para dudas sobre el prototipo:**
1. Revisar este documento primero
2. Consultar directamente en Figma (comentarios)
3. Preguntar en el canal del equipo
4. Agendar sesión de revisión de diseño

---

## 🔗 Referencias Útiles

**Documentación relacionada:**
- `README.md` - Información general del proyecto
- `docs/sprint-planning/` - Planificación de sprints
- `CONTRIBUTING.md` - Guía de contribución
- `docs/retrospectivas/` - Aprendizajes de los sprints

**Recursos externos:**
- [Guía de Figma](https://help.figma.com)
- [Material Design Guidelines](https://m3.material.io)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)

---

**Última actualización:** 18/10/2025
**Mantenido por:** Victoria Cardenas 
**Versión del documento:** 1.0