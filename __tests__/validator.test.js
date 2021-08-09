'use strict';

const server = require('../src/server');

const supertest=require('supertest');

const req=supertest(server.app);

describe('validator test' ,()=>{

    it('Checks the query string for a name ', async()=>{
        const res=await req.get('/person?name=noor');
        expect(res.status).toEqual(200);
    });

    it('get name',async()=>{
        const res=await req.get('/person?name=noor');
   expect(res.body).toEqual({name: 'noor'});
    });

})