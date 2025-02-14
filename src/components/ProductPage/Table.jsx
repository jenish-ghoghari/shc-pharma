const sections = [
  {
    id: "A",
    title: "Cream/Ointment",
    items: [
      "Clobetasol Propionate Cream",
      "Clobetasol Propionate + Neomycin + Tolnaftate + Ketoconazole + Iodochlorhydroxyquinoline Cream",
      "Clobetasol Propionate + Neomycin Sulphate + Miconazole Nitrate Cream",
      "Ketoconazole Cream",
    ],
  },
  {
    id: "B",
    title: "Gel",
    items: [
      "Diclofenac Diethylamine + Linseed Oil + Methyl Salicylate + Menthol Gel",
      "Diclofenac Diethylamine + Linseed Oil + Methyl Salicylate + Menthol + Capsaicin Gel",
    ],
  },
  {
    items: [
      "Diclofenac Diethylamine + Linseed Oil + Methyl Salicylate + Menthol Gel",
      "Diclofenac Diethylamine + Linseed Oil + Methyl Salicylate + Menthol + Capsaicin Gel",
    ],
  },
];

export default function TableComponent() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="py-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-4">
            <ol className="flex flex-wrap space-x-2">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/products" className="text-blue-600 hover:underline">
                  Products
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-semibold">Capsules</li>
            </ol>
          </nav>

          {/* Product Categories */}
          <p className="text-2xl font-bold text-gray-900">
            Immunosuppressive, Vasodilators, Anti-Depressants, Prokinetics-
            Psycholeptic & Antipsychotics, Anti-Coagulants, PPIs, Neuropathic
            Pain, Antimuscarinic, Antifungal, Antibiotic, NSAIDs
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border bg-white">
            <thead className="bg-[#0b1b2a] text-white">
              <tr>
                <th className="px-4 py-3 text-left">No</th>
                <th className="px-4 py-3 text-left">Composition</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <>
                  <tr key={section.id} className="bg-blue-200 border-b">
                    <td className="px-4 py-3 font-bold border-r">
                      {section.id}
                    </td>
                    <td className="px-4 py-3 font-bold">{section.title}</td>
                  </tr>
                  {section.items.map((item, index) => (
                    <tr
                      key={`${section.id}-${index}`}
                      className="border-b hover:bg-gray-100"
                    >
                      <td className="px-4 py-3 border-r">{index + 1}</td>
                      <td className="px-4 py-3">{item}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
