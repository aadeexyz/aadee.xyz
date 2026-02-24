const projects = [
    {
        name: "Tactus",
        description: "Add haptic feedback to your website",
        link: "https://tactus.aadee.xyz",
    },
    {
        name: "Open Economy Collab",
        description: "A place for builders to find and be found",
        link: "https://collab.openeconomy.xyz/",
    },
    {
        name: "deSync",
        description: "Zero-Interest Lending Platform",
        link: "https://desync.fi",
    },
    {
        name: "TryOnMe",
        description: "Virtual Try On using Diffusion based models",
        link: "https://tryonme.co",
    },
];

const experiments = [
    {
        name: "Orbital",
        description:
            "An AMM with concentrated liquidity for pools of 2, 3, or 10,000 stablecoins",
        link: "https://github.com/aadeexyz/orbital",
    },
    {
        name: "Tactus",
        description: "Add native-like haptic feedback to any web app.",
        link: "https://github.com/aadeexyz/tactus",
    },
    {
        name: "ERC-8004",
        description: "Reference implementation for ERC-8004: Trustless Agents",
        link: "https://github.com/aadeexyz/erc-8004",
    },
    {
        name: "Rentable NFT",
        description:
            "Allows the owner of an NFT to rent it out for a fixed period",
        link: "https://github.com/aadeexyz/rentable-nfts",
    },
];

export default function HomePage() {
    return (
        <div>
            <div className="p-12 space-y-4">
                <h2 className="text-foreground font-semibold text-lg">
                    WhoAmI
                </h2>

                <p>
                    {"I'm"} a developer who loves tinkering around with
                    Blockchain. Currently building real time trading systems. I
                    was part of{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://openeconomy.xyz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Campus S1
                    </a>
                    .
                </p>
            </div>

            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-dashed" />

            <div className="px-12 space-y-4 py-12">
                <h2 className="text-foreground font-semibold text-lg">
                    Current Obsession
                </h2>

                <p>
                    Currently {"I'm"} exploring privacy preserving technologies
                    like{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://zkp.science"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ZKP
                    </a>
                    ,{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://www.zama.ai/introduction-to-homomorphic-encryption"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        FHE
                    </a>
                    , and,{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://learn.microsoft.com/en-us/azure/confidential-computing/trusted-execution-environment"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TEE
                    </a>
                    . Also looking into prediction markets in my free time.
                </p>
            </div>

            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-dashed" />

            <div className="space-y-4 py-12">
                <h2 className="text-foreground font-semibold px-12 text-lg">
                    Projects
                </h2>

                {projects.map((project, index) => (
                    <div
                        className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background"
                        key={index}
                    >
                        <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                            <div className="container">
                                <a
                                    className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex flex-col items-start space-y-2">
                                        <h3 className="text-foreground font-medium">
                                            {project.name}
                                        </h3>

                                        <p>{project.description}</p>
                                    </div>

                                    <p>Website</p>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-dashed" />

            <div className="px-12 space-y-4 py-12">
                <h2 className="text-foreground font-semibold text-lg">
                    Experiments
                </h2>

                {experiments.map((experiment, index) => (
                    <div
                        className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background"
                        key={index}
                    >
                        <div className="container">
                            <a
                                className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                                href={experiment.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex flex-col items-start space-y-2">
                                    <h3 className="text-foreground font-medium">
                                        {experiment.name}
                                    </h3>

                                    <p>{experiment.description}</p>
                                </div>

                                <p>github</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
