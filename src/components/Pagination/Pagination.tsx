import { useEffect, useState } from "react";
import { MainPokemon } from "../../react-app-env"
import ReactPaginate from "react-paginate"
import Card from "../Card/Card";
import './Pagination.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  itemsPerPage: number;
  items: MainPokemon[];
}

const PaginatedData: React.FC<Props> = ({ itemsPerPage, items }) => {
  const [filterPokemons, setFilterPokemons] = useState(items)
  const [currentPage, setCurrentPage] = useState(0)
  const pageCount = Math.ceil( filterPokemons.length === 0 ? items.length / itemsPerPage : filterPokemons.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filterPokemons.length === 0 ? items.slice(offset, offset + itemsPerPage) : filterPokemons.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const [search, setSearch] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setSearch(e.target.value)
  }

  useEffect(() => {
      let filter = items.filter(item => item.name.includes(search))
      setFilterPokemons(filter)
  }, [search])
  
  

  return (
    <div>
      <div className="search">
      {search ==="" ?  
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        : 
        <FontAwesomeIcon icon={faChevronLeft} />
      }
      <input className="search-input" type="text" value={search} onChange={handleSearch} placeholder={"Search"}/>
    </div>
      <div className="main-container">
        {currentItems.map((pokemon, index)=>{
            console.log("holaa")
            return(
              <Card pokemon={pokemon} index={index+currentPage*itemsPerPage} key={index}/>
            )
          })
        }
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

