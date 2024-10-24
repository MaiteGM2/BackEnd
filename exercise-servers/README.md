EJERCICIO 1: Servidor HTTP con NodeJS

Crea un servidor HTTP que responda en las siguientes rutas:

    - "/": Responde con un mensaje de bienvenida.
    - "/about": Responde con un mensaje que describa quién eres.
    - "/error": Devuelve un error 404 con un mensaje personalizado.

EJERCICIO 2: API con Express

Crea un servidor básico con Express que maneje las siguientes rutas:

    - GET /user que lean un archivo llamado user y devuelvan el contenido, si el archivo no existe que devuelva un not found.
    - POST /user que reciba datos JSON y lo graben en un archivo llamado user (si mando multiples posts, debo ir agregando datos al archivo).
    - PUT /user que reciba datos JSON y que actualice el user.
    - DELETE /user que elimine el archivo del user.
    - Maneja una ruta 404 que devuelva un mensaje de error cuando se intente acceder a una ruta inexistente.

CHALLENGE ESPECIAL

1- Guardar en el archivo cada user con la siguiente sintaxis ID|user|password. Mantener un user por linea en el archivo. Ejemplo:

    1|Ezequiel|mySuperSecretPassword
    2|Luiggi|LuiggisSuperSecretPassword
    3|BlaBla|password

2- Cuando hago un get, enviar por query string el ID que quiero obtener, leer el archivo y devolver solo la info de ese user.
3- Cuando hago PUT, mando por body el ID del user a actualizar y actualizo la data solo de ese user en el archivo.
4- Cuando hago delete mando por body el ID del user a remover. Borro del archivo solo el user.