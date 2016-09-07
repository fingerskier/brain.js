/**
 * multiply {left} and {right} matrix weights to {into}
 * @param {Matrix} into
 * @param {Matrix} left
 * @param {Matrix} right
 */
export default function multiply(into, left, right) {
  var leftRows = left.rows;
  var leftColumns = left.columns;
  var rightColumns = right.columns;

  // loop over rows of left
  for(var leftRow = 0; leftRow < leftRows; leftRow++) {

    // loop over cols of right
    for(var rightColumn = 0; rightColumn < rightColumns; rightColumn++) {

      // dot product loop
      var dot = 0;

      //loop over columns of left
      for(var leftColumn = 0; leftColumn < leftColumns; leftColumn++) {
        dot +=
            left.weights[leftColumns * leftRow + leftColumn]
          * right.weights[rightColumns * leftColumn + rightColumn];
      }
      var i = rightColumns * leftRow + rightColumn;
      into.weights[i] = dot;
      into.recurrence[i] = 0;
    }
  }
}
