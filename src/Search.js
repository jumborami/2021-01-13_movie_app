import React from "react";
import api from "./api";
//import SearchResult from "./SearchResult";
import "./search.css";

export default class extends React.Component {
  state = {
    searchTerm: "",
    results: null,
    page: 1,
    total_pages: 1,
    items: 20,
    preItems: 0,
    loading: false,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    console.log(searchTerm);
    if(searchTerm !== "") {
      this.searchByTerm()
    }
  };

  updateTerm = event => {
    const { target : { value } } = event;
    console.log(value);
    this.setState({
      searchTerm: value
    })
  };

  searchByTerm = async () => {
    const { searchTerm, page } = this.state;
    this.setState({ loading: true });
    try {
      const { data : { results }, data: { total_pages }} = await api.get(`search/movie?api_key=0d32823bbea4b0889cdd7c4bce3b1dbc&language=en-US&query=${searchTerm}&page=${page}`);

      this.setState({
        result: [this.state.results, ...results], total_pages
      })
      console.log(results);
    } catch {
      this.setState({ error: "Can't find results" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { results, searchTerm, loading, error } = this.state;
    return (
      <>
      <div className="searchBox">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search Movies here..."
            value={searchTerm}
            onChange={this.updateTerm}
          />
        </form>
      </div>
      {/* <SearchResult 
        results={results}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        loading={loading}
        error={error}
      /> */}
      </>
    )
  }
};
