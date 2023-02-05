const { companyValidator } = require('../../src/middleware/validator');

describe('Validator middleware', () => {
  it('should call the next function when joi validation is successful for idSchema', () => {
    const mockReq = {
      body: {
        id: '1234',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNext = jest.fn();
    companyValidator(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  }),
  it('should call the next function when joi validation is successful for sectorSchema', () => {
    const mockReq = {
      body: {
        sector: 'Software',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNext = jest.fn();
    companyValidator(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  }),
  it('should call the next function when joi validation is successful for urlSchema', () => {
    const mockReq = {
      body: {
        urlLink: 'https://www.google.com',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNext = jest.fn();
    companyValidator(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  }),
  it('should return a 400 status code when joi validation fails for idSchema', () => {
    const mockReq = {
      body: {
        id: '1234',
        ceoName: 1234,
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNext = jest.fn();
    companyValidator(mockReq, mockRes, mockNext);
    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.json).toBeCalledWith({ message: 'input not valid' });
  }),
  it('should return a 400 status code when joi validation fails for sectorSchema', () => {
    const mockReq = {
      body: {
        sector: 1234,
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNext = jest.fn();
    companyValidator(mockReq, mockRes, mockNext);
    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.json).toBeCalledWith({ message: 'input not valid' });
  }),
  it('should return a 400 status code when joi validation fails for urlSchema', () => {
    const mockReq = {
      body: {
        urlLink: 1234,
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNext = jest.fn();
    companyValidator(mockReq, mockRes, mockNext);
    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.json).toBeCalledWith({ message: 'input not valid' });
  });
});
