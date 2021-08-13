'use strict';

const server = require('../src/server');

const supertest=require('supertest');

const req=supertest(server.app);

describe('validator test' ,()=>{

    it('Error 500 found ', async()=>{
        const res=await req.post('/person');
        expect(res.status).toEqual(500);
    });

    it('get name',async()=>{
        const res=await req.post('/person?name=noor');
        expect(res.status).toEqual(200);
   expect(typeof res.body).toEqual('object');
    });

})