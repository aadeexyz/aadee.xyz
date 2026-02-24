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

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://desync.fi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    deSync
                                </h3>

                                <p>Zero-Interest Lending Platform</p>
                            </div>

                            <p>Website</p>
                        </a>
                    </div>
                </div>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://tryonme.co"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    TryOnMe
                                </h3>

                                <p>
                                    Virtual Try On using Diffusion based models
                                </p>
                            </div>

                            <p>Website</p>
                        </a>
                    </div>
                </div>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://tactus.aadee.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Tactus
                                </h3>

                                <p>Add haptic feedbac to your website</p>
                            </div>

                            <p>Website</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-dashed" />

            <div className="px-12 space-y-4 py-12">
                <h2 className="text-foreground font-semibold text-lg">
                    Experiments
                </h2>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://github.com/aadeexyz/orbital"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Orbital
                                </h3>

                                <p>
                                    An AMM with concentrated liquidity for pools
                                    of 2, 3, or 10,000 stablecoins
                                </p>
                            </div>

                            <p>github</p>
                        </a>
                    </div>
                </div>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://github.com/aadeexyz/tactus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Tactus
                                </h3>

                                <p>
                                    Add native-like haptic feedback to any web
                                    app.
                                </p>
                            </div>

                            <p>github</p>
                        </a>
                    </div>
                </div>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://github.com/aadeexyz/erc-8004"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    ERC-8004
                                </h3>

                                <p>
                                    Reference implementation for ERC-8004:
                                    Trustless Agents
                                </p>
                            </div>

                            <p>GitHub</p>
                        </a>
                    </div>
                </div>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://github.com/aadeexyz/rentable-nfts"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Rentable NFT
                                </h3>

                                <p>
                                    Allows the owner of an NFT to rent it out
                                    for a fixed period
                                </p>
                            </div>

                            <p>github</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
