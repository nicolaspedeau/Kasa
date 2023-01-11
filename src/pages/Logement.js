//Récupère l'ID dans l'URL
function getId() {
  const url = window.location.search
  const urlParams = new URLSearchParams(url)
  const urlId = urlParams.get('id')
  return urlId

};

function Logement() {
    return (
      <div>
        <h1>Page Logement</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
    )
  }
  
  export default Logement