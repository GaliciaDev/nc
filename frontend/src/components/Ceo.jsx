import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import seoConfig from '../../../backend/models/site/ceo.json';

const SEO = () => {
  const [seoData, setSeoData] = useState({});

  useEffect(() => {
    setSeoData(seoConfig);
  }, []);

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content={seoData.author} />
      <meta name="viewport" content={seoData.viewport} />
      <meta charSet={seoData.charset} />
      <meta name="robots" content={seoData.robots} />
      <link rel="canonical" href={seoData.canonical} />
      
      
    </Helmet>
  );
};

export default SEO;