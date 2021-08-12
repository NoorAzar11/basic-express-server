'use strict';

const server=require('../src/server');
const supertest=require('supertest');
const request=supertest(server.app);


describe('will serve as your server ',()=>{

    it('handles not found requset 404 try again',async()=>{
    const response=await request.get('/tryagain');
    expect(response.status).toEqual(404);
});


// it('handles not found requset try again 2',async()=>{
//     const response=await request.get('/person');
//     expect(response.status).toEqual(404);
// });

it('handles not found requset try again 2',async()=>{
    const response=await request.post('/person');
    expect(response.status).toEqual(404);
});




})