import {translate} from '@docusaurus/Translate';

export type Product = {
  title: string;
  description: string;
  to: string;
};

export type ProductCategory = {
  label: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    label: 'Raspberry Pi',
    products: [
      {
        title: 'Raspberry Pi 5 Case',
        description: translate({
          id: 'product.pi5Case.description',
          message: 'PC-style case with NVMe Base and quiet fan control',
        }),
        to: '/raspberry-pi/pi-5-case',
      },
    ],
  },
];
