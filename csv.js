(function() {
  var csv = this.csv = {};
  
  // Export the csv object for CommonJS
  if ( typeof module !== 'undefined' && module.exports ) {
    module.exports = csv;
  }
      
  csv.rows = function( csv ) {
    return csv.split( '\n' );
  }
  
  csv.header = function( rows ) {
    return rows[0];
  }
  
  csv.data = function( rows ) {
    return rows.slice(1);
  }
  
  csv.properties = function( row ) {
    return row.split( ',' );
  }
  
  // from http://stackoverflow.com/questions/2210437/flattening-a-complex-json-object-for-mvc-binding
  csv.flattenJSON = function( json ) {
    var nj = {},
      walk = function( j ) {
        var jp;
        for( var prop in j ) {
          jp = j[prop];
          if( jp.toString() === "[object Object]" ){
            walk( jp );
          } else {
            nj[prop] = jp;
          }
        }
      };
    walk( json );
    return nj;
  }
  
  csv.buildHeaders = function( json ) {
    var keys = [];
    var flatRow = csv.flattenJSON( json );
    for ( var key in flatRow ) {
      keys.push( key );
    }
    return keys.join( ',' ) + "\n";
  }
  
  csv.buildRow = function( json ) {
    var keys = [];
    var flatRow = csv.flattenJSON( json );
    for ( var key in flatRow ) {
      keys.push( flatRow[key] );
    }
    return keys.join( ',' ) + "\n";
  }

})();