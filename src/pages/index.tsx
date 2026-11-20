import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import {productCategories} from '@site/src/data/products';
import styles from './index.module.css';

export default function AllDocuments(): ReactNode {
  return (
    <Layout
      title={translate({id: 'home.title', message: 'All Documents'})}
      description={translate({
        id: 'home.description',
        message: 'Build guides and resources for Trainvent projects',
      })}>
      <main className="container margin-vert--xl">
        <Heading as="h1">
          <Translate id="home.title">All Documents</Translate>
        </Heading>
        {productCategories.map((category) => (
          <section key={category.label} className={styles.category}>
            <Heading as="h2">{category.label}</Heading>
            <div className={styles.grid}>
              {category.products.map((product) => (
                <Link key={product.to} to={product.to} className={styles.card}>
                  <span className={styles.cardTitle}>{product.title}</span>
                  <span className={styles.cardDescription}>{product.description}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </Layout>
  );
}
