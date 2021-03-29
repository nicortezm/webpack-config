// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(4).then(console.log);

CRUD.crearUsuario({
    name: 'Nicolas',
    job: 'Pescador'
}).then(console.log);