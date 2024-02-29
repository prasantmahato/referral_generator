import React from "react";

const socials = [
    {
        title: "GitHub-Repo",
        href: "https://github.com/prasantmahato/referral_generator",
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/prasant-mahato/",
    },
];

const Footer = () => (
    <>
        <div class="container">
            <footer class="py-3 my-4 border-top">
                <ul class="nav justify-content-center mb-3">
                    {socials.map((social) => (
                        <li key={social.title}>
                            <a
                                href={social.href}
                                className="nav-link px-2 text-decoration-none"
                            >
                                {social.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <p class="text-center text-body-secondary mt-4">
                    &copy; 2024{" "}
                    <span className="orange">Referral Generator.</span>
                </p>
                <p className="text-center">
                    Discover a lightweight app created by{" "}
                    <a href="https://www.prasantmahato.github.io/">Prasant</a>{" "}
                    to simplify referral requests.
                </p>
            </footer>
        </div>
    </>
);

export default Footer;
