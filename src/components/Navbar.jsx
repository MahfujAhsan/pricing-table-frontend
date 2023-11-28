import { useState } from "react";
import Modal from "./Modal";


export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setShowModal(true);
    };
    return (
        <nav>
            <button className="flex flex-col md:flex-row justify-around items-center h-auto md:h-[64px] w-screen bg-[#1e1e1e] px-[40px] text-white">
                <div className="flex items-center gap-[30px]">
                    <div className="flex flex-col items-center">
                        <span className="text-[27px] leading-tight">3</span>
                        <span className="text-sm leading-tight">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[27px] leading-tight">0</span>
                        <span className="text-sm leading-tight">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[27px] leading-tight">8</span>
                        <span className="text-sm leading-tight">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[27px] leading-tight">45</span>
                        <span className="text-sm leading-tight">Seconds</span>
                    </div>
                </div>
                <div className="text-[28px] uppercase font-semibold">
                    <h2>Black Friday Is Coming!</h2>
                </div>
                <button className="bg-[#ffd046] w-[155px] h-[38px] rounded-[6px] text-black border-none uppercase text-sm">Get Discount</button>
            </button>
            <button onClick={openModal} className="btn__container h-[40px] w-screen text-sm text-black">
                <span className="text-[green] font-bold">$ </span>
                Enjoy Special Prices for You
                <span className="text-[green] font-bold"> $</span>
            </button>
            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
        </nav>
    )
}
