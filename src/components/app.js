import React,{Component} from 'react';
import '../componentCss/pc.css';

import NewsHeader from './news_header';
export default class App extends Component{
  render(){
    return(
      <div>
        <NewsHeader />
        {this.props.children}
        <div>底部部分</div>
      </div>
    )
  }
}
