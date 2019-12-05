Esta prueba está hecha con React (Una biblioteca de JavaScript)
Pasos a seguir de este ejercicio:

Fase 1: Creación del proyecto

- He instalado React con: create-react-app- He instalado React Google Maps (npm install --save react-google-maps), es una librería para poder manejar mapas de google maps en React- Una vez intaslado esto, empecé a limpiar archivos y a trabajar en un repositorio local y en Github.

Fase 2: Pintado del mapa

- Siguiendo la documentación de react-google-maps (https://tomchentw.github.io/react-google-maps/#introduction) he creado un componente MyMapComponent en el que he importado google map para poder renderizar el mapa y que lo pinte en pantalla.Tiene como keys un defaultZoom, para que pinte el mapa más lejos o más cerca en primera instancia al ser cargado y un defaultCenter, para que ubique el mapa en un lugar en concreto en este caso (Madrid). <GoogleMap defaultZoom={10} defaultCenter={{lat: 40.416775, lng: -3.70379}} >

- He creado un componente App, donde he importado withScriptjs y withGoogleMap (que carga diferentes librerías para que el mapa se cargue y funcione de forma correcta).- Primero he guardado en una constate "WrappedMap", el mapa que he creado en el componente MyMapComponent.js, que después he importado en App.js- Para que el mapa se cargue y funcione correctamente hay que registrarse en Google Map y conseguir una API key que guardo en otra constante como un objeto.

const WrappedMap = withScriptjs(withGoogleMap(MyMapComponent));const CLAVE_API = { key: 'AIzaSyBH9ARmSyvRWNx79up1lAvndPz0xYhET5c', language: 'es',};

- Una vez realizado esto, he creado un componente WrappedMap donde he añadido por props la URL de Google Maps que nos facilita la documentación + la clave Api que necesita. con otras propiedades.

<WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${CLAVE_API.key}`} loadingElement={<div style={{height: `100%`}} />} containerElement={<div style={{height: `100%`}} />} mapElement={<div style={{height: `80%`}} />} batteryFilter={batteryFilter} clientFilter={clientFilter} />

Fase 3: Añadir Markers y localizarlos en el mapa

- En MyMapComponent he importado las "funciones" Marker e infoWindow, para poder añadir las localizaciones en el mapa y una vez que clickemos en una, aaparezca un pop up donde sale información detallada de cada vehículo.

- Aquí también se han importado los 2 archivos .json facilitados por el cliente (lime y bird) para poder extraer los datos y añadirlos a su marker correspondiente.

Para ello se ha realizado un map y se han ido insertando los datos en cada marker a través de props. A continuación se ha añadido una "función escuchadora" donde se indentifica cada marker guardándolo en el estado e indicándole que si ese marker está activo se despliegue una ventana con la infomación que tenemos guardada. Si hacemos click en la X de cierre la ventana del marker se cierra.

Fase 4: MarkerClusterer, agrupar Markers

- Este componente engloba a los diferentes Markers , funciona iterando los marcadores y cada marcador se suma a un grupo más cercano si está dentro de un mínimo de pixeles. Pasamos propiedades por props y una función que recopila todos los markers y los agrupa.

Fase 5: Filtrado

- Aquí he creado dos Select uno para filtrar por Nivel de bateria y otro por tipo de clienteAl cargar el mapa lo que aparece son todos los markers y dependiendo de la opción que elija el usuario aparecen filtrados por nivel de bateria o tipo de cliente.

- Desde App paso por props a Filter, ClientFilter y WrappedMap La info que guardo en el estado al filtrar los datos y la función que me identifica el elemento seleccionado (el filtro elegido por el usuario)- En MyMapComponent recojo la info del estado filtro por el nivel de bateria, dependiendo del cliente que se elija me recoge y me pinta una información u otra
