import React from "react";

export const Jumbotron = () => {
    return (
        <div className="container-fluid">
        <div className="p-3 bg-light">
            <h1>Hello, world!</h1>
            <p>
                This is a template for a simple marketing or informational website. It includes a large callout calles a jumbotron and
                three supporting pieces of content. Use it as a starting point to create something more unique.
            </p>
            <button type="button" className="btn btn-primary">Call to action</button>
        </div>
        </div>
    );
}