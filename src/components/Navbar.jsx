

export default function Navbar() {
    return (
        <nav>
            <button className="flex justify-around items-center h-[64px] w-screen bg-[#1e1e1e] px-[40px] text-white">
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
            <button className="btn__container h-[40px] w-screen text-sm text-black">
                <span className="text-[green] font-bold">$ </span>
                Enjoy Special Prices for You
                <span className="text-[green] font-bold"> $</span>
            </button>
        </nav>
    )
}
