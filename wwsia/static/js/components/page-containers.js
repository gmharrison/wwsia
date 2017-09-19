import React from 'react'


export class HomeContainer extends React.Component {
    render () {
        return (
            <div className="home-container">
                <div className="intro-container">
                    <div className="title-container">
                        <h1 className="home-header">Who Will Survive in America?</h1>
                    </div>
                    <div className="about-text-container">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer cursus dapibus hendrerit. Nam nec erat ut libero
                            fringilla porta rhoncus non neque. Pellentesque viverra erat
                            sit amet accumsan tempus. Integer feugiat massa et dui interdum,
                            nec tristique lacus gravida. Vivamus rhoncus in neque quis
                            sodales. Morbi vitae ex et turpis consequat rutrum. Maecenas
                            posuere mi id urna sagittis scelerisque. Etiam sagittis massa
                            eget ultricies vulputate.
                        </p>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="artist-container">
                        <div className="frame-container">
                            <div className="frame one">
                            </div>
                            <div className="image-container">
                            </div>
                        </div>
                    </div>
                    <div className="artist-container">
                        <div className="frame-container">
                            <div className="frame two">
                            </div>
                            <div className="image-container">
                            </div>
                        </div>
                    </div>
                    <div className="artist-container">
                        <div className="frame-container">
                            <div className="frame three">
                            </div>
                            <div className="image-container">
                            </div>
                        </div>
                    </div>
                    <div className="artist-container">
                        <div className="frame-container">
                            <div className="frame four">
                            </div>
                            <div className="image-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}