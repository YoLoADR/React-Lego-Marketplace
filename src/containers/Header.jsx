// Header.jsx
function Header() {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1083524158/fr/photo/cadeaux-de-no%C3%ABl-femme-emballage.jpg?s=2048x2048&w=is&k=20&c=6sR4B4kVI_WJK8STPpCHb7dF8lg2GlpZkn7Nlwuj1hY=')",
      }}
    >
      <div className="text-left">
        <h1 className="text-4xl font-bold text-black">
          Nos produits de Noël !
        </h1>
        <p className="mt-6 text-lg text-white">
          Une sélection rien que pour vous !
        </p>
      </div>
    </div>
  );
}

export default Header;
