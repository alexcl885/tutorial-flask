db.usuario.insertMany([
  {
    _id: 2,
    username: "pepe",
    password: "$2a$10$zlD33q.JAxrRPsUGYGY7tedH/dQUn2MmlxQzjO7Y.oqK6rOjJdueq",
    email: "pepe@gmail.com",
    enabled: true,
    tipo: "ADMIN"
  },
  {
    _id: 5,
    username: "admin",
    password: "$2a$10$krlxeZI8Xm.n1fNz7v81Y.yzsHtoMoCnDCsStEAPeGkE9BUOBkwn2",
    email: "admin@correo.com",
    enabled: true,
    tipo: "ADMIN"
  },
  {
    _id: 7,
    username: "obijuan",
    password: "$2a$10$.EJQbCFZtHW1pavBGmMkw.VxOn2or6AL2oPP.8RVvCSqXQA/zwUom",
    email: "darkside@starwars.com",
    enabled: true,
    tipo: "ADMIN",
    roles: ["ADMIN", "USER"]
  },
  {
    _id: 13,
    username: "gerente",
    password: "$2a$10$hWkDEd0V0QgmiffgPcSkoe1.OMq5ew.wl7OFBMqii5XkfxtIwzZ92",
    email: "gerencia@vdc.com",
    enabled: true,
    tipo: "ADMIN"
  }
]);

db.instalacion.insertMany([
  { _id: 7, nombre: "tenis arriba" },
  { _id: 8, nombre: "tenis césped artificial" },
  { _id: 9, nombre: "fútbol" },
  { _id: 10, nombre: "baloncesto" },
  { _id: 11, nombre: "squash" },
  { _id: 13, nombre: "sauna mujeres" },
  { _id: 14, nombre: "pista de pádel" },
  { _id: 16, nombre: "sauna caballeros" }
]);


db.horario.insertMany([
  { _id: 1, instalacion_id: 7, hora_inicio: "08:00:00", hora_fin: "09:00:00" },
  { _id: 2, instalacion_id: 7, hora_inicio: "09:00:00", hora_fin: "10:00:00" },
  { _id: 3, instalacion_id: 7, hora_inicio: "10:00:00", hora_fin: "11:00:00" },
  { _id: 4, instalacion_id: 7, hora_inicio: "11:00:00", hora_fin: "12:00:00" },
  { _id: 5, instalacion_id: 7, hora_inicio: "12:00:00", hora_fin: "13:00:00" },
  { _id: 6, instalacion_id: 7, hora_inicio: "13:00:00", hora_fin: "14:00:00" },
  { _id: 7, instalacion_id: 7, hora_inicio: "14:00:00", hora_fin: "15:00:00" },
  { _id: 8, instalacion_id: 7, hora_inicio: "15:00:00", hora_fin: "16:00:00" },
  { _id: 9, instalacion_id: 7, hora_inicio: "16:00:00", hora_fin: "17:00:00" },
  { _id: 10, instalacion_id: 7, hora_inicio: "17:00:00", hora_fin: "18:00:00" },
  { _id: 11, instalacion_id: 7, hora_inicio: "18:00:00", hora_fin: "19:00:00" },
  { _id: 12, instalacion_id: 7, hora_inicio: "19:00:00", hora_fin: "20:00:00" },
  { _id: 13, instalacion_id: 7, hora_inicio: "20:00:00", hora_fin: "21:00:00" },
  { _id: 14, instalacion_id: 7, hora_inicio: "21:00:00", hora_fin: "22:00:00" },
  { _id: 15, instalacion_id: 7, hora_inicio: "22:00:00", hora_fin: "23:00:00" },
  { _id: 16, instalacion_id: 8, hora_inicio: "08:00:00", hora_fin: "09:00:00" },
  { _id: 17, instalacion_id: 8, hora_inicio: "09:00:00", hora_fin: "10:00:00" },
  { _id: 18, instalacion_id: 8, hora_inicio: "10:00:00", hora_fin: "11:00:00" },
  { _id: 19, instalacion_id: 8, hora_inicio: "11:00:00", hora_fin: "12:00:00" },
  { _id: 20, instalacion_id: 8, hora_inicio: "12:00:00", hora_fin: "13:00:00" },
  { _id: 21, instalacion_id: 8, hora_inicio: "13:00:00", hora_fin: "14:00:00" },
  { _id: 22, instalacion_id: 8, hora_inicio: "14:00:00", hora_fin: "15:00:00" },
  { _id: 23, instalacion_id: 8, hora_inicio: "15:00:00", hora_fin: "16:00:00" },
  { _id: 24, instalacion_id: 8, hora_inicio: "16:00:00", hora_fin: "17:00:00" },
  { _id: 25, instalacion_id: 8, hora_inicio: "17:00:00", hora_fin: "18:00:00" },
  { _id: 26, instalacion_id: 8, hora_inicio: "18:00:00", hora_fin: "19:00:00" },
  { _id: 27, instalacion_id: 8, hora_inicio: "19:00:00", hora_fin: "20:00:00" },
  { _id: 28, instalacion_id: 8, hora_inicio: "20:00:00", hora_fin: "21:00:00" },
  { _id: 29, instalacion_id: 8, hora_inicio: "21:00:00", hora_fin: "22:00:00" },
  { _id: 30, instalacion_id: 8, hora_inicio: "22:00:00", hora_fin: "23:00:00" }
]);
