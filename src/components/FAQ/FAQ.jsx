import React from 'react'

export default function FAQ() {
    const data = [
        {
            q: "What credit cards does SpeedBatteryManufacturer.com accept?",
            a: "At this time, we accept Visa, MasterCard, Discover, American Express, SpeedBatteryManufacturer Gift cards (with a PIN), and SpeedBatteryManufacturer Loyalty Rewards. We also accept debit cards with the Visa and Master Card logos, and PayPal.SpeedBatteryManufacturer.com does not accept CODs, personal checks, debit cards without the Visa or MasterCard logos, EBT cards"
        },
        {
            q: "When is my order charged to my credit card? And when is it credited if I return the part?",
            a: "While processing your order, we place a 'hold' on your credit card for the amount of purchase. We do not charge your credit card until after your items have shipped. If you return an item to SpeedBatteryManufacturer.com or to any SpeedBatteryManufacturer store, we will provide a refund for that amount the day we process the return.Some portion of your order, containing certain types of special order items, such as, items that are shipped directly from our vendor locations, will be charged on order submission. Orders with these items cannot be canceled"
        },
        {
            q: "Can I cancel my order after I've placed it?",
            a: "Yes. Your order can be cancelled up until the payment process done.Orders with payment fulfilled can not be cancelled. Once the order has been received, you can return it either at our SpeedBatteryManufacturer stores or can be shipped back to the fulfillment center, covered under the Online Return Policy."
        }
    ]


    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white capitalize">
                        FAQ
                    </h2>
                </div>

                <div className="space-y-4 py-16">
                    {
                        data.map((item, i) => (
                            <details className="group">
                                <summary
                                    className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                                >
                                    <h5 className="font-medium text-gray-900">
                                        {item.q}
                                    </h5>

                                    <svg
                                        className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>

                                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                                   {item.a}
                                </p>
                            </details>
                        ))
                    }

                   
                </div>

            </div>
        </section>
    )
}
