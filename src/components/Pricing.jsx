import { FaRegCheckCircle } from "react-icons/fa";
import Gateway from "../assets/stripe-cc.png"

export default function Pricing() {
    return (
        <section className="px-[24px] bg-[url('https://builder.andromo.com/static/images/payPlanPageBackground.9afed82.svg')] bg-no-repeat bg-cover bg-center mb-[70px]">
            <div className="px-[222px] pt-[45px] pb-[30px] text-center">
                <h4 className="text-[20px] uppercase">
                    How Much Does a Mobile App Cost?  Andromo Pricing Plans
                </h4>
                <h2 className="text-[40px]">
                    Choose a package according to your area of interest
                </h2>
            </div>
            <div className="flex justify-center mb-[20px]">
                <div className="bg-[#f7f7fb] flex justify-center rounded-[30px]">
                    <button className="bg-[#2773ff] px-[45px] py-[12px] rounded-[30px] text-white">Monthly</button>
                    <button className="px-[45px] py-[12px] rounded-[30px]">Annual</button>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-[40px]">
                <div className="shadow-2xl">
                    <h4 className="bg-[#2773ff] h-[50px] flex items-center justify-center rounded-t-[20px] uppercase text-white">Non-Profit</h4>
                    <div className="p-[20px] bg-[#f7f7fb] h-[220px]">
                        <div className="non__profit__container flex flex-col justify-center items-center gap-[5px]">
                            <h5 className="uppercase text-[18px] mt-[20px] font-semibold">Hobbyst</h5>
                            <p className="text-[54px] text-[#2773ff] font-normal">$24</p>
                            <span>per month*</span>
                        </div>
                    </div>
                    <div className="p-[16px] text-[14px] flex flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                            <FaRegCheckCircle size={16}/>
                            <p>Create up to <span className="font-semibold">300 projects</span></p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaRegCheckCircle size={16}/>
                            <p><span className="font-semibold">10 GB</span> of Disc storage</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaRegCheckCircle size={16}/>
                            <p>Custom app package name</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaRegCheckCircle size={16}/>
                            <p>
                                <span>Build app for</span>
                                <span className="font-semibold">Android and IOS</span>
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaRegCheckCircle size={16}/>
                            <p>No Ads</p>
                        </div>
                    </div>
                    <div>
                        <button>Subscribe Now</button>
                        <img className="w-[170px]" src={Gateway} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
