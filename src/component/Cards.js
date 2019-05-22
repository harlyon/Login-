import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div className="container">
         <div class="row">
         <div class="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6ZHDfbIifhwVfxnfYvCe85tYuZhxQMgQku5xDJYVUqDKiiU" alt="Card cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
             </div>
            </div>
            <div class="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6ZHDfbIifhwVfxnfYvCe85tYuZhxQMgQku5xDJYVUqDKiiU" alt="Card cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
             </div>
            </div>
            <div class="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6ZHDfbIifhwVfxnfYvCe85tYuZhxQMgQku5xDJYVUqDKiiU" alt="Card cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
             </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Cards;