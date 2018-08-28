import { convertNumberForContract, convertContractInformationToNumber } from './index';


describe('convertNumberForContract', () => {
    it('should return an array containing two numbers', () => {
        expect(convertNumberForContract(1.23, false)).toEqual(expect.arrayContaining([2, 123]));

        expect(convertNumberForContract(13, false)).toEqual(expect.arrayContaining([0, 13]));

        expect(convertNumberForContract(2.123456, false)).toEqual(expect.arrayContaining([5, 212345]));

        expect(convertNumberForContract(20.123456, false)).toEqual(expect.arrayContaining([5, 2012345]));

        expect.hasAssertions();
    });

});

describe('convertContractInformationToNumber', () => {
    it('should return a number', () => {
        expect(convertContractInformationToNumber(2, 123)).toEqual(1.23);

        expect(convertContractInformationToNumber(0, 123)).toEqual(123);

        expect(convertContractInformationToNumber(5, 123456)).toEqual(1.23456);

        expect.hasAssertions();
    });

});

