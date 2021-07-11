const faker = require('faker');
const express = require('express');
const app = express();
const PORT = 8000;

//classes
/* 
class Usuario{
    constructor(){
        this.carneDeIdentidad = faker.datatype.number();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroDeTelefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.contrasenha = faker.internet.password();
    }
}

const usuario = new Usuario();
//console.log(usuario);

class Direccion{
    constructor(){
        this.calle = faker.address.streetAddress();
        this.ciudad = faker.address.city();
        this.estado = faker.address.state();
        this.codigoPostal = faker.address.zipCode();
        this.pais = faker.address.country();
    }
}

const direccion = new Direccion();
//console.log(direccion);

class Empresa{
    constructor(){
        this.carneDeEmpresa = faker.datatype.number();
        this.nombre = faker.company.companyName();
        this.direccion = direccion;
    }
}

const empresa = new Empresa();
//console.log(empresa);
 */

//With functions
const usuario = () => ({
    carneDeIdentidad : faker.datatype.number(),
    primerNombre : faker.name.firstName(),
    apellido : faker.name.lastName(),
    numeroDeTelefono : faker.phone.phoneNumber(),
    email : faker.internet.email(),
    contrasenha : faker.internet.password()
})
const Usuario = usuario();

const direccion = () => ({
    calle : faker.address.streetAddress(),
    ciudad : faker.address.city(),
    estado : faker.address.state(),
    codigoPostal : faker.address.zipCode(),
    pais : faker.address.country()
})
const Direccion = direccion();

const empresa = () => ({
    carneDeEmpresa : faker.datatype.number(),
    nombre : faker.company.companyName(),
    direccion : Direccion

})
const Empresa = empresa();

app.get('/api/users/new', (req, res) => {
    res.json(Usuario);
})

app.get('/api/companies/new', (req, res) => {
    res.json(Empresa)
})

app.get('/api/user/company', (req, res) => {
    const newUser = {Usuario, Empresa};
    res.json(newUser);
})

app.listen( PORT, ()=>{
    console.log(`1 : Server lock and loading at PORT: ${PORT}`)
})