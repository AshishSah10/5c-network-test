import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function RepoDetails(props) {
  const repo = { ...props.repo };
  return (
    <div>
      <img
        src={repo.owner.avatar_url}
        height="70px"
        width="70px"
        alt="Repo-image"
      />
      <h2>{repo.name}</h2>
      <button>Set up a plan</button>
      <p>{repo.description}</p>
    </div>
  );
}
