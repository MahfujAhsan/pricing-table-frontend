import { FaRegCheckCircle } from "react-icons/fa";
import Gateway from "../assets/stripe-cc.png"
import { useState } from "react";

export default function Pricing() {
    const [selectedTier, setSelectedTier] = useState('monthly');

    const handleTierChange = (tier) => {
        setSelectedTier(tier);
    };

    const tiers = [
        {
            id: 'monthly',
            name: 'Monthly',
            price: '$9.99',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
        {
            id: 'annual',
            name: 'Annual',
            price: '$19.99',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        }
    ];
    return (
        <section className="px-[24px] bg-[url('https://builder.andromo.com/static/images/payPlanPageBackground.9afed82.svg')] bg-no-repeat bg-cover bg-center mb-[70px]">
            <div className="md:px-[222px] pt-[45px] pb-[30px] text-center">
                <h4 className="text-[20px] uppercase">
                    How Much Does a Mobile App Cost?  Andromo Pricing Plans
                </h4>
                <h2 className="text-[40px]">
                    Choose a package according to your area of interest
                </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center mb-[20px] md:space-x-12">
                <div className="text-center mb-8 md:mb-0">
                    <input className="border border-black/25 outline-black/25 py-[11px] border-r-0 focus:outline-none rounded-l-full text-center text-[16px] placeholder:text-[12px]" type="text" placeholder="USE PROMO CODE" />
                    <button className="px-[45px] py-[12px] rounded-full bg-[#00c64f] text-white -ml-4">Apply</button>
                </div>
                <div className="bg-[#f7f7fb] flex justify-center rounded-[30px]">
                    {tiers.map((tier) => (
                        <button
                            key={tier.id}
                            onClick={() => handleTierChange(tier.id)}
                            className={`px-[45px] py-[12px] rounded-full 
                        ${selectedTier === tier.id ? 'bg-[#2773ff] text-white' : 'bg-customGray text-black'}
                        border-none cursor-pointer`}
                        >
                            {tier.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid md:grid-cols-5 gap-[40px] mt-[85px]">
                <div className="shadow-2xl h-[750px] flex flex-col justify-between rounded-[20px] bg-transparent border-2">
                    <div>
                        <h4 className="bg-[#2773ff] h-[50px] flex items-center justify-center rounded-t-[20px] uppercase text-white">Non-Profit</h4>
                        <div className="p-[20px] bg-[#f7f7fb] h-[220px]">
                            <div className="non__profit__container flex flex-col justify-center items-center gap-[5px]">
                                <h5 className="uppercase text-[18px] mt-[20px] font-semibold">Hobbyst</h5>
                                <p className="text-[54px] text-[#2773ff] font-normal">
                                    {selectedTier === "monthly" ? <span>$32</span> : <span>$24</span>}
                                </p>
                                <span>per month*</span>
                            </div>
                        </div>
                        <div className="p-[16px] text-[14px] flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>Create up to <span className="font-semibold">300 projects</span></p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p><span className="font-semibold">10 GB</span> of Disc storage</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>Custom app package name</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    <p>Build app for</p>
                                    <span className="font-semibold">Android and IOS</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>No Ads</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[12px] px-[24px] pb-[24px]">
                        <button className="h-[46px] bg-[#2773ff] w-full mb-[24px] uppercase text-white rounded-[8px] text-[14px]">Subscribe Now</button>
                        <img className="w-[170px] mx-auto" src={Gateway} alt="" />
                    </div>
                </div>
                <div className="relative">
                    <h3 className="absolute -top-[45px] block w-full text-center bg-[#CFE2FB] uppercase font-semibold rounded-t-[20px] -z-40 pb-8 pt-[12px] text-[16px] text-[#5b6a7e]">Most Popular</h3>
                    <div className="shadow-2xl h-[750px] flex flex-col justify-between rounded-[20px] bg-transparent border-2">
                        <div>
                            <h4 className="bg-[#00c64f] h-[50px] flex items-center justify-center rounded-t-[20px] uppercase text-white">Ad Revenue</h4>
                            <div className="p-[20px] bg-[#f7f7fb] h-[220px]">
                                <div className="non__profit__container flex flex-col justify-center items-center gap-[5px]">
                                    <h5 className="uppercase text-[18px] mt-[20px] font-semibold">Ultra</h5>
                                    <p className="text-[54px] text-[#00c64f] font-normal">
                                        {selectedTier === "monthly" ? <span>$56</span> : <span>$42</span>}
                                    </p>
                                    <span>per month*</span>
                                </div>
                            </div>
                            <div className="p-[16px] text-[14px] flex flex-col space-y-3">
                                <div className="flex items-center space-x-2">
                                    <FaRegCheckCircle size={16} />
                                    <p><span className="font-semibold">Unlimited</span> projects</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaRegCheckCircle size={16} />
                                    <p><span className="font-semibold">100 GB</span> of Disc storage</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaRegCheckCircle size={16} />
                                    <p>Advanced monetization</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaRegCheckCircle size={16} />
                                    <p>Custom app package name</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaRegCheckCircle size={16} />
                                    <p>
                                        <p>Build app for</p>
                                        <span className="font-semibold">Android and IOS</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[12px] px-[24px] pb-[24px] w-full">
                            <button className="bg-[#cfe2fb] w-full mb-[24px] uppercase text-black font-semibold rounded-full text-[10px] py-[8px]">
                                + Impressions commission
                            </button>
                            <button className="h-[46px] bg-[#00c64f] w-full mb-[24px] uppercase text-white rounded-[8px] text-[14px]">Subscribe Now</button>
                            <img className="w-[170px] mx-auto" src={Gateway} alt="" />
                        </div>
                    </div>
                </div>
                <div className="shadow-2xl h-[750px] flex flex-col justify-between rounded-[20px] bg-transparent border-2">
                    <div>
                        <h4 className="bg-[#000] h-[50px] flex items-center justify-center rounded-t-[20px] uppercase text-white">Small Business</h4>
                        <div className="p-[20px] bg-[#f7f7fb] h-[220px]">
                            <div className="small__business__container flex flex-col justify-center items-center gap-[5px]">
                                <h5 className="uppercase text-[18px] mt-[20px] font-semibold">Services App</h5>
                                <p className="text-[54px] text-[#000] font-normal">
                                    {selectedTier === "monthly" ? <span>$76</span> : <span>$57</span>}
                                </p>
                                <span>per month*</span>
                            </div>
                        </div>
                        <div className="p-[16px] text-[14px] flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <div>
                                    <span className="font-semibold">App for your</span>
                                    <p>(Barber shop, Massage Salon, Tatoo Studio, etc.)</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    A fast and convenient “book an appointment” solution
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Integration with Firebase and <a href="#">simplybook.com</a>
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    <p>Build app for</p>
                                    <span className="font-semibold">Android and IOS</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[12px] px-[24px] pb-[24px]">
                        <button className="h-[46px] bg-[#000] w-full mb-[24px] uppercase text-white rounded-[8px] text-[14px]">Subscribe Now</button>
                        <img className="w-[170px] mx-auto" src={Gateway} alt="" />
                    </div>
                </div>
                <div className="shadow-2xl h-[750px] flex flex-col justify-between rounded-[20px] bg-transparent border-2">
                    <div>
                        <h4 className="bg-[#40189e] h-[50px] flex items-center justify-center rounded-t-[20px] uppercase text-white">Ecommerce</h4>
                        <div className="p-[20px] bg-[#f7f7fb] h-[220px]">
                            <div className="woocommerce__container flex flex-col justify-center items-center gap-[5px]">
                                <h5 className="uppercase text-[18px] mt-[20px] font-semibold">Woocommerce</h5>
                                <p className="text-[54px] text-[#40189e] font-normal">
                                    {selectedTier === "monthly" ? <span>$76</span> : <span>$57</span>}
                                </p>
                                <span>per month*</span>
                            </div>
                        </div>
                        <div className="p-[16px] text-[14px] flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Assigned manager
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    One Signal push-notifications
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    App chat
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Pre designed templates
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Custom integrations
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Popular integrations
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    <p>Build app for</p>
                                    <span className="font-semibold">Android and IOS</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[12px] px-[24px] pb-[24px]">
                        <button className="h-[46px] bg-[#000] w-full mb-[24px] uppercase text-white rounded-[8px] text-[14px]">Subscribe Now</button>
                        <img className="w-[170px] mx-auto" src={Gateway} alt="" />
                    </div>
                </div>
                <div className="shadow-2xl h-[750px] flex flex-col justify-between rounded-[20px] bg-transparent border-2">
                    <div>
                        <h4 className="bg-[#40189e] h-[50px] flex items-center justify-center rounded-t-[20px] uppercase text-white">Ecommerce</h4>
                        <div className="p-[20px] bg-[#f7f7fb] h-[220px]">
                            <div className="woocommerce__container flex flex-col justify-center items-center gap-[5px]">
                                <h5 className="uppercase text-[18px] mt-[20px] font-semibold">Woocommerce</h5>
                                <p className="text-[54px] text-[#40189e] font-normal">
                                    {selectedTier === "monthly" ? <span>$60</span> : <span>$80</span>}
                                </p>
                                <span>per month*</span>
                            </div>
                        </div>
                        <div className="p-[16px] text-[14px] flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Assigned manager
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Communicate & Convert Customers with push notifications
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Popular integrations
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Make products video reviews
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    Chat with customers
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegCheckCircle size={16} />
                                <p>
                                    <p>Build app for</p>
                                    <span className="font-semibold">Android and IOS</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[12px] px-[24px] pb-[24px]">
                        <button className="h-[46px] bg-[#000] w-full mb-[24px] uppercase text-white rounded-[8px] text-[14px]">Subscribe Now</button>
                        <img className="w-[170px] mx-auto" src={Gateway} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
