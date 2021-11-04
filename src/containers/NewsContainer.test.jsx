import{ render, screen, wairFor } from '@testing-library/react';
import React from 'react';
import NewsContainer from './NewsContainer';


describe('Shows News', ()=>{
    it('shoudl display a list of news fron apple', async ()=> {
        render(<NewsContainer/>);

        screen.getByText('Loading...')






    });





});