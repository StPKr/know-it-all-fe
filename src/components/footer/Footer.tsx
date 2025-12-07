export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-4 flex  justify-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My Company. All rights reserved.
            </p>
        </footer>
    );
}
