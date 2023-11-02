import "./stories.scss";
import { useContext } from "react";
import{ AuthContext } from "../../context/authContext";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
          id: 1,
          name: "Richel Bing",
          img: "https://images.pexels.com/photos/18650061/pexels-photo-18650061/free-photo-of-woman-sitting-and-working-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          name: "Miss Lily ",
          img: "https://images.pexels.com/photos/18714961/pexels-photo-18714961/free-photo-of-two-cups-of-coffee-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          name: "Emma Doe",
          img: "https://images.pexels.com/photos/12731238/pexels-photo-12731238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 4,
          name: "Jennifer sg",
          img: "https://images.pexels.com/photos/12142716/pexels-photo-12142716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];

      return (
        <div className="stories">
          <div className="story">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
              <button>+</button>
            </div>
          {stories.map(story=>(
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
        </div>
      )
    }
    

export default Stories;
