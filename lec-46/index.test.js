const app = require("./index");
const request = require("supertest");

describe("POST /sum",()=>{
    it("should return addition of two number",async()=>{
       let response= await request(app).post("/sum").send({
        a:2,
        b:3
       })
       expect(response.body.data).toBe(5);
    })
    it("should return all argument must be passed",async()=>{
       let response = await request(app).post("/sum").send({
        a:2,
       })
       expect(response.body.message).toBe("invalid argument") 
    })
    
    /**
     * reponse={
     * body:{
     *  api response
     * }
     * }
     */
})