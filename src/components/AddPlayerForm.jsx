import { useState } from 'react'

const AddPlayerForm = ({ baseUrl }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const getPlayer = async () => {
    const id = Math.floor(Math.random() * 500);

    try{
      const response = await fetch(`${baseUrl}/players`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify ({
          name,
          breed,
          status,
          imageUrl,
          id,
        })
      })
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(`ERROR caught when fetching API for Add Player Form`, error);
    }
  }
  const handleSubmission = (event) => {
    event.preventDefault();
    getPlayer();
  }

  return (
    <>
      <form onSubmit={handleSubmission}>
        <label>
          Puppy Name:
          <input 
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </label>
        <label>
          Puppy Breed:
          <input 
            type="text"
            id="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          ></input>
        </label>
        <label>
          Puppy Status:
          <input 
            type="text"
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          ></input>
        </label>
        <label>
          Puppy Image Url:
          <input 
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          ></input>
        </label>
        <input type="submit" value="Add a Puppy"></input>
      </form>
    </>
  );
};

export default AddPlayerForm;