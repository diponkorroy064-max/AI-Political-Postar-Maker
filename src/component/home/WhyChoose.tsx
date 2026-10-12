import MarqueeRow, { Review } from "./MarqueeRow";

// পরে API থেকে আসবে: GET /api/reviews
const reviewsRowOne: Review[] = [
    {
        id: 1,
        name: "মোহাম্মদ করিম",
        role: "দলীয় কর্মী, ঢাকা",
        comment: "খুব সহজে পোস্টার বানাতে পারছি, বাংলা লেখা একদম নিখুঁত আসে।",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
    },
    {
        id: 2,
        name: "ফাতেমা আক্তার",
        role: "সাংগঠনিক সম্পাদক",
        comment: "টেমপ্লেটগুলো দলীয় রঙ ও প্রতীকের সাথে মানানসই।",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    },
    {
        id: 3,
        name: "আব্দুল হক",
        role: "যুবনেতা, চট্টগ্রাম",
        comment: "মোবাইল থেকেই পোস্টার তৈরি করে দ্রুত শেয়ার করতে পারছি।",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces",
    },
    {
        id: 4,
        name: "সালমা বেগম",
        role: "মহিলা বিষয়ক সম্পাদিকা",
        comment: "শোকবার্তার পোস্টার বানানো এখন মিনিটের কাজ।",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    },
];

const reviewsRowTwo: Review[] = [
    {
        id: 5,
        name: "রফিকুল ইসলাম",
        role: "প্রচার সম্পাদক",
        comment: "PNG ডাউনলোডের মান খুব ভালো, প্রিন্টেও পরিষ্কার আসে।",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    },
    {
        id: 6,
        name: "নুসরাত জাহান",
        role: "ছাত্রনেত্রী",
        comment: "AI সীমা শেষ হলেও সাধারণ টেমপ্লেট দিয়ে কাজ চালিয়ে যেতে পারি।",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    },
    {
        id: 7,
        name: "ইমরান হোসেন",
        role: "দলীয় কর্মী, রাজশাহী",
        comment: "নেতার জন্মদিনের পোস্টার এক মিনিটেই তৈরি হয়ে যায়।",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    },
    {
        id: 8,
        name: "তানিয়া সুলতানা",
        role: "সোশ্যাল মিডিয়া টিম",
        comment: "একই ডিজাইনে অনেক পোস্টার বানানো যায়, সময় বাঁচে।",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    },
];

export default function WhyChoose() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-green-50/40 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm text-green-700 mb-4">
                        ⭐ ব্যবহারকারীদের মতামত
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        কেন আমাদের বেছে নেবেন?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        শত শত দলীয় কর্মী ও নেতা প্রতিদিন এই প্ল্যাটফর্ম ব্যবহার করছেন
                    </p>
                </div>
            </div>

            {/* Row 1 — বাম থেকে ডানে */}
            <MarqueeRow reviews={reviewsRowOne} direction="left" />

            {/* Row 2 — ডান থেকে বামে */}
            <div className="mt-4">
                <MarqueeRow reviews={reviewsRowTwo} direction="right" />
            </div>

            {/* Bottom Stats */}
            <div className="container mx-auto px-4">
                <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
                    {[
                        { number: "১০,০০০+", label: "ব্যবহারকারী" },
                        { number: "৫০,০০০+", label: "তৈরি পোস্টার" },
                        { number: "৫০+", label: "টেমপ্লেট" },
                        { number: "৪.৯/৫", label: "গড় রেটিং" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
                            <div className="text-2xl md:text-3xl font-bold text-green-600">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
