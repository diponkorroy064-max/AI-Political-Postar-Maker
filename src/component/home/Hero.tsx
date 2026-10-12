import Link from "next/link";
import { Button } from "../ui/button";
// import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 md:py-28">
            <div className="container mx-auto px-4 text-center">
                {/* Badge */}
                <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm text-green-700 mb-6">
                    🎉 রাজনৈতিক দলের জন্য বিশেষভাবে তৈরি
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    মিনিটেই তৈরি করুন <br />
                    <span className="text-green-600">পেশাদার রাজনৈতিক পোস্টার</span>
                </h1>

                {/* Description */}
                <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
                    অনুমোদিত টেমপ্লেট, ছবি ও বাংলা লেখা দিয়ে সহজে পোস্টার তৈরি করুন।
                    নির্বাচনী প্রচারণা, সভা-সমাবেশ, জন্মদিন কিংবা শোকবার্তা — সবকিছুর জন্য।
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-base"
                        asChild
                    >
                        <Link href="/register">বিনামূল্যে শুরু করুন</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-base" asChild>
                        <Link href="/templates">টেমপ্লেট দেখুন</Link>
                    </Button>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                    {[
                        { number: "৫০+", label: "রেডি টেমপ্লেট" },
                        { number: "৩", label: "ছবি আপলোড" },
                        { number: "PNG", label: "উচ্চ রেজোলিউশন" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-3xl font-bold text-green-600">
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
