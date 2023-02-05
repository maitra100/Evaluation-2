const axios = require('axios');
const csvServices = require('../../src/services/csvExtractor');

describe('Test for checking if csv file is extracted', () => {
  it('should return csv data if end point is correct', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue('fileData');
    const data = await csvServices.getCsvServices({
      urlLink: 'link',
    });
    expect(data).toStrictEqual('fileData');
  });
});
