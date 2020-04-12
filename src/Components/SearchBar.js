import React from 'react'

export default function SearchBar() {
    return (
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search..." />
            <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit" />
            {/* <!-- ======================
                        Search markup:
                        You can use the commented out markup below as a template
                        for your search feature, but you must use JS to create and
                        append it to `search-container` div.
                        IMPORTANT: Altering the arrangememnt of the markup and the
                        attributes used may break the styles or functionality.
                        let x;
                      `  <form action="#" method="get">
                          x +=  <input type="search" id="search-input" class="search-input" placeholder="Search...">
                  (else)  x +=  <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                          </form> `
                    ======================= --> */}
        </form>
    )
}
