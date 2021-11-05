import React, { Component } from 'react';
import { render } from '@testing-library/react';
import ArticleSearch from './ArticleSearch';

describe('Search query test', () => {
  it('taking in a query and change on submit', () => {
    const { asFragment } = render(
      <ArticleSearch onSubmit="perro" value="perro" onChange="perro" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});