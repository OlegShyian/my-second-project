import React from 'react';
import cl from "./style.module.css"

const Wishes = ({ wishes }) => {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Wishes history</h2>
            <div className={cl.wishes__box}>
                {wishes.map((wish, ind) =>
                    <div key={ind} className={cl.wish_box}>
                        <div className={cl.wish} >
                            {ind + 1}. {wish.text}
                        </div>
                        <h4 style={{ textAlign: "end" }} className={cl.wish} >
                            author: {wish.visitor
                                ? wish.visitor
                                : "Anonym"}
                        </h4>
                    </div>
                )}</div>
        </div>
    )
}

export default Wishes;