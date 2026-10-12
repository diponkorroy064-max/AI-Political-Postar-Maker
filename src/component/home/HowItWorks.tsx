const steps = [
    {
        number: "০১",
        title: "অ্যাকাউন্ট তৈরি করুন",
        description: "রেজিস্টার করে লগইন করুন এবং আপনার দল নির্বাচন করুন।",
    },
    {
        number: "০২",
        title: "টেমপ্লেট বেছে নিন",
        description:
            "কর্মসূচির ধরন অনুযায়ী অনুমোদিত টেমপ্লেট থেকে বেছে নিন।",
    },
    {
        number: "০৩",
        title: "ছবি ও তথ্য যোগ করুন",
        description:
            "সর্বোচ্চ ৩টি ছবি, নাম, পদবি, দল, এলাকা ও শিরোনাম লিখুন।",
    },
    {
        number: "০৪",
        title: "প্রিভিউ ও ডাউনলোড",
        description: "প্রিভিউ দেখে সম্পাদনা করুন, তারপর PNG ডাউনলোড করুন।",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        কীভাবে কাজ করে
                    </h2>
                    <p className="text-gray-600">মাত্র ৪টি ধাপে পোস্টার তৈরি</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 h-full">
                                <div className="text-4xl font-bold text-green-600/30 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300">
                                    →
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
