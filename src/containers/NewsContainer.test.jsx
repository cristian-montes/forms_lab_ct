import{ render, screen, wairFor } from '@testing-library/react';
import React from 'react';
 import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event'
import ArticleList from '../components/app/articles/ArticleList';
import NewsContainer from './NewsContainer';


describe('Shows News', () => {
    it('shoudl display a list of news fron apple', async ()=> {
        render(<MemoryRouter><NewsContainer/></MemoryRouter>);
        screen.getByText('Loading...')

        const ul = await screen.findByRole('list', {name: 'articles'})
        expect(ul).toMatchSnapshot();

    });

});