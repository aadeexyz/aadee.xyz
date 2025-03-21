import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
    return (
        <header className="sticky left-0 top-0 z-[100] bg-background w-full flex justify-center items-stretch">
            <div className="border-y border-dashed flex-1" />

            <nav className="container flex justify-between items-center">
                <div className="">
                    <Button
                        variant={"ghost"}
                        className="rounded-none border border-dashed hover:border-foreground px-6 sm:px-12"
                        asChild
                    >
                        <Link href="/" className="font-bold text-xl">
                            Aadee
                        </Link>
                    </Button>
                </div>

                <div className="w-full h-full border-y border-dashed" />

                <ul className="flex group">
                    <li className="">
                        <Button
                            variant={"ghost"}
                            className="rounded-none border border-dashed border-r-0 hover:border-foreground px-6 sm:px-12"
                            asChild
                        >
                            <a
                                href="https://x.com/aadeexyz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                X
                            </a>
                        </Button>
                    </li>

                    <li>
                        <div className="h-full w-full border-l border-dashed group-hover:border-foreground transition-colors" />
                    </li>

                    <li className="">
                        <Button
                            variant={"ghost"}
                            className="rounded-none border border-dashed border-l-0 hover:border-foreground px-6 sm:px-12"
                            asChild
                        >
                            <a
                                href="https://github.com/aadeexyz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </Button>
                    </li>
                </ul>
            </nav>

            <div className="border-y border-dashed flex-1" />
        </header>
    );
}
