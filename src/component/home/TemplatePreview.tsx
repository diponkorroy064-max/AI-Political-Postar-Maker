import Link from "next/link";
import { Button } from "../ui/button";

// পরে API থেকে আসবে: GET /api/templates
const sampleTemplates = [
    { id: 1, name: "সভা-সমাবেশ", color: "bg-green-100" },
    { id: 2, name: "নির্বাচনী প্রচারণা", color: "bg-blue-100" },
    { id: 3, name: "জন্মদিন", color: "bg-yellow-100" },
    { id: 4, name: "শোকবার্তা", color: "bg-gray-100" },
];

export default function TemplatePreview() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        জনপ্রিয় টেমপ্লেট
                    </h2>
                    <p className="text-gray-600">
                        আপনার প্রয়োজন অনুযায়ী টেমপ্লেট বেছে নিন
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {sampleTemplates.map((template) => (
                        <Link
                            key={template.id}
                            href={`/templates/${template.id}`}
                            className="group"
                        >
                            <div
                                className={`aspect-[3/4] rounded-2xl ${template.color} border border-gray-100 flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all`}
                            >
                                <span className="text-sm font-medium text-gray-700">
                                    {template.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/templates">সব টেমপ্লেট দেখুন →</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
