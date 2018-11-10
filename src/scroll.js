import React from 'react';
import { ScrollLink, ScrollElement } from 'react-scroll';

const Element = props => {
  return <div {...this.props}>{this.props.children}</div>;
};

const Link = props => {
  return <a {...this.props}>{this.props.children}</a>;
};

module.exports = ScrollElement(Element);

module.exports = ScrollLink(Link);
