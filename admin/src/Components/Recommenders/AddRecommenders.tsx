import React, { useState, ChangeEvent } from "react";
import RecommenderDataService from "../../services/Recommenders";
import IRecommenderData from '../../Types/recommender';

const AddRecommenderForm: React.FC = () => {
  const initialRecommenderState = {
    name: "",
    username: "",
    email: "",
    password: "",
    country: "",
    whatRecommends: "",
    type: "",
    RegID: null,
    about: ""
  };
  const [recommender, setRecommender] = useState<IRecommenderData>(initialRecommenderState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRecommender({ ...recommender, [name]: value });
  };

  const saveRecommender = () => {
    var data = {
      name: recommender.name,
    username: recommender.name,
    email: recommender.email,
    password: recommender.password,
    country:recommender.country,
    whatRecommends: recommender.whatRecommends,
    type: recommender.type,
    RegID: recommender.RegID,
    about: recommender.about,
    }
    RecommenderDataService.create(data)
      .then((response: any) => {
        setRecommender({
          
            name: response.data.name,
            username: response.data.name,
            email: response.data.email,
            password: response.data.password,
            country:response.data.country,
            whatRecommends: response.data.whatRecommends,
            type: response.data.type,
            RegID: response.data.RegID,
            about: response.data.about,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newRecommender = () => {
    setRecommender(initialRecommenderState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newRecommender}>
            Add
          </button>
        </div>
      ) : (
        <div>

<div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={recommender.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
          </div>
         
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                 type="email"
                 className="form-control"
                 id="email"
                 required
                 value={recommender.email}
                 onChange={handleInputChange}
                 name="email"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={recommender.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
            <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                required
                value={recommender.country}
                onChange={handleInputChange}
                name="country"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">What Recommends</label>
              <input
                type="text"
                className="form-control"
                id="whatRecommends"
                required
                value={recommender.whatRecommends}
                onChange={handleInputChange}
                name="whatRecommends"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={recommender.type}
                onChange={handleInputChange}
                name="type"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Registration ID</label>
              <input
                type="text"
                className="form-control"
                id="RegID"
                required
                value={recommender.RegID}
                onChange={handleInputChange}
                name="RegID"
              />
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="form-group mb-0">
              <label className="form-label">About Me</label>
              <input
                type="text"
                className="form-control"
                id="about"
                required
                value={recommender.about}
                onChange={handleInputChange}
                name="about"
              />
            </div>
          </div>


        

          
          <button onClick={saveRecommender} className="btn btn-primary">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddRecommenderForm;