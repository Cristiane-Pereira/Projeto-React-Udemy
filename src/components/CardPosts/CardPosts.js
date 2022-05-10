import React from 'react';

const CardPosts = ({ propsPost }) => (  //propsPost é um destructor que vem da props, seria o msm de const propsPost = propsPost.props;
                                                                                                  // const { propsPost } = props;
      <React.Fragment>
          <div className="post">
              <img src={propsPost.cover} alt={propsPost.title} />
              <div className="post-content">
                <h1>{propsPost.title}</h1>
                <p>{propsPost.body}</p>
              </div>
            </div>  
      </React.Fragment>
    )

export default CardPosts;