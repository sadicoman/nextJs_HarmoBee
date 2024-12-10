import Link from "next/link";

export default function Login() {
	return (
		<main className="container mx-auto mt-12 px-6">
			<h1 className="text-center font-bold text-primary text-3xl">
				Comment souhaitez-vous utiliser HarmoBee
			</h1>
			<div className="mt-5 w-[500px] mx-auto flex flex-col gap-4">
				{/* Signup and signin */}
				<Link href="/login/signup">
					<div className="auth-method">
						<h2 className="font-bold text-white">
							S'inscrie ou se connecter avec une adresse email
						</h2>
						<div className=" text-neutral-light mt-4">
							Connectez-vousou creer un profils ave cune adresse email. Cela vous permetra
							de publier du contenu.
						</div>
					</div>
				</Link>

				{/* Invited */}
				<Link href="/login/pass">
					<div className="auth-method">
						<h2 className="font-bold text-white">Utilisé sans profil</h2>
						<div className=" text-neutral-light mt-4">
							Vous pouvez naviguer dans Harmobee sans profil, mais vous ne pourrez pas
							intéragir avec avec du contenue ni en publier.
						</div>
					</div>
				</Link>
			</div>
		</main>
	);
}
