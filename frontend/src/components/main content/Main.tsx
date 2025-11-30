import Card from "../ui/Card";

export default function Main() {
  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">Choose a Topic</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card title="History" description="Test your knowledge about world history." />
        <Card title="Science" description="Challenge your scientific understanding." />
        <Card title="Movies" description="Fun questions about movies and TV shows." />
        <Card title="Geography" description="How well do you know the world?" />
      </div>
    </div>
  );
}
