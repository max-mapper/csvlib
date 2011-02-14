var csv = function( csv ) {
  var _rows = csv.split('\n'),
      _header = _rows[0].split(','),
      _data = _rows.slice( 1 );
}