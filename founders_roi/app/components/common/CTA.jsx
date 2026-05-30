export default function CTA({ text = "Get Started" }) {
  return (
    <button className="btn-primary shadow-lg shadow-blue-600/20 text-lg font-bold">
      {text}
    </button>
  );
}