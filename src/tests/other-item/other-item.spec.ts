import { expect, it } from "@jest/globals";
import { otherItemFixture, iOtherItemFixture } from './other-item.fixture';

const obj = otherItemFixture;
const iObj = iOtherItemFixture;

// Moquer le module `Embellishment`
jest.mock('../../embellishment/embellishment', () => ({
  Embellishment: jest.fn().mockImplementation(() => ({
    data: 'mocked data'  // On simule ici la propriété 'data'
  })),
}));

describe('OtherItem', () => {
  it('should create an instance of OtherItem using the fixture', () => {
    expect(obj).toBeInstanceOf(Object);  // Vérifie si l'objet est bien instancié
  });

  it('should create an instance of IOtherItem using the fixture', () => {
    expect(iObj.config).toBeDefined();   // Vérifie si la configuration est bien définie
  });
});

import { OtherItem } from 'src/other-item/other-item';
import { IOtherItem } from 'src/other-item/other-item.interface';
import { plainToInstance, instanceToPlain } from 'class-transformer';
import { validateSync } from 'class-validator';
describe('otherItem', () => {
  it('should create an instance from its interface implementation cast', () => {
    const objCast: OtherItem = iObj as OtherItem;
    expect(objCast).toBeTruthy();
  });
  it('should create an interface from its instance', () => {
    const objCast: IOtherItem = obj as IOtherItem;
    expect(objCast).toBeTruthy();
  });
});
describe('OtherItem ClassTransformer', () => {
  const objClassTransformer: OtherItem = plainToInstance(OtherItem, iObj);
  const objPlainTransformer: IOtherItem = instanceToPlain(obj) as IOtherItem;
  const objClassTransformed: OtherItem = plainToInstance(OtherItem, objPlainTransformer);

  test('should create a class instance with Class-Transformer from plain object', () => {
    //console.log('objClassTransformer ' + JSON.stringify(objClassTransformer));
    expect(objClassTransformer).toBeTruthy();
  });
  test('should create an interface instance with Class-Transformer from class object', () => {
    //console.log('objPlainTransformer ' + JSON.stringify(objPlainTransformer));
    expect(objPlainTransformer).toBeTruthy();
  });
  test("should convert plain object to class instance with correct properties type", () => {
    expect(validateSync(objClassTransformed).length).toBe(0);
  });
  test("should convert plain object to instance of the correct class", () => {
    expect(objClassTransformed instanceof OtherItem).toEqual(true);
  });
  test("should be the same than original Object 'Obj'", () => {
    expect(objClassTransformer).toStrictEqual(objClassTransformed);
    expect(obj).toStrictEqual(objClassTransformed);
  });
});