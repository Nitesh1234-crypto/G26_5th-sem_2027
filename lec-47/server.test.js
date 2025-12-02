const User = require("./model/user.model");
const app = require("./server");
const request = require("supertest");
jest.mock("./model/user.model")
describe("POST /api/users/register",()=>{
    it("should return user already exist if email is nitesh@gmail.com",async ()=>{
        User.findOne.mockResolvedValueOnce(true);
        let response = await request(app).post("/api/users/register").send({
            name:"Nitesh",
            email:"nitesh@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("user already exist")
    })
    it("should create a new user with email nitesh8174@gmail.com",async()=>{
        User.findOne.mockResolvedValueOnce(false);
        User.create.mockResolvedValue({
            name:"Nitesh",
            email:"Nitesh8174@gmail.com",
            password:"1234"
        })
        let response = await request(app).post("/api/users/register").send({
            name:"Nitesh",
            email:"nitesh8174@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("user registered successfully");
        expect(response.body.data).toEqual({
            name:"Nitesh",
            email:"Nitesh8174@gmail.com",
            password:"1234"
        })  
    })
})