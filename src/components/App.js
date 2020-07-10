import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        console.log(term);

        // Using ASYC AWAIT
        const response = await axios
            .get("https://api.unsplash.com/search/photos", {
                params: {
                    query: term,
                },
                headers: {
                    Authorization:
                        "Client-ID jwwfeW0mbqFEVb1SIWHbQRYMhAgcb0YL4pTqkWdG-Tk",
                },
            });

        console.log(response.data.results);

        // Using Promises
        //   axios
        //   .get("https://api.unsplash.com/search/photos", {
        //     params: {
        //       query: term,
        //     },
        //     headers: {
        //       Authorization:
        //         "Client-ID jwwfeW0mbqFEVb1SIWHbQRYMhAgcb0YL4pTqkWdG-Tk",
        //     },
        //   })
        //   .then((response) => {
        //     console.log(response.data.results);
        //   });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
