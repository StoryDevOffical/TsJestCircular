import { describe, expect, it, test } from "@jest/globals";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from 'class-validator';
import { ConfigItemEmbellisment } from 'src/config-item-embellishment/config-item-embellishment';
import { IConfigItemEmbellisment } from 'src/config-item-embellishment/config-item-embellishment.interface';
import { configItemEmbellismentFixture, iConfigItemEmbellismentFixture } from './config-item-embellishment.fixture';

const obj = configItemEmbellismentFixture;
const iObj = iConfigItemEmbellismentFixture;

describe('configItemEmbellisment', () => {
  it('should create an instance from its interface implementation cast', () => {
    const objCast: ConfigItemEmbellisment = iObj as ConfigItemEmbellisment;
    expect(objCast).toBeTruthy();
  });
  it('should create an interface from its instance', () => {
    const objCast: IConfigItemEmbellisment = obj as IConfigItemEmbellisment;
    expect(objCast).toBeTruthy();
  });
});

describe('ConfigItemEmbellisment ClassTransformer', () => {
  const objClassTransformer: ConfigItemEmbellisment = plainToInstance(ConfigItemEmbellisment, iObj);
  const objPlainTransformer: IConfigItemEmbellisment = instanceToPlain(obj) as IConfigItemEmbellisment;
  const objClassTransformed: ConfigItemEmbellisment = plainToInstance(ConfigItemEmbellisment, objPlainTransformer);

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
    expect(objClassTransformed instanceof ConfigItemEmbellisment).toEqual(true);
  });
  test("should be the same than original Object 'Obj'", () => {
    expect(objClassTransformer).toStrictEqual(objClassTransformed);
    expect(obj).toStrictEqual(objClassTransformed);
  });
});