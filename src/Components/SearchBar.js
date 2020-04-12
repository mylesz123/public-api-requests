import React from 'react'

export default function SearchBar() {
    // look up how to return results, rev default on submit to prevent refresh
    return (
        <div className="search-container">
            <form action="#" method="get">
                <input type="search" id="search-input" className="search-input" placeholder="Search..." />
                <input type="submit" value="&#x1F50D;" id="serach-submit" className="search-submit" />
                {/* <!-- ======================
                        Search markup:
                        You can use the commented out markup below as a template
                        for your search feature, but you must use JS to create and
                        append it to `search-container` div.
                        IMPORTANT: Altering the arrangememnt of the markup and the
                        attributes used may break the styles or functionality.
                    ======================= --> */}
            </form>
        </div>
    )
}
