const companyService = require('../../src/services/company');
const companyController = require('../../src/controllers/company');

describe('tests for company data manipulation', () => {
  describe('test for fetching company data', () => {
    it('should return company data when asked', async () => {
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      jest.spyOn(companyService, 'companyService').mockResolvedValue({ id: 1 });
      await companyController.getCompany({
        body: {
          id: 1,
        },
      }, mockRes);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.send).toBeCalledWith({ id: 1 });
    }),
    it('should return error when company id provided is wrong', async () => {
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      jest.spyOn(companyService, 'companyService').mockResolvedValue(undefined);
      await companyController.getCompany({
        body: {
          id: 1,
        },
      }, mockRes);
      expect(mockRes.status).toBeCalledWith(404);
      expect(mockRes.send).toBeCalledWith('not found');
    });
  }),
  describe('test for uploading company data on db', () => {
    it('should return success message when data uploaded on db', async () => {
      const mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      jest.spyOn(companyService, 'getCompanyDataServices').mockResolvedValue('entered companies in database');
      await companyController.getCompanyData({}, mockRes);
      expect(mockRes.send).toBeCalledWith('entered companies in database');
    }),
    it('should return error when company id provided is wrong', async () => {
      const mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      jest.spyOn(companyService, 'getCompanyDataServices').mockResolvedValue(undefined);
      await companyController.getCompanyData({}, mockRes);
      expect(mockRes.send).toBeCalledWith('error');
    });
  }),
  describe('test for updating score of companies', () => {
    it('should return success message when score updated', async () => {
      const mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      jest.spyOn(companyService, 'updateScore').mockResolvedValue('updated scores');
      await companyController.updateScoreController({}, mockRes);
      expect(mockRes.send).toBeCalledWith('updated scores');
      expect(mockRes.status).toBeCalledWith(200);
    });
  }),
  describe('test for getting companies in sorted order', () => {
    it('should return sorted data when given correct sector', async () => {
      const mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      jest.spyOn(companyService, 'getBySectorSortedService').mockResolvedValue({ data: [{ id: 1 }, { id: 2 }] });
      await companyController.getBySectorSorted({
        body: {
          sector: 'sector',
        },
      }, mockRes);
      expect(mockRes.send).toBeCalledWith({ data: [{ id: 1 }, { id: 2 }] });
      expect(mockRes.status).toBeCalledWith(200);
    }),
    it('should return error when given wrong sector given', async () => {
      const mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      jest.spyOn(companyService, 'getBySectorSortedService').mockResolvedValue([]);
      await companyController.getBySectorSorted({
        body: {
          sector: 'sector',
        },
      }, mockRes);
      expect(mockRes.send).toBeCalledWith('no data found in given sector');
      expect(mockRes.status).toBeCalledWith(404);
    });
  }),
  describe('test for updating ceo and company name', () => {
    it('should return [1] when any data updated', async () => {
      const mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      jest.spyOn(companyService, 'updateCeoService').mockResolvedValue([1]);
      await companyController.updateCeo({
        body: {
          sector: 'sector',
        },
      }, mockRes);
      expect(mockRes.send).toBeCalledWith('updated');
      expect(mockRes.status).toBeCalledWith(200);
    }),
    it('should return error when no data updated', async () => {
      const mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      jest.spyOn(companyService, 'updateCeoService').mockResolvedValue([0]);
      await companyController.updateCeo({
        body: {
          sector: 'sector',
        },
      }, mockRes);
      expect(mockRes.send).toBeCalledWith('no data updated');
      expect(mockRes.status).toBeCalledWith(404);
    });
  });
});
