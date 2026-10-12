import Image from "next/image";

export type Review = {
    id: number;
    name: string;
    role: string;
    comment: string;
    image: string;
};

interface MarqueeRowProps {
    reviews: Review[];
    direction?: "left" | "right";
}

export default function MarqueeRow({
    reviews,
    direction = "left",
}: MarqueeRowProps) {
    // ডুপ্লিকেট করছি যাতে সিমলেস লুপ হয়
    const duplicated = [...reviews, ...reviews];

    return (
        <div className="group relative flex overflow-hidden">
            <div
                className={`flex gap-4 py-2 ${direction === "left"
                        ? "animate-marquee-left"
                        : "animate-marquee-right"
                    } group-hover:[animation-play-state:paused]`}
            >
                {duplicated.map((review, i) => (
                    <ReviewCard key={`${review.id}-${i}`} review={review} />
                ))}
            </div>
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="flex w-[340px] shrink-0 items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
            {/* ইউজারের ছবি */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-green-100">
                <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                />
            </div>

            {/* টেক্সট */}
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                    <h4 className="truncate text-sm font-semibold text-gray-900">
                        {review.name}
                    </h4>
                    <span className="shrink-0 text-xs text-green-600">✔</span>
                </div>
                <p className="text-xs text-gray-500">{review.role}</p>
                <p className="mt-1.5 line-clamp-2 text-sm text-gray-600 leading-snug">
                    “{review.comment}”
                </p>
            </div>
        </div>
    );
}
