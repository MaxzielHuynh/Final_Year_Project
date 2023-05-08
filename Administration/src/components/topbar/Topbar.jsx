import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Maxziel Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconHolder">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconHolder">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconHolder">
            <Settings />
          </div>
          <img
            src="https://lh3.googleusercontent.com/BT2pwAiilHP94jJFwUOekeJ2lV6x3wFw0wh-Qb0_dM0_hZ_joDbTjVCqdCA_ZXL6SmjMQgAJZwTLcO038QJ-cUGkDXaR7vEKRmFjsrE1iKhIkJ5ZhbnE8_EttmbKcPaAhugdLmiazARwF74Dn0ymlHaG-Gl6ZGZb-HFBVUN5NDXqZpd7EJ3ZAm3-UKo8PcV5YT9i-KmmXsnw6e7baPhWP0LKWKpOs8LJLKSOEzK2_CpGWXFRGfLRCyru-YE7dkRybyoBRSCgcIXndmOPws5HzTN75lAnP2L_6T4_agvGvyvpvt_G-zimEI24rN_L25ACL3hKOo3T7aTrY6yYXdTvmKpMuwYc4_zZJomMYG79HbErtaq3W129rpWWFqG3jrNp3LBPF-omDF_774D5w5gjngJgmmtoG4Dr2EKsvZgI4SpFs6HyI_CJc0pewiG60w0nPz5EIGnGrBrWHyQU99_DaAykf9FJfFVw8midNWt-xN97WXjWUQ2yGuPiIkCg-mgXve_mRvYy3emoQTzYgToDbLXgbcBZhYM6ELEWOjYholn5LFL1TZIiFGo81l2fe7VRTI5-W9Zxvu_GaFFtautnFG29nNQ59jdFnrIulpEL9-RFt3valH3wALzGOUuIq1QjH3YF3fMNIvvAOa5PX8T_q545hxvNQ446-EZu2eO_DODCixzCkp3wQdWY3OQy5Dn3hHsdlJtacRKQAHkPiwP9iTx08HQUKGSYXk0eyTjuP09NF6hXn_wcNjmvt0QL7ULSVc_YQyNNMdEcRMdXEHQNTh-wTS74kC9Tf46uo-1tOGOvNNyGEqOjETFsRKOyPhKToJ1mBkSGmiHWJFIHlwI0d3j0Oi_MWzM_J17XdO-Bk0d7MS5FuZR7H4ilqzagkVl_ErwMeP5V0WQ7nvDhNF6lpSoMaGd40QNwlnJsAIyfYeBk=w500-h500-s-no?authuser=0"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
