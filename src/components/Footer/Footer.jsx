export default function Footer() {
    return (
        <footer className=" text-neutral-light py-6">
            <div className="container mx-auto px-4">
                {/* Section des liens */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0 text-center sm:text-left">
                        <h5 className="text-lg font-bold text-primary">HarmoBee</h5>
                        <p className="text-sm text-neutral-dark">
                            L'harmonie à portée de main.
                        </p>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#about"
                                className="text-neutral-light hover:text-primary hover:underline"
                            >
                                À propos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="text-neutral-light hover:text-primary hover:underline"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-neutral-light hover:text-primary hover:underline"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section des droits */}
                <div className="mt-4 text-center text-sm text-neutral-dark">
                    <p>© {new Date().getFullYear()} HarmoBee. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
