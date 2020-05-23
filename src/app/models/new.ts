import { group_new } from './group_news';
import { Tag } from './tags';
import { thumbnail } from './thumbnail';

export class newInformation{
  id                : number;
  title             : string;
  descriptions      : string;
  order_number      : object;
  date_publish      : string;
  is_popular        : boolean;
  group_news        : group_new;
  created_at        : string;
  updated_at        : string;
  contents          : string;
  thumbnail         : thumbnail;
  tags              : Tag[];
}
