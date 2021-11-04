import{ render, screen, waitFor } from '@testing-library/react';
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

        const nameInput = await screen.findByLabelText('News Name');
        userEvent.type(nameInput, 'apple');

        const submitButton = await screen.findByRole('button', {name: 'get-news'})

        userEvent.click(submitButton);

        return waitFor(() => {
            const news = screen.getAllByText('apple', {
                exact: false,
            });

            expect(news).toHaveLength(10)
        })
    });

});