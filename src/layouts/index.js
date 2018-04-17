import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { I18nProvider } from '@lingui/react';
import { navigateTo } from 'gatsby-link';
import { catalogs, prefix, deprefix, defaultLanguage } from '../utils/i18n-config';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Kombina</title>
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default class extends React.Component {
  onLanguageChange(language) {
    navigateTo(prefix(language) + deprefix(this.props.location.pathname));
  }

  render() {
    const language = this.props.location.pathname.substring(1) || defaultLanguage;
    return (
      <I18nProvider language={language} catalogs={catalogs}>
        <TemplateWrapper {...this.props} onLanguageChange={this.onLanguageChange} />
      </I18nProvider>
    );
  }
}
