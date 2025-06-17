import React from "react";
import viteLogo from "../../public/vite.svg"

function Home(){
    return(
        <div>
            <section>
                <img src={viteLogo} alt="vite.svg" />
            </section>
            <section>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </section>
        </div>
    )
}
export default Home