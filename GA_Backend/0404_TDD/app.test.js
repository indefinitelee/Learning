const app = require('./app');
const request = require('supertest');


describe('test the root path', () => {
	it('should rerspond to GET with an array of todos', (done) => {
	// superrtest magic
	request(app).get('/').then((response) => {
		expect(response.statusCode).toBe(200); 
		expect(response.body.todos).toEqual( ['shower', 'feed kitten'])
		done(); // from jest
		})
	})
})

describe('Sorting as a service', () => {
	it('should respond to POST method with a sorted array', (done) => {
		request(app).post('/sort')
			.send({"numbers": [2,3,1] } )
			.then((response) => {
				expect(response.statusCode).toBe(201); 
				expect(response.body.sorted).toEqual([1,2,3]);
				done();
		})
	})
});