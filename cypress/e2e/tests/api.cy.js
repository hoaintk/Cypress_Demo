describe('Intercept API login - reqres.in', () => {
    it('Intercept login request and assert response', () => {
      // Intercept API POST /login
      cy.intercept('POST', 'https://reqres.in/api/login').as('loginApi');
  
      // Gửi request trực tiếp (không cần UI)
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        }
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('token');
      });
  
      // (Hoặc nếu bạn test từ UI → phải có 1 form login dùng endpoint này rồi click login mới dùng được intercept)
      // Sau đó:
      cy.wait('@loginApi').its('response.statusCode').should('eq', 200);
    });
  });
  