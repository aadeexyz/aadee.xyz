export function Footer() {
    return (
        <footer className="w-full border-y border-dashed flex justify-center text-muted-foreground">
            <div className="p-12 container border-x border-dashed flex justify-between">
                <div>© {new Date().getFullYear()} Aadee</div>

                <div className="flex space-x-4">
                    <a
                        href="https://x.com/aadeexyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-dashed px-1 hover:border-foreground hover:bg-muted text-foreground transition-colors"
                    >
                        X
                    </a>

                    <a
                        href="https://github.com/aadeexyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-dashed px-1 hover:border-foreground hover:bg-muted text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
