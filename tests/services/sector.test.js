const axios = require('axios');
const getCompanyBySectorService = require('../../src/services/sector');

describe('Test for checking if company details is recieved', () => {
  it('should return something if end point is correct', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        id: 1,
      },
    });
    const data = await getCompanyBySectorService.getCompanyBySectorService({
      body: {
        urlLink: 'link',
      },
    });
    expect(data).toStrictEqual({ id: 1 });
  });
});
