import { Expose, Type } from 'class-transformer';
import { IsArray } from 'class-validator';
import { Embellishment } from '../embellishment/embellishment';

export class ConfigItemEmbellisment {
  @Expose({ name: 'someEmbellishment' })
  @Type(() => Embellishment)
  @IsArray()
  private _someEmbellishment: Embellishment[];

  constructor();
  constructor(someEmbellishment: Embellishment[])
  constructor(someEmbellishment?: Embellishment[]) {
    this._someEmbellishment = someEmbellishment ?? [];
  }

  public get someEmbellishment(): Embellishment[] {
    return this._someEmbellishment;
  }
  public set someEmbellishment(value: Embellishment[]) {
    this._someEmbellishment = value;
  }
}