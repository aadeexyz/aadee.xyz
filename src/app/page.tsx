export default function HomePage() {
    return (
        <div>
            <div className="p-12 space-y-4">
                <h2 className="text-foreground font-semibold text-lg">
                    WhoAmI
                </h2>

                <p>
                    {"I'm"} a developer who loves tinkering around with Blockchain
                    and Generative AI. Currently {"I'm"} exploring privacy
                    preserving technologies like{" "}
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
                        href="https://www.fireblocks.com/what-is-mpc/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MPC
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
                    ,{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://mirror.xyz/pvnzpvnz.eth/0S2aVa9McHZtIpKadfDxmu0axv28z4H60vSJKx_Hkag"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NMC
                    </a>{" "}
                    and,{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://learn.microsoft.com/en-us/azure/confidential-computing/trusted-execution-environment"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TEE
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
                    Recently I participated in{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://open.scroll.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Scroll Open
                    </a>
                    . During the hackathon me and friend built{" "}
                    <a
                        className="border border-dashed px-1 hover:border-foreground transition-colors text-foreground hover:bg-muted"
                        href="https://desync.fi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        deSync
                    </a>{" "}
                    - a zero-interest lending platform. Post hackathon most of
                    my time is spent on makign deSync better as well as
                    exploring new ideas.
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
                            href="https://github.com/aadeexyz/aptos-vault"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Aptos Vault
                                </h3>

                                <p>Token vault on Aptos network</p>
                            </div>

                            <p>github</p>
                        </a>
                    </div>
                </div>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://github.com/aadeexyz/event-staking"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Event Staking
                                </h3>

                                <p>Stake tokens to RSVP for an event</p>
                            </div>

                            <p>github</p>
                        </a>
                    </div>
                </div>

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://github.com/aadeexyz/aptos-nft-api"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Aptos NFT Api
                                </h3>

                                <p>Express API to fetch Apots NFT data</p>
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

                <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center bg-background">
                    <div className="container">
                        <a
                            className="space-x-4 border border-dashed py-6 px-12 flex items-center justify-between hover:bg-muted hover:text-foreground hover:border-foreground transition-colors"
                            href="https://github.com/aadeexyz/sudoku"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-foreground font-medium">
                                    Sudoku Onchain
                                </h3>

                                <p>
                                    Create and challenege other players to solve
                                    your sudoku onchain
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
