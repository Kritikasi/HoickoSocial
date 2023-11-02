import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar" >
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Monica Bing</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
           </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/8468018/pexels-photo-8468018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Mimi Johns</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
           </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
        <div className="user">
          <div className="userInfo">
              <img src="https://images.pexels.com/photos/15017797/pexels-photo-15017797/free-photo-of-woman-holding-a-disco-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Emma Doe</span> changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div><div className="user">
          <div className="userInfo">
              <img src="https://images.pexels.com/photos/18706319/pexels-photo-18706319/free-photo-of-woman-in-strapless-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Jennifer sg</span> commented on your post 
              </p>
            </div>
           <span>15 min ago</span>
          </div>
          <div className="user">
          <div className="userInfo">
              <img src="https://images.pexels.com/photos/18640239/pexels-photo-18640239/free-photo-of-brunette-in-strapless-wedding-dress-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Phoebe luise</span> changed their profile picture
              </p>
            </div>
           <span>34 min ago</span>
          </div>
          <div className="user">
          <div className="userInfo">
              <img src="https://images.pexels.com/photos/14584788/pexels-photo-14584788.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Miss Lily</span> liked your post
              </p>
            </div>
           <span>1 hour ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
           <div className="userInfo">
              <img src="https://images.pexels.com/photos/18706319/pexels-photo-18706319/free-photo-of-woman-in-strapless-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Jennifer sg</span>
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src="https://images.pexels.com/photos/15017797/pexels-photo-15017797/free-photo-of-woman-holding-a-disco-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Emma Doe</span>
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src="https://images.pexels.com/photos/12573754/pexels-photo-12573754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>jiny decruse</span>
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src="https://images.pexels.com/photos/17150614/pexels-photo-17150614/free-photo-of-brunette-in-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Nancy_AQ</span>
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src="https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Richel Bing</span>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default RightBar;
