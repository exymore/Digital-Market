import React, { useState, useEffect } from 'react';

const Manufacturers = props => (
  <div className="column">
    <div>
      <h2 className="subtitle">Manufacturer:</h2>
      <div className="manList">{props.list}</div>
    </div>
  </div>
);

const SortBy = props => (
  <div className="column is-3">
    <div>
      <h2 className="subtitle" style={{ marginBottom: '0.5rem' }}>
        Sort By:
      </h2>
      <div className="field">
        <div className="control">
          <div className="select is-primary">
            <select value={props.value} onChange={props.onChange}>
              <option value="date">Date</option>
              <option value="priceLTH">Price: lowest first</option>
              <option value="priceHTL">Price: highest first</option>
              <option value="alphabet">By alphabet</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const Filters = props => {
  const [value, setValue] = useState('date');

  let handleChange = e => {
    setValue(e.target.value);
    props.onChange(e.target.value.toString());
  };

  let getListOfManufacturers = () => {
    return props.list.map(item => (
      <span key={item.toString()}>
        <a
          className="manufacturer text"
          onClick={() => props.updateBrand(item.toString())}
        >
          {item}
        </a>
      </span>
    ));
  };

  useEffect(() => {
    getListOfManufacturers();
  }, []);

  return (
    <section className="section is-hero">
      <div className="container">
        <h1 className="title is-spaced">{capitalize(props.category)}</h1>
        <div className="inner holder columns">
          <Manufacturers list={getListOfManufacturers()} />
          <SortBy value={value} onChange={handleChange} />
        </div>
      </div>
    </section>
  );
};

export default Filters;
