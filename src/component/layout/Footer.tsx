import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-3">
                            AI Political Party Poster Maker
                        </h3>
                        <p className="text-sm leading-relaxed max-w-md">
                            রাজনৈতিক দল ও অনুমোদিত কর্মীদের জন্য সহজে পোস্টার তৈরির
                            প্ল্যাটফর্ম।
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">দ্রুত লিংক</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/templates" className="hover:text-white">
                                    টেমপ্লেট
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="hover:text-white">
                                    কীভাবে কাজ করে
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white">
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">আইনগত</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-white">
                                    গোপনীয়তা নীতি
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white">
                                    শর্তাবলী
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-800 mt-10 pt-6 text-center text-sm"
                    suppressHydrationWarning
                >
                    © AI Political Party Poster Maker. সর্বস্বত্ব সংরক্ষিত।
                </div>
            </div>
        </footer>
    );
}
