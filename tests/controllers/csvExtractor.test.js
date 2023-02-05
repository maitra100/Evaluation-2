const csvControllers = require('../../src/controllers/csvExtractor');
const csvServices = require('../../src/services/csvExtractor');

describe('Test for checking if csv file is extracted', () => {
  it('should return csv data if end point is correct', async () => {
    jest.spyOn(csvServices, 'getCsvServices').mockResolvedValue({ data: 'data' });
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    const data = await csvControllers.getCsvController({
      body: {
        urlLink: 'link',
      },
    }, mockRes);
    expect(mockRes.send).toBeCalledWith('fileCreated');
    expect(mockRes.status).toBeCalledWith(201);
  }),
  it('should return csv data if end point is correct', async () => {
    jest.spyOn(csvServices, 'getCsvServices').mockResolvedValue(undefined);
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    const data = await csvControllers.getCsvController({
      body: {
        urlLink: 'link',
      },
    }, mockRes);
    expect(mockRes.send).toBeCalledWith('not found');
    expect(mockRes.status).toBeCalledWith(404);
  });
});
