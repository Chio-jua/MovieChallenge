export const Pagination = ({peliculasPerPage, totalPeliculas, currentPage, setCurrentPage}) => {

// const pageNumbers = []
// for (let i =1; i <= Math.ceil(totalPeliculas /peliculasPerPage); i++)

return (
<nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
  <a className="pagination-previous">Previous</a>
  <a className="pagination-next">Next page</a>
  <ul className="pagination-list">
   
    {/* {
        pageNumbers.map(noPage =>(
            <li key={noPage}><a className="pagination-link" aria-label="Goto page 1">{noPage}</a></li>
        ))
    } */}
    <li><span className="pagination-ellipsis">&hellip;</span></li>
    <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
    <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span className="pagination-ellipsis">&hellip;</span></li>
    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
  </ul>
</nav>
)
};