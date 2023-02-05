const fs = require('fs');
const axios = require('axios');
const companyService = require('../../src/services/company');
const db = require('../../database/models');

const { company } = db;

describe('tests for company data manipulation in db', () => {
  // eslint-disable-next-line no-unused-expressions
  it('should return success message when entries are added in database', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { id: 1 } });
    const response = await companyService.companyService({ id: 1 });
    expect(response).toEqual({ id: 1 });
  }),
  it('should return success message when entries are added in database', async () => {
    jest.spyOn(fs, 'readFile').mockResolvedValue('enteres data in database');
    const response = await companyService.getCompanyDataServices();
    expect(response).toEqual('entered companies in database');
  }),
  it('should return success message when entries are added in database', async () => {
    jest.spyOn(fs, 'readFile').mockResolvedValue('score updated');
    const response = await companyService.updateScore();
    expect(response).toEqual('updated scores');
  }),
  it('should return companies in sorted order according to sector', async () => {
    jest.spyOn(company, 'findAll').mockResolvedValue({ data: [{ id: 1 }, { id: 2 }] });
    const response = await companyService.getBySectorSortedService({ sector: 'sector' });
    expect(response).toEqual({ data: [{ id: 1 }, { id: 2 }] });
  }),
  it('should update the name of ceo or company when id provided', async () => {
    jest.spyOn(company, 'update').mockResolvedValue([1]);
    const response = await companyService.updateCeoService({ id: 1 });
    expect(response).toEqual([1]);
  });
});
