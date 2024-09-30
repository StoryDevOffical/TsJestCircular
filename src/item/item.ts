import { Expose, Type } from 'class-transformer';
import { IsInstance, IsOptional, ValidateNested } from 'class-validator';
import { ConfigItemEmbellisment } from '../config-item-embellishment/config-item-embellishment';

export abstract class Item {
  @Expose({ name: 'config'})
  @Type(() => ConfigItemEmbellisment)
  @ValidateNested()
  @IsOptional()
  @IsInstance(ConfigItemEmbellisment)
  config: ConfigItemEmbellisment | undefined;

  constructor()
  constructor(config: ConfigItemEmbellisment | undefined)
  constructor(config?: ConfigItemEmbellisment) {
    this.config = config;
  }
}