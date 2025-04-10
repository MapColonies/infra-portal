import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CI/CD',
    Svg: require('@site/static/img/beaver_ci_cd.svg').default,
    description: (
      <>
        We manage continuous integration and continuous deployment pipelines using 
        Jenkins and GitHub Actions to ensure smooth and efficient development workflows
      </>
    ),
  },
  {
    title: 'DevOps Infrastructures',
    Svg: require('@site/static/img/beaver_devops.svg').default,
    description: (
      <>
        Our team sets up and maintains essential DevOps infrastructures such as 
        monitoring tools and SFTP-Go to ensure system reliability and performance
      </>
    ),
  },
  {
    title: 'Applicative Structures',
    Svg: require('@site/static/img/beaver_applicative_structures.svg').default,
    description: (
      <>
        We provide robust solutions for various applicative structures like authentication 
        and config management to streamline development processes and improve application performance
      </>
    ),
  },
  {
    title: 'MC-Packages',
    Svg: require('@site/static/img/beaver_mc_packages.svg').default,
    description: (
      <>
        We develop and maintain common packages to help teams build 
        better applications faster and more efficiently
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
