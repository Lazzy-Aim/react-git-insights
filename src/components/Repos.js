import React from "react";

const Repos = ({repo}) => {
  return (
    <div className="mt-2">
      { repo?.map(item => (
        <p key={item.id} className="text-center">{item.name}</p>
      )) }
    </div>
  )
}

export default Repos;