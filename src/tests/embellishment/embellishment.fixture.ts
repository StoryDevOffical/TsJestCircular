import { Embellishment } from 'src/embellishment/embellishment';
import { IEmbellishment } from 'src/embellishment/embellishment.interface';
import { buildIItem } from 'src/item/item.interface';

export const itemEmbellishmentFixture: Embellishment = new Embellishment(
);
export const iItemEmbellishmentFixture: IEmbellishment = {
  ...buildIItem()
};