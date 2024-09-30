import { describe, expect, it, test } from "@jest/globals";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from 'class-validator';
import { Embellishment } from 'src/embellishment/embellishment';
import { IEmbellishment } from 'src/embellishment/embellishment.interface';
import { itemEmbellishmentFixture, iItemEmbellishmentFixture } from './embellishment.fixture';

const obj = itemEmbellishmentFixture;
const iObj = iItemEmbellishmentFixture;

describe('embellisment', () => {
  it('should create an instance from its interface implementation cast', () => {
    const objCast: Embellishment = iObj as Embellishment;
    expect(objCast).toBeTruthy();
  });
  it('should create an interface from its instance', () => {
    const objCast: IEmbellishment = obj as IEmbellishment;
    expect(objCast).toBeTruthy();
  });
});

describe('Embellishment ClassTransformer', () => {
  const objClassTransformer: Embellishment = plainToInstance(Embellishment, iObj);
  const objPlainTransformer: IEmbellishment = instanceToPlain(obj) as IEmbellishment;
  const objClassTransformed: Embellishment = plainToInstance(Embellishment, objPlainTransformer);

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
    expect(objClassTransformed instanceof Embellishment).toEqual(true);
  });
  test("should be the same than original Object 'Obj'", () => {
    expect(objClassTransformer).toStrictEqual(objClassTransformed);
    expect(obj).toStrictEqual(objClassTransformed);
  });
});