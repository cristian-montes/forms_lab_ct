import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('article test', () => {
  it('should render a single article for the list', () => {
    const { asFragment } = render(
      <Article
        title="The Taco King"
        author="Taquito"
        description="I make any type of tacos you want"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});