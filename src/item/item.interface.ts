import { IConfigItemEmbellisment } from '../config-item-embellishment/config-item-embellishment.interface';

export interface IItem {
  config: IConfigItemEmbellisment | undefined;
}

export function buildIItem(config?: IConfigItemEmbellisment): IItem {
  return {
    config
  } as IItem
}