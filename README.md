# monorepo Javascript + NextJS + UI

Este monorepo contiene un ejemplo usando Next con Javascript, logrando utilizar correctamente el paquete `ui` (`packages/ui`)

Con la finalidad de realizar una prueba de concepto, logrando importar un componente ubicado en otro lugar hacia el proyecto principal.

Para el caso del proyecto en Next `apps/web-next`, el punto clave fue agregar el archivo `next.config.js`y dentro agregar:

```
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

El comando ejecutara todos los scripts "dev", que se encuentren bajo los proyectos de `apps` como los de `packages` definidos en sus `package.json` correspondientes, de momento solo el proyecto `web-next` posee ese script y cuando lo ejecutes podrás ver el sitio web en la url: http://localhost:3000

```cli
npm run dev
```


## Publicar el paquete

por definir...
