import React from "react";
import cl from "./Placholder.module.scss";
import Pic from "../../assets/img/Clipboard.svg";

const Placholder = () => {
  return (
    <div className = {cl.plaholder}>
        <div className = {cl.wrapper}>
            <div className = {cl.col}>
                <div className = {cl.pic}>
                    <img src = {Pic} alt = "logo" />
                </div>
                <div className = {cl.text}>
                You don't have tasks registered yet <br/>
                Create tasks and organize your to-do items
                </div>
            </div>
        </div>
    </div>
  );
};
export default Placholder;
