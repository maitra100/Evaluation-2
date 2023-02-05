const axios = require('axios');
const getCompanyBySector = require('../../src/controllers/sector');
const getCompanyBySectorServices = require('../../src/services/sector');

describe('Test for checking if company details is recieved', () => {
  it('should return company data if end point is correct', async () => {
    jest.spyOn(getCompanyBySectorServices, 'getCompanyBySectorService').mockResolvedValue({ id: 1 });
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    await getCompanyBySector({
      body: {
        urlLink: 'link',
      },
    }, mockRes);
    expect(mockRes.send).toBeCalledWith({ id: 1 });
    expect(mockRes.status).toBeCalledWith(200);
  }),
  it('should return an error message if end point is incorrect', async () => {
    jest.spyOn(getCompanyBySectorServices, 'getCompanyBySectorService').mockResolvedValue(undefined);
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    await getCompanyBySector({
      body: {
        sector: 'link',
      },
    }, mockRes);
    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.send).toBeCalledWith('not found');
  });
});
