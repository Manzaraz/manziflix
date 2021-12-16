## Inicializcion del proyecto:

`npx create-react-app manziflix --template redux`

### Proceso de limpieza.

### Importar las librerias

@mui/material styled-components firebase, react-router-dom, react-uuid, axios

### App.js - layout inicial

    - Creamos las rutas mediante react-router-dom
    - Renderizamos Login o el resto de la app condicionada a la existencia del usuario

### Estilos

    - Usamos el Hook de MU, useStyles, para crear una infraestructura que nos permita asignar estilos a cada uno de los componentes

### Crear las carpetas de los componentes: componentes & pages

    - Creamos la infraestructura báscia de los componentes de /pages: Home, Login, Paypal, Profile, SignUp.
    - Creamos la infraestructura báscia de los componentes de /components: Banner, Header, Plans, Row.

### Estilos en los componentes de /pages

    - Patrón para añadir la infraestrucutra de estilos a todos los components de /pages
    - Patrón para añadir la infraestrucutra de estilos a todos los components de /components

### Trabajando con el Header

    - Importamos el Logo
    - Añadimos al AppBar una clase transparente dinámica mediante el estado de la variable Show (la cual depende del scroll vertical)
    - Añadimos las rutas a Logo y al Avatar

### Trabajando con el Banner

    - Se importó una imagen como backgroundImage.
    - En React, tenemos que acompañar las backgroundImages con estilos como object-fit, bgSize y bgPosition.
    - Posicioné el titulo de la película, con botones y descripción.
    - A la descripción, como viene de api tenemos que truncarla  para asegurar que quepa en el espacio asigando con truncate.
    - Añadí un div vacio para oscurecer la imagen hasata fusionarla con el resto de la UI, que es oscuro.

### Trabajamos con el Login

    - Se creó un botón con Styled-Components "FlixBtn", el cual está customizado para variar longitud, color y otros estilos pasándole props...
    - Styled-Components para variar los estilos del Input o del Botón, pero par su pocionamiento, le damos una clase normal.
    - Se creó un Input personalizado con Styled-Componets "FlixInput", el cual ya era un componente de Mui de InputBase.

### Trabajando con el pages/Profile

    - Trabajamos con la distribución
    - <Plans>Texto</Plans>
        `const Plans = ({children}) => return(...)`
    - Paso props {color, size, radius} condicionales al <FlixBtn>

### Trabajando en el pages/SignUp

    - Renderizado condicional con signIn, de ser falsa desplegamos el formulario
