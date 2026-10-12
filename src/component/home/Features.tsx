const features = [
    {
        icon: "🎨",
        title: "অনুমোদিত টেমপ্লেট",
        description:
            "দলীয় রং, প্রতীক ও লোগো সহ প্রস্তুত টেমপ্লেট থেকে বেছে নিন।",
    },
    {
        icon: "✍️",
        title: "নিখুঁত বাংলা লেখা",
        description:
            "যুক্তবর্ণ ও কারচিহ্ন সহ বাংলা লেখা সঠিকভাবে প্রদর্শিত হবে।",
    },
    {
        icon: "🤖",
        title: "AI সহায়তা",
        description:
            "পটভূমি ও নকশার জন্য AI সহায়তা, সীমা শেষ হলে বিকল্প AI চেষ্টা।",
    },
    {
        icon: "📥",
        title: "PNG ডাউনলোড",
        description:
            "তৈরি পোস্টার প্রিভিউ দেখে সরাসরি PNG হিসেবে ডাউনলোড করুন।",
    },
    {
        icon: "🕘",
        title: "পোস্টার হিস্টোরি",
        description:
            "আগের সব পোস্টার হিস্টোরিতে সংরক্ষিত থাকবে, যেকোনো সময় দেখুন।",
    },
    {
        icon: "🔒",
        title: "নিরাপদ ব্যবহার",
        description:
            "শুধু অনুমোদিত ব্যবহারকারী প্রবেশ করতে পারবেন, ডেটা সুরক্ষিত।",
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        কেন এই অ্যাপ ব্যবহার করবেন?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        রাজনৈতিক দলের প্রয়োজনে সবকিছু এক জায়গায়
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all"
                        >
                            <div className="text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
