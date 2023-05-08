import "./widgetSm.css";
import { userReq } from "../../reqMethods";
import { useEffect, useState } from "react";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userReq.get("clients/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, [users]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://cdn.pixabay.com/photo/2017/09/28/19/23/rainbow-2796600__340.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
