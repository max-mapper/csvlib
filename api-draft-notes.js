csv.rows(csvstring) // Returns an array of row strings

csv.data(csv.rows(csvstring)) // Returns an array of data row strings

csv.header(csv.rows(csvstring)) // Returns the header string

csv.properties(csv.header(csv.rows(csvstring))) // Returns an array of header properties