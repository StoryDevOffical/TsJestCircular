import { ConfigItemEmbellisment } from '../config-item-embellishment/config-item-embellishment';
import { Item } from '../item/item';

export class OtherItem extends Item {
  constructor()
  constructor(config: ConfigItemEmbellisment)
  constructor(config?: ConfigItemEmbellisment) {
    super(config);
  }
}