
---
### __Paso 1: Backend__




_Tenemos el boton de registar Google_

![grafico1](https://i.imgur.com/PNU0e38.png)

### __Paso 2: Ingreso a Cuentas de Google__

_Mis cuentas de google_

![grafico1](https://i.imgur.com/Gqbu2Gw.png)

_Se ingresa el chat en tiempo real_

![grafico1](https://i.imgur.com/IXJWUJM.png)

_Usuarios registrados mediante Google al Chat_

![grafico1](https://i.imgur.com/KJg2F3h.png)




#  Chat en Tiempo Real con Sockets Laboratorio 

**Estudiante:** _Ordoñez Cabrera Kevin Lenin_ 

**Docente:**  _Ing. Paulo Galarza_

**Fecha de entrega:** _09/07/2025_ 

**Carrera/Curso:**  _Ingeniería en Tecnologías de la Información / Aplicaciones Distribuidas_

**Título:**  _Implementación de Autenticación con Google OAuth2 y Chat en Tiempo Real Usando Socket.IO_

### __RESUMEN__


La presente práctica tuvo como finalidad implementar un sistema funcional de autenticación mediante Google OAuth2 integrado a una aplicación de chat en tiempo real. Para ello, se configuraron correctamente los permisos en Google Cloud Console, se desarrolló la estrategia de autenticación con Passport.js y se generó un token JWT para el control de sesión. Posteriormente, se utilizó Socket.IO para establecer la comunicación en tiempo real, permitiendo a los usuarios enviar y recibir mensajes una vez autenticados. El sistema fue desplegado de manera local, logrando la integración entre backend, frontend y base de datos MongoDB. Finalmente, se mostró el correo del usuario activo dentro del entorno del chat, cumpliendo satisfactoriamente con los objetivos propuestos.

**Palabras clave:** Autenticación, OAuth2, Socket.IO



### __INTRODUCCIÓN__

En el contexto del desarrollo de aplicaciones distribuidas, la implementación de sistemas seguros y funcionales de autenticación es una necesidad fundamental. Esta práctica abordó la integración del protocolo OAuth2 de Google con una aplicación web que permite la comunicación en tiempo real. Se desarrolló una arquitectura completa en la que el manejo del flujo de autenticación se vincula con la generación de sesiones y la identificación de usuarios. Adicionalmente, se demostró el uso práctico de WebSockets con Socket.IO para el envío y recepción de mensajes en tiempo real. El trabajo requirió una planificación detallada del entorno de desarrollo, incluyendo la conexión con MongoDB, la definición de esquemas de datos y la gestión de rutas seguras.

### __OBJETIVOS__

Configurar una aplicación web para utilizar autenticación mediante Google OAuth2.

Integrar la autenticación con un sistema de chat en tiempo real utilizando Socket.IO.

Implementar un backend con Express y una base de datos MongoDB para la gestión de usuarios y mensajes.

Mostrar en tiempo real el correo del usuario autenticado dentro del chat.

### __MARCO TEÓRICO__

OAuth2 es un protocolo de autorización estándar que permite a las aplicaciones obtener acceso limitado a cuentas de usuarios en un servicio HTTP, como Google. A través del uso de "tokens" se gestiona el acceso sin exponer contraseñas. Passport.js es un middleware de autenticación para Node.js que facilita la integración con múltiples estrategias, incluyendo Google OAuth2.

Por otro lado, Socket.IO es una biblioteca de JavaScript que permite la comunicación bidireccional en tiempo real entre clientes y servidores. Se utiliza ampliamente para chats, notificaciones y aplicaciones colaborativas. Su integración en esta práctica permite que los usuarios autenticados puedan interactuar entre ellos en tiempo real.


### __DESCRIPCIÓN DEL PROCEDIMIENTO__

Se creó un proyecto en Google Cloud Console y se habilitó el API de OAuth2, configurando el URI de redirección.

En el backend, se implementó la estrategia de autenticación con Passport.js utilizando passport-google-oauth20.

Se configuró Express con rutas protegidas, uso de JWT y persistencia de usuarios en MongoDB.

Se creó una interfaz frontend para iniciar sesión, acceder al chat y visualizar los mensajes enviados.

Se integró Socket.IO en el backend y frontend para gestionar el flujo de mensajes y mostrar usuarios conectados.

Se desarrolló el sistema de visualización de mensajes con identificación de emisor (usuario autenticado).

### __ANÁLISIS DE RESULTADOS__

La aplicación resultante permitió:

Registrar usuarios mediante sus cuentas de Google.

Ver en pantalla el correo electrónico del usuario conectado.

Emitir mensajes de texto a través de WebSockets en tiempo real.

Visualizar en el chat los mensajes con identificador de emisor y hora.

Controlar el número de usuarios conectados en el momento.

El sistema fue probado exitosamente con diferentes cuentas, comprobándose que la autenticación y el flujo de mensajes funcionaban correctamente en todos los casos.


### __GRÁFICOS O FOTOGRAFÍAS__


A continuación, se incluirán cinco imágenes fundamentales que muestran:

_Flujo de autenticación con Google._

![grafico1](https://i.imgur.com/6Bg3Ymb.png)

_Consola mostrando conexión de usuarios._

![grafico1](https://i.imgur.com/6Bg3Ymb.png)

_Interfaz del chat con mensajes enviados._

![grafico1](https://i.imgur.com/6Bg3Ymb.png)

_Visualización del correo del usuario en tiempo real._

![grafico1](https://i.imgur.com/6Bg3Ymb.png)

_Múltiples usuarios conectados simultáneamente._

![grafico1](https://i.imgur.com/6Bg3Ymb.png)


### __DISCUSIÓN__


La práctica demostró cómo la integración de servicios externos como Google OAuth2 puede simplificar la autenticación de usuarios sin comprometer la seguridad. Al complementar esta funcionalidad con Socket.IO, se logró construir un sistema moderno de mensajería en tiempo real. La validación mediante JWT permitió mantener la identidad del usuario a lo largo de toda la sesión. Uno de los retos principales fue asegurar que el flujo de redirección coincidiera exactamente con lo configurado en Google Cloud, evitando errores 400. Además, se requirió adaptar los esquemas de la base de datos para contemplar tanto usuarios registrados por formulario como los provenientes de Google.


### __CONCLUSIONES__


Se logró implementar satisfactoriamente un sistema de login con Google.

La comunicación en tiempo real con Socket.IO funcionó de forma efectiva.

Se evidenció la importancia de una buena gestión de rutas y estrategias de autenticación.

La integración entre frontend, backend y base de datos fue fluida y coherente.

