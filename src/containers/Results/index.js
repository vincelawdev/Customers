import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';

const Results = () => {
  const { searchResults } = useSelector((state) => ({
    searchResults: state.form.searchResults,
  }));

  const renderSearchResults = () => {
    const formattedSearchResults = [];

    searchResults.forEach(result => {
      Object.keys(result).forEach(key => {
        // all other fields
        if (!Array.isArray(result[key])) {
          formattedSearchResults.push(<tr key={key}><td><strong>{key}</strong></td><td>{result[key]}</td></tr>);
        }
        // policies
        else {
          formattedSearchResults.push(<tr key={key}><td><strong>{key}</strong></td><td>{result[key].join(',')}</td></tr>);
        }
      });      
    });

    return formattedSearchResults;
  };  

  if (Array.isArray(searchResults) && searchResults.length > 0) {
    return (
      <Container>
        <h1>Customers Search Form Results</h1>
        <table>
          <tbody>
            {renderSearchResults()}
          </tbody>
        </table>
      </Container>
    );
  }

  return null;
};
  
export default Results;
