export default function Collections() {
  return (
    <section className="py-20 px-8 bg-white">
      <h2 className="text-4xl text-center font-light mb-12">
        Our Collections
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          Bridal Collection
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          Festive Collection
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          Traditional Collection
        </div>
      </div>
    </section>
  );
}