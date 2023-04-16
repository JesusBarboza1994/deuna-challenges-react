import { useState } from "react";
import { MainPokemon } from "../../react-app-env"
import ReactPaginate from "react-paginate"
import Card from "../Card/Card";
import './Pagination.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  itemsPerPage: number;
  items: MainPokemon[];
}

const PaginatedData: React.FC<Props> = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div className="main-container">
        {currentItems?.map((pokemon, index)=>{
          return(
            <Card pokemon={pokemon} index={index+currentPage*itemsPerPage} key={index}/>
          )
        })}
      </div>   
      <div className="paginate-container">
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
          nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div> 
    </div>
  );
};

export default PaginatedData;

