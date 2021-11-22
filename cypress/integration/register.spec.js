import faker from "faker";
// import regexPattern from "../schemas/regexSchema";
// import RandExp from "randexp";

describe("Register", () => {
  const name = faker.name.findName();
  const email = faker.internet.email();
  const password = "C123!aer@";

  it("Should register successfully", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("input[placeholder=Nome]").type(name);
    cy.get("input[placeholder=Email]").type(email);
    cy.get("input[placeholder=Senha]").type(password);
    cy.get("input[placeholder='Confirmar senha']").type(password);
    cy.contains("Cadastrar").click();

    cy.url().should("equal", "http://localhost:3000/login");
  });

  it("Should alert user if name is incorrect", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("input[placeholder=Nome]").type(" ");
    cy.get("input[placeholder=Email]").type(email);
    cy.get("input[placeholder=Senha]").type(password);
    cy.get("input[placeholder='Confirmar senha']").type(password);
    cy.contains("Cadastrar").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Por favor, insira um nome válido`);
    });
  });

  it("Should alert user if email is incorrect", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("input[placeholder=Nome]").type(name);
    cy.get("input[placeholder=Email]").type("email@email");
    cy.get("input[placeholder=Senha]").type(password);
    cy.get("input[placeholder='Confirmar senha']").type(password);
    cy.contains("Cadastrar").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Por favor, insira um email válido`);
    });
  });

  it("Should alert user if password is incorrect", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("input[placeholder=Nome]").type(name);
    cy.get("input[placeholder=Email]").type(email);
    cy.get("input[placeholder=Senha]").type("123456");
    cy.get("input[placeholder='Confirmar senha']").type(password);
    cy.contains("Cadastrar").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Por favor, insira uma senha válida`);
    });
  });

  it("Should alert user if confirmed password is incorrect", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("input[placeholder=Nome]").type(name);
    cy.get("input[placeholder=Email]").type(email);
    cy.get("input[placeholder=Senha]").type(password);
    cy.get("input[placeholder='Confirmar senha']").type("13456");
    cy.contains("Cadastrar").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`As senhas não coincidem!`);
    });
  });

  it("Should return status code 406 if any parameter is incorrect", () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.request({
      method: "POST",
      url: "http://localhost:4000/register",
      body: {
        name: name,
        email: email,
        password: password,
        confirmedPassword: "123456",
      },
      failOnStatusCode: false,
    }).then((response) => {
      // eslint-disable-next-line jest/valid-expect
      expect(response.status).to.equal(406);
    });
  });

  it("Should return status code 409 if user is already registered", () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.request({
      method: "POST",
      url: "http://localhost:4000/register",
      body: {
        name: name,
        email: email,
        password: password,
        confirmedPassword: password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      // eslint-disable-next-line jest/valid-expect
      expect(response.status).to.equal(409);
    });
  });

  it("Should return status code 201 if request is successfull", () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.request({
      method: "POST",
      url: "http://localhost:4000/register",
      body: {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: password,
        confirmedPassword: password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      // eslint-disable-next-line jest/valid-expect
      expect(response.status).to.equal(201);
    });
  });
});
