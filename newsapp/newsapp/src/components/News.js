import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class news extends Component {
    
    constructor(){
        super();
        this.state={
          articles:[],
          loading:false,
          page:1
        }
    }
    

    async componentDidMount(){
      this.setState({loading:true})
      let  url="https://newsapi.org/v2/top-headlines?country=us&apiKey=6a6572aebe2e4483b1ceb8fae8d92931";
      let data= await fetch(url);
      let parseddata = await data.json();
      this.setState({
        articles: parseddata.articles, 
        loading:false
      })
    }
    nextclick = async ()=>{
      this.setState({loading:true})

        let  url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=6a6572aebe2e4483b1ceb8fae8d92931&page=${this.state.page+1}`;
        let data= await fetch(url);
        let parseddata = await data.json();
        
        this.setState({
            page:this.state.page+1,
            articles: parseddata.articles,
            loading:false
        })

    }
    prevclick = async()=>{
      this.setState({loading:true})
        let  url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=6a6572aebe2e4483b1ceb8fae8d92931&page=${this.state.page-1}`;
        let data= await fetch(url);
        let parseddata = await data.json();
        this.setState({
            page:this.state.page-1,
            articles: parseddata.articles,
            loading:false
            
        })


    }
   

  render() {
    return (
      <>
      <div className="container">
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
       
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <Newsitem  title={element.title?element.title.slice(0,48):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}/>
              </div>
            })}

            <div class="container d-flex justify-content-around mb-5" >
            <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.prevclick}>&larr; Previous</button>
            <button type="button" class="btn btn-dark" onClick={this.nextclick} >Next &rarr;</button>

            </div>

                

            </div>
      
      </div>
      </>
    )
  }
}

export default news