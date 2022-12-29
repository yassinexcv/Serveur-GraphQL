import React from "react";  
import Navbar from "./components/Navbar";
import{ ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Cars from "./components/Cars";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Navbar />
    <div className="text-3xl underline">
      <Cars/>
    </div>
    </ApolloProvider>


    </>
  );
}

export default App;
