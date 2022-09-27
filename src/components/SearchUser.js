import { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/github/githubSlice";
import logo from '../images/logo.svg';

const SearchUser = () => {
  const [search, setSearch] = useState('')
  const [clearInput, setClearInput] = useState(false)
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  });
  const dispatch = useDispatch()


  useEffect(() => {
    setClearInput(debounced.length > 2 && data?.length > 0)
  }, [debounced, data])


  return (
    <div className="flex flex-col items-center">
      { isError && <p className="text-center text-red-600">Error!!!</p> }

      <div className="container mx-auto px-6 pb-12 flex justify-between items-center">
            <img alt="logo" src={logo} className=" w-50 h-10"/>
            <input
            className="border-button bg-card rounded  py-2 px-4 ml-32"
            type="text"
            placeholder="Search GitHub User"
            value={search}
            onChange={e => setSearch(e.target.value)} />
            
      </div>

      { clearInput && <ul className="mt-5 list-none flex justify-center flex-wrap">
        { isLoading && <p className="text-center">Loading...</p> }
        { data?.map(user => (
          <li
            key={user.id}
            onClick={() => console.log(user.login)}
            className="relative bg-card w-72 h-96 py-4 px-4 shadow-xl m-2 rounded flex items-center flex-col justify-center">
              
              <p className="text-center mt-4 mb-2 text-xl">id: {user.id}</p>
              <div className="w-32 h-32 pt-4">
                <img
                  src={user.avatar_url}
                  alt={user.login} />
              </div>
              <h2 className="text-center uppercase pt-9 pb-4 mt-2 text-xl">{user.login}</h2>
              <button
                className=" w-5 rounded px-12 py-4 h-5 mb-2 bg-button flex justify-center items-center"
                onClick={() => dispatch(addFavorite(user))}>
                  Add
              </button>
          </li>
        )) }
      </ul>}
    </div>
  )
}

export default SearchUser;