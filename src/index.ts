import 'reflect-metadata';
import { ConfigItemEmbellisment } from './config-item-embellishment/config-item-embellishment';
import { Embellishment } from './embellishment/embellishment';
import { buildIItem } from './item/item.interface';
import { OtherItem } from './other-item/other-item';
import { IOtherItem } from './other-item/other-item.interface';

const embellishment: Embellishment = new Embellishment();
const config: ConfigItemEmbellisment = new ConfigItemEmbellisment(
  [
    embellishment
  ]
);

const otherItem: OtherItem = new OtherItem(config);

console.log('otherItem ' + JSON.stringify(otherItem));

export const otherItemFixture: OtherItem = new OtherItem();

export const iOtherItemFixture: IOtherItem = {
  ...buildIItem(new ConfigItemEmbellisment(
    []
  ))
};