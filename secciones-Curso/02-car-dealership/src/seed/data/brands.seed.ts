import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANSD_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'volvo',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createAt: new Date().getTime(),
  },
];
