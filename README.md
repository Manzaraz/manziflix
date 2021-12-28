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

### Proceso de SignIn/SignUp

    • Habilité una cuenta de Firebase.
    • Inicializado el objeto auth()
    • signUp email y password
    • signIn email y password

### Redux

    • Habilitamos el slice userSlice para manejar el usuario en el componente que lo solicite.

### Persistencia

    - Se añadió un eventListener en App, el cual trae el objeto auth de firebase, el que escuchará cada vez que cambia entonces vuelve a inyectar el usuario en la capa de datos de userSlice de redux
    - De esta manera recordamos a la app que ya estamos adentro aunque refresquemos la página

### Requests

    - Con axios nos conectamos a los endpoints para conectarnos al API de TMDB.
    - Creamos Requests para construir todos los endpoints para obtener la data con su API_KEY
    - Construir el componente Row

### Se hizo todos los requests a la API de TheMovieDB

    - con useEffect, se hicieron llamadas asíncronas mediante una funcion getMovies, la cual me devuelve un json.results, que es un array con todas las películas.

### Implementacion de la pasarela de pago con Paypall

    - al componente paypal lo llamamos cuando clickeamos en uno de los botones de los planes de subscripcion. Estos botones nos redirigen a la ruta route/checkout
    - En checkout vemos el componente Paypal, que contiene el código de React necesario para implementar la integracion de la App de react con la de Paypal.
    -
