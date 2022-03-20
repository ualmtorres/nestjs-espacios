<p align="center">
<a href="https://creativecommons.org/licenses/by-nc/4.0/deed" target="_blank"><img src="https://img.shields.io/badge/license-CC--BY--NC-green" alt="Package License" /></a>
</p>

## Descripción

Repositorio de un ejemplo de API de gestión de espacios como material de apoyo del [Tutorial de testing de APIs NestJS](https://ualmtorres.github.io/SeminarioTesting/).

---
**NOTA**

La rama `base` contiene la base del proyecto preparado para poder seguir el tutorial desde cero.

---

## Paquetes incluidos

`typeorm sqlite3 @nestjs/config @nestjs/swagger swagger-ui-express @nestjs/jwt passport passport-jwt @nestjs/passport class-validator class-transformer reflect-metadata`

## Configuración

Los valores predeterminados de configuración de la aplicación (secreto del JWT, puerto en el que se sirve la API, configuración de la base de datos, ...) están almacenados en el archiVo `.env`.

## Generación del token JWT

---
**NOTA**

Para probar la API mediante Swagger en `<host>:<port>/docs` es necesario un JWT. Puedes generar uno en [jwt.io](https://jwt.io) incluyendo el secreto configurado en el archivo `.env`.

---

## Instalación

```bash
$ npm install
```

## Ejecución de la aplicación

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Contacto

- Autor - [Manuel Torres](https://kamilmysliwiec.com)
- Twitter - [@ualmtorres](https://twitter.com/nestframework)

## Licencia

Este proyecto está bajo la licencia [CC-BY-NC]([LICENSE](https://creativecommons.org/licenses/by-nc/4.0/deed)).
