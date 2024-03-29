import { expect } from 'chai';
import axios from 'axios';

describe('API Test for https://gorest.co.in/', () => {
  it('should retrieve only 10 items from the todos endpoint', async () => {
    // Send GET request to retrieve todos
    const response = await axios.get('https://gorest.co.in/public/v2/todos');

    // Assert response status code
    expect(response.status).to.equal(200);

    console.log('Data:', response.data);
    // Assert that only 10 items are returned
    expect(response.data).to.have.lengthOf(10);
  });
  it('should retrieve users with status inactive and ensure correct data', async () => {
    try {
      // Send GET request to retrieve users with status inactive
      const response = await axios.get('https://gorest.co.in/public/v2/users', {
        params: {
          status: 'inactive'
        }
      });

      // Assert response status code
      expect(response.status).to.equal(200);

      // Assert that all users in the response have status inactive
      response.data.forEach(user => {
        expect(user.status).to.equal('inactive');
        console.log('User inactive : ', user)
      });
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      throw error; // Fail the test if there's an error
    }
  });
});
