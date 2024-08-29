# ***Función Throttle***

Construcción e implementación de una Función Throttle en TypeScript
se usa Jest para las pruebas.

***Descripción***
Las funciones throttle fijan un máximo de ejecuciones por intervalo de tiempo. Por ejemplo, permiten la ejecución de esta función un máximo de una vez cada 5000 ms.


**Instalación**

Para instalar y configurar este proyecto en tu entorno local, sigue estos pasos:

1.	Clona el repositorio:
   
**```gh repo clone vortex11211/2.2-Rene-Hernandez-Throttle```**

**```cd 2.2-Rene-Hernandez-Throttle```**

3.	Instala las dependencias:

  **```npm install```**
  
Para compilar y ejecutar la aplicación, utiliza los siguientes comandos:

Compila el proyecto

**```npx tsc```**

## HTML
Puedes ver un ejemplo de su uso en html ejecutando el archivo

**```start HTML/index.html```**

En este ejemplo verás como la posición del cursor se muestra en la pantalla y se actualiza utilizando la función Throttle, dependiendo de la cantidad de ms que indiques

## TEST

Para ejecutar las pruebas unitarias utiliza el siguiente comando:

**```npx jest```**

las pruebas están ubicadas en la carpeta **_test** y utilizan Jest,
asegúrate de que tienes instalado jest types: 

**```npm install --save-dev jest ts-jest @types/jest```**


**CLI**
Asegurate de tener instaladas las dependencias:
**``` npm instal ts-node --save-dev```**

Para ejecutar el CLI, dentro de la carpeta CLI usa

**```npx tsc index.ts```**
Al inicio se mostrará un mensaje de bienvenida y se solicita escribir un texto. mismo que se mostrará nada más dar enter en la consola.
Esto da inicio a la función throttle, por lo que si se escriben sucesivamente mensajes antes de 5 segundos, no se devolverá el mensaje hasta que se cumpla la condición de los 5 segundos.

Para salir del CLI pulsa simultaneamente las teclas ```CTRL + C```.

**Contribuir**

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1.	Haz un fork del proyecto.
   
2.	Crea una rama para tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
   
3.	Haz commit de tus cambios (git commit -am 'Añadir nueva funcionalidad').
   
4.	Empuja la rama (git push origin feature/nueva-funcionalidad).
   
5.	Abre un Pull Request.

    
**Licencia**
MIT 

**Contacto**

Rene Hdz **@vortex11211** - mcrohs@hotmail.com

Link del Proyecto: https://github.com/vortex11211/2.2-Rene-Hernandez-Throttle.git