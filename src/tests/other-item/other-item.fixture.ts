import { buildIItem } from '../../item/item.interface';
import { OtherItem } from '../../other-item/other-item';
import { IOtherItem } from '../../other-item/other-item.interface';
import { configItemEmbellismentFixture } from '../config-item-embellishment/config-item-embellishment.fixture';

export const otherItemFixture: OtherItem = new OtherItem();

export const iOtherItemFixture: IOtherItem = {
  ...buildIItem(configItemEmbellismentFixture)
};