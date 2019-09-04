const request = require("supertest");

const server = require("./server");

describe("hobbits server", () => {
  // ==================== GET TESTS ====================
  describe("GET /hobbits", () => {
    it("returns status code 200", async () => {
      let response = await request(server).get("/hobbits");
      expect(response.status).toBe(200);
    });
    // =============== ALTERNATE METHOD ===============
    // it("returns 200 OK", () => {
    //   return request(server)
    //     .get("/hobbits")
    //     .then(res => {
    //       expect(res.status).toBe(200);
    //     });
    // });

    it("returns JSON", async () => {
      let response = await request(server).get("/hobbits");
      expect(response.type).toBe("application/json");
      // =============== ALTERNATE METHOD ===============
      //   expect(response.type).toMatch(/json/);
    });

    it("returns array", async () => {
      let response = await request(server).get("/hobbits");
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("POST /hobbits", () => {
    // it("returns status code 201", async () => {
    //   let response = request(server)
    //     .post("/hobbits")
    //     .send(hobbit);
    // });

    it("returns status code 201", async () => {
      let response = await request(server)
        .post("/hobbits")
        .send({ name: "test" });
      expect(response.status).toBe(201);
    });

    it("returns status code 500", async () => {
      let response = await request(server)
        .post("/hobbits")
        .send({ name: null });
      expect(response.status).toBe(500);
    });
  });
});
