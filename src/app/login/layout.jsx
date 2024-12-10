import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Welcome */}
            <div className="relative top-0 left-0 aspec-[1588/498] z-0 w-full h-48">
                <Image
                    src="/banner_bee.webp"
                    alt="Bee banner"
                    fill
                    className=" object-cover"
                />
            </div>
            {/* Content */}
            <div className="flex-1">
                {children}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
