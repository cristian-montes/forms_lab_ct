import React, { Component} from 'react';
import ArticleList from '../components/app/articles/ArticleList';
import ArticleSearch from '../components/app/articles/ArticleSearch';
import { fetchArticles } from '../services/NewsAPI';



export default class NewsContainer extends Component {
    state= {
        loading: true,
        articles:[],
        newsName:'apple'
    }

    async componentDidMount(){
        const articles = await fetchArticles(this.state.newsName);
        this.setState({articles, loading:false})
    }

    handleNewsNameChange = (event)=>{
        this.setState({newsName: event.target.value});
    }


    handleSubmit =async (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const articles = await fetchArticles(this.state.newsName);
        this.setState({articles, loading:false})
    }

    render(){
        const{loading, articles, newsName} = this.state;
        const newsTittle = newsName.toUpperCase();
        return (
            <div>
                {loading ? (<h1>loading...</h1>)
                :(
                    <div>
                        <h1> {newsTittle} NEWS</h1>
                        <ArticleSearch
                            newsName={newsName}
                            onHandleNewsNameChange={this.handleNewsNameChange}
                            onHandleSubmit={this.handleSubmit}
                        />
                        <ArticleList articles={ articles }/>
                    </div>
                )}

            </div>
        )
    }
}