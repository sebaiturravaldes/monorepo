# monorepo

monorepo Javascript + React + ui

Este monorepo contiene dos ejemplos, uno con React y otro con Next, ambos proyectos en  Javascript, logrando utilizar correctamente el paquete `ui`.

Con la finalidad de realizar una prueba de concepto, logrando importar un componente ubicado en otro lugar hacia el proyecto principal.

Para el caso del proyecto en Next `apps/web-next`, el punto clave fue agregar el archivo `next.config.js`y dentro de el agregar:
````
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"]
};
```

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando:

```cli
npm install
```

## Ejecución en desarrollo

Para ejecutar el proyecto en modo desarrollo, debes ejecutar el siguiente comando:

```cli
npm run dev
```

## Publicar el paquete
...