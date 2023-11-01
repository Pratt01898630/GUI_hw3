/*
File: multTable.js
GUI Assignment: Creating an Interactive Dynamic Table
Aaron Pratt, Created on October 25, 2023
Description: Contains all java script code for recieving user input and generating multiplication table
*/

// get references to the html elements
    const minColumnInput = document.getElementById('min-column');
    const maxColumnInput = document.getElementById('max-column');
    const minRowInput = document.getElementById('min-row');
    const maxRowInput = document.getElementById('max-row');
    const table = document.getElementById('multiplication-table');
    const submitButton = document.getElementById('submit-button');

    // event listener for button to generate the table
    submitButton.addEventListener('click', generateTable);

    function generateTable() {
      // retrieve input values
      const minColumn = parseInt(minColumnInput.value);
      const maxColumn = parseInt(maxColumnInput.value);
      const minRow = parseInt(minRowInput.value);
      const maxRow = parseInt(maxRowInput.value);

      // check if input values are within the range of -50 to 50
      if (minColumn < -50 || minColumn > 50 || maxColumn < -50 || maxColumn > 50 ||
        minRow < -50 || minRow > 50 || maxRow < -50 || maxRow > 50 ||
        isNaN(minColumn) || isNaN(maxColumn) || isNaN(minRow) || isNaN(maxRow)) {
        // error message if input is out of range
        table.innerHTML = '<tr><td colspan="5">Input values must be between -50 and 50.</td></tr>';
      }
      else if (minColumn > maxColumn || minRow > maxRow) {
        // Different error message if min values are greater than max values
        table.innerHTML = '<tr><td colspan="5">Minimum values must not be greater than maximum values.</td></tr>';
      }
      else {
        // clear any previous error message
        table.innerHTML = '';

        for (let i = minRow - 1; i <= maxRow; i++) {
          // creates a new row
          const row = document.createElement('tr');

          for (let j = minColumn - 1; j <= maxColumn; j++) {
            // creates a new element in the table
            const element = document.createElement('td');

            if (i === minRow - 1 && j === minColumn - 1) {
              // set the top-left cell to empty
              element.textContent = '';

            } else if (i === minRow - 1) {
              // if in the first row (except the top-left cell), set to j
              element.textContent = j;

            } else if (j === minColumn - 1) {
              // if in the first column (except the top-left cell), set to i
              element.textContent = i;

            } else {
              // set other cells to i * j
              element.textContent = i * j;

            }
            // add element to row
            row.appendChild(element);
          }
          // add row to table
          table.appendChild(row);
        }
      }
    }