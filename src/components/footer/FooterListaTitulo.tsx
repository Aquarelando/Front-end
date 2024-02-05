import React from 'react';

interface FooterListTitleProps {
  title: string;
}

const FooterListTitle: React.FC<FooterListTitleProps> = ({ title }) => {
  return <h3 className="mb-6 text-xl font-semibold font-bodyFont">{title}</h3>;
};

export default FooterListTitle;