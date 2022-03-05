import React, { Component } from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product'

class Home extends Component {
    render(){
        return (
            <div>
                {/* <p>Playlist Component</p>
                <hr />
                <YouTubeComp 
                    time="09.29"
                    title="Belajar PHP Bagian 1"
                    desc="Bagian 1 PHP Dasar"
                />
                <YouTubeComp 
                    time="03.29"
                    title="Belajar PHP Bagian 2"
                    desc="Bagian 2 PHP Dasar"
                />
                <YouTubeComp 
                    time="05.29"
                    title="Belajar PHP Bagian 3"
                    desc="Bagian 3 PHP Dasar"
                />
                <YouTubeComp 
                    time="19.29"
                    title="Belajar PHP Bagian 4"
                    desc="Bagian 4 PHP Dasar"
                />
                <YouTubeComp 
                /> */}

                <p>Counter</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home;